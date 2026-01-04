/**
 * Google Sheets Export Module
 * Handles exporting daily watchtime totals to Google Sheets
 */

const SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets';
const DRIVE_API_URL = 'https://www.googleapis.com/drive/v3';

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
  try {
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
  } catch (error) {
    console.error('Error creating spreadsheet:', error);
    throw error;
  }
}

/**
 * Initialize sheet headers
 */
async function initializeSheetHeaders(token, spreadsheetId) {
  try {
    const headers = [
      ['Date', 'YouTube (hours)', 'Twitch (hours)', 'Total (hours)']
    ];

    await updateSheetValues(token, spreadsheetId, 'Daily Totals!A1:D1', headers);
    
    // Format header row
    await formatHeaderRow(token, spreadsheetId);
  } catch (error) {
    console.error('Error initializing headers:', error);
    throw error;
  }
}

/**
 * Update sheet values
 */
async function updateSheetValues(token, spreadsheetId, range, values) {
  try {
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
  } catch (error) {
    console.error('Error updating sheet values:', error);
    throw error;
  }
}

/**
 * Format the header row with bold text and background color
 */
async function formatHeaderRow(token, spreadsheetId) {
  try {
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

/**
 * Export daily totals to Google Sheets
 * @param {Object} dailyData - Object with date as key and watchtime data as value
 * @param {string} spreadsheetId - ID of the spreadsheet (optional, will create new if not provided)
 */
async function exportDailyTotals(dailyData, spreadsheetId = null) {
  try {
    const token = await getAccessToken();
    
    // Create new sheet if not provided
    if (!spreadsheetId) {
      spreadsheetId = await createWatchtimeSheet(token);
      await initializeSheetHeaders(token, spreadsheetId);
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
  } catch (error) {
    console.error('Error exporting to Google Sheets:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Get stored spreadsheet ID from Chrome storage
 */
async function getStoredSpreadsheetId() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['watchtimeSheetId'], (result) => {
      resolve(result.watchtimeSheetId || null);
    });
  });
}

/**
 * Save spreadsheet ID to Chrome storage
 */
async function saveSpreadsheetId(spreadsheetId) {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ watchtimeSheetId: spreadsheetId }, resolve);
  });
}

/**
 * Export with auto-save feature
 */
async function exportDailyTotalsWithAutoSave(dailyData) {
  try {
    let spreadsheetId = await getStoredSpreadsheetId();
    const result = await exportDailyTotals(dailyData, spreadsheetId);

    if (result.success && !spreadsheetId) {
      // Save new spreadsheet ID for future use
      await saveSpreadsheetId(result.spreadsheetId);
    }

    return result;
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    exportDailyTotals,
    exportDailyTotalsWithAutoSave,
    getStoredSpreadsheetId,
    saveSpreadsheetId,
    getAccessToken,
  };
}
