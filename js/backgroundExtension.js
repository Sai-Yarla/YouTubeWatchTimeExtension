/**
 * Background Service Worker Extension
 * Adds Google Sheets export functionality to the existing background script
 */

// Import the original background script functionality
// Note: The original background.bundle.js functionality is maintained by Chrome's internal loading

// Listen for messages from content scripts and popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    // Handle export to sheets request
    if (request.action === 'exportToSheets') {
      handleExportToSheets(request.data, request.spreadsheetId)
        .then(sendResponse)
        .catch((error) => {
          sendResponse({
            success: false,
            error: error.message,
          });
        });
      // Return true to indicate we'll respond asynchronously
      return true;
    }

    // Handle getting spreadsheet ID
    if (request.action === 'getSpreadsheetId') {
      chrome.storage.sync.get(['watchtimeSheetId'], (result) => {
        sendResponse({ spreadsheetId: result.watchtimeSheetId || null });
      });
      return true;
    }

    // Handle opening export page
    if (request.action === 'openExportPage') {
      chrome.tabs.create({ url: 'export.html' });
      sendResponse({ success: true });
    }
  } catch (error) {
    console.error('Message handler error:', error);
    try {
      sendResponse({
        success: false,
        error: 'Extension context error. Please refresh the page.',
      });
    } catch (e) {
      // Context already invalidated, silent fail
    }
  }
});

/**
 * Handle exporting data to Google Sheets
 */
async function handleExportToSheets(dailyData, spreadsheetId) {
  const token = await getAccessToken();

  // Create new sheet if not provided
  if (!spreadsheetId) {
    spreadsheetId = await createWatchtimeSheet(token);
    await initializeSheetHeaders(token, spreadsheetId);
    // Save the spreadsheet ID
    await new Promise((resolve) => {
      chrome.storage.sync.set({ watchtimeSheetId: spreadsheetId }, resolve);
    });
  }

  // Prepare data rows
  const rows = [];
  for (const [date, data] of Object.entries(dailyData)) {
    const youtubeHours = (data.youtube || 0) / 3600; // Convert seconds to hours
    const twitchHours = (data.twitch || 0) / 3600;
    const totalHours = youtubeHours + twitchHours;

    rows.push([
      date,
      youtubeHours.toFixed(2),
      twitchHours.toFixed(2),
      totalHours.toFixed(2),
    ]);
  }

  // Append rows to sheet
  if (rows.length > 0) {
    await updateSheetValues(token, spreadsheetId, `Daily Totals!A2:D${rows.length + 1}`, rows);
  }

  return {
    success: true,
    spreadsheetId: spreadsheetId,
    spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    rowsExported: rows.length,
  };
}

/**
 * Get the access token for the current user
 */
async function getAccessToken() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError || !token) {
        reject(new Error('Failed to get auth token: ' + (chrome.runtime.lastError?.message || 'Unknown error')));
      } else {
        resolve(token);
      }
    });
  });
}

/**
 * Create a new Google Sheet for watchtime tracking
 */
async function createWatchtimeSheet(token) {
  const SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

  const response = await fetch(SHEETS_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title: `Watchtime Tracker - ${new Date().getFullYear()}`,
      },
      sheets: [
        {
          properties: {
            title: 'Daily Totals',
            index: 0,
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create sheet: ${response.statusText}`);
  }

  const spreadsheet = await response.json();
  return spreadsheet.spreadsheetId;
}

/**
 * Initialize sheet headers
 */
async function initializeSheetHeaders(token, spreadsheetId) {
  const headers = [
    ['Date', 'YouTube (hours)', 'Twitch (hours)', 'Total (hours)']
  ];

  await updateSheetValues(token, spreadsheetId, 'Daily Totals!A1:D1', headers);
  await formatHeaderRow(token, spreadsheetId);
}

/**
 * Update sheet values
 */
async function updateSheetValues(token, spreadsheetId, range, values) {
  const SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

  const response = await fetch(
    `${SHEETS_API_URL}/${spreadsheetId}/values/${range}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update values: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Format the header row
 */
async function formatHeaderRow(token, spreadsheetId) {
  const SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

  const requests = [
    {
      updateCellsRequest: {
        range: {
          sheetId: 0,
          rowIndex: 0,
          columnIndex: 0,
          endRowIndex: 1,
          endColumnIndex: 4,
        },
        rows: [
          {
            values: [
              {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.5, blue: 0.8 },
                  textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                  horizontalAlignment: 'CENTER',
                },
              },
              {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.5, blue: 0.8 },
                  textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                  horizontalAlignment: 'CENTER',
                },
              },
              {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.5, blue: 0.8 },
                  textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                  horizontalAlignment: 'CENTER',
                },
              },
              {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.5, blue: 0.8 },
                  textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                  horizontalAlignment: 'CENTER',
                },
              },
            ],
          },
        ],
        fields: 'userEnteredFormat',
      },
    },
    {
      updateSheetPropertiesRequest: {
        properties: {
          sheetId: 0,
          gridProperties: {
            frozenRowCount: 1,
          },
        },
        fields: 'gridProperties.frozenRowCount',
      },
    },
  ];

  try {
    const response = await fetch(
      `${SHEETS_API_URL}/${spreadsheetId}:batchUpdate`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requests }),
      }
    );

    if (!response.ok) {
      console.warn(`Warning: Could not format header: ${response.statusText}`);
    }
  } catch (error) {
    console.warn('Warning formatting header (non-fatal):', error);
  }
}

// Optional: Set up periodic auto-export
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'autoExportWatchtime') {
    handleAutoExport();
  }
});

/**
 * Handle automatic export
 */
async function handleAutoExport() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['autoExport'], async (syncResult) => {
      if (!syncResult.autoExport) {
        resolve();
        return;
      }

      chrome.storage.local.get(['watchtimeData'], async (result) => {
        const watchtimeData = result.watchtimeData || {};

        if (Object.keys(watchtimeData).length === 0) {
          resolve();
          return;
        }

        chrome.storage.sync.get(['watchtimeSheetId'], async (sheetResult) => {
          try {
            await handleExportToSheets(watchtimeData, sheetResult.watchtimeSheetId);
          } catch (error) {
            console.error('Auto-export failed:', error);
          }
          resolve();
        });
      });
    });
  });
}

// Set up auto-export alarm (daily at 2 AM)
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('autoExportWatchtime', {
    delayInMinutes: 1,
    periodInMinutes: 24 * 60, // Daily
  });
});
