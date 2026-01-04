/**
 * Export UI Controller
 * Handles the export page user interface
 */

let currentSpreadsheetId = null;

/**
 * Initialize the export page
 */
async function initializeExportPage() {
  await loadStats();
  await loadSpreadsheetId();
  await loadApiKey();
  setupEventListeners();
  await loadAutoExportSetting();
}

/**
 * Load and display watchtime statistics
 */
async function loadStats() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['watchtimeData'], (result) => {
      const watchtimeData = result.watchtimeData || {};
      
      let totalDays = 0;
      let totalSeconds = 0;

      for (const [date, data] of Object.entries(watchtimeData)) {
        totalDays++;
        totalSeconds += (data.youtube || 0) + (data.twitch || 0);
      }

      const totalHours = (totalSeconds / 3600).toFixed(1);

      // Update UI
      const statBoxes = document.querySelectorAll('.stat-value');
      if (statBoxes.length >= 2) {
        statBoxes[0].textContent = totalDays;
        statBoxes[1].textContent = totalHours;
      }

      resolve();
    });
  });
}

/**
 * Load stored spreadsheet ID
 */
async function loadSpreadsheetId() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['watchtimeSheetId'], (result) => {
      if (result.watchtimeSheetId) {
        currentSpreadsheetId = result.watchtimeSheetId;
        document.getElementById('viewBtn').style.display = 'inline-flex';
        document.getElementById('sheetIdInfo').style.display = 'block';
        document.getElementById('sheetIdDisplay').textContent = currentSpreadsheetId;
      }
      resolve();
    });
  });
}

/**
 * Load auto-export setting
 */
async function loadAutoExportSetting() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['autoExport'], (result) => {
      const autoExportCheckbox = document.getElementById('autoExport');
      if (autoExportCheckbox && result.autoExport !== undefined) {
        autoExportCheckbox.checked = result.autoExport;
      }
      resolve();
    });
  });
}

/**
 * Load saved API key
 */
async function loadApiKey() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['googleSheetsApiKey'], (result) => {
      if (result.googleSheetsApiKey) {
        const apiKeyInput = document.getElementById('apiKeyInput');
        if (apiKeyInput) {
          apiKeyInput.value = result.googleSheetsApiKey;
        }
      }
      resolve();
    });
  });
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  const exportBtn = document.getElementById('exportBtn');
  const viewBtn = document.getElementById('viewBtn');
  const autoExportCheckbox = document.getElementById('autoExport');
  const copySheetIdBtn = document.getElementById('copySheetIdBtn');
  const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');

  if (exportBtn) {
    exportBtn.addEventListener('click', handleExport);
  }

  if (viewBtn) {
    viewBtn.addEventListener('click', handleViewSheet);
  }

  if (autoExportCheckbox) {
    autoExportCheckbox.addEventListener('change', (e) => {
      chrome.storage.sync.set({ autoExport: e.target.checked });
    });
  }

  if (copySheetIdBtn) {
    copySheetIdBtn.addEventListener('click', () => {
      const sheetId = document.getElementById('sheetIdDisplay').textContent;
      navigator.clipboard.writeText(sheetId).then(() => {
        const originalText = copySheetIdBtn.textContent;
        copySheetIdBtn.textContent = '✓ Copied!';
        setTimeout(() => {
          copySheetIdBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  if (saveApiKeyBtn) {
    saveApiKeyBtn.addEventListener('click', () => {
      const apiKey = document.getElementById('apiKeyInput').value;
      if (apiKey.trim()) {
        chrome.storage.sync.set({ googleSheetsApiKey: apiKey }, () => {
          const originalText = saveApiKeyBtn.textContent;
          saveApiKeyBtn.textContent = '✓ Saved!';
          saveApiKeyBtn.style.background = '#28a745';
          setTimeout(() => {
            saveApiKeyBtn.textContent = originalText;
            saveApiKeyBtn.style.background = '#667eea';
          }, 2000);
        });
      } else {
        chrome.storage.sync.remove(['googleSheetsApiKey'], () => {
          const originalText = saveApiKeyBtn.textContent;
          saveApiKeyBtn.textContent = '✓ Cleared!';
          saveApiKeyBtn.style.background = '#dc3545';
          setTimeout(() => {
            saveApiKeyBtn.textContent = originalText;
            saveApiKeyBtn.style.background = '#667eea';
            document.getElementById('apiKeyInput').value = '';
          }, 2000);
        });
      }
    });
  }
}

/**
 * Handle export button click
 */
async function handleExport() {
  const exportBtn = document.getElementById('exportBtn');
  const statusMessage = document.getElementById('statusMessage');
  const includeToday = document.getElementById('includeToday').checked;

  // Disable button and show loading
  exportBtn.disabled = true;
  showStatus('loading', '<span class="spinner"></span>Exporting your watchtime data...');

  try {
    // Get data from storage
    const watchtimeData = await new Promise((resolve) => {
      chrome.storage.local.get(['watchtimeData'], (result) => {
        let data = result.watchtimeData || {};

        // Optionally exclude today's data
        if (!includeToday) {
          const today = new Date().toISOString().split('T')[0];
          const filteredData = {};
          for (const [date, value] of Object.entries(data)) {
            if (date !== today) {
              filteredData[date] = value;
            }
          }
          data = filteredData;
        }

        resolve(data);
      });
    });

    if (Object.keys(watchtimeData).length === 0) {
      showStatus('error', 'No watchtime data to export. Start tracking to export data.');
      exportBtn.disabled = false;
      return;
    }

    // Call export function from background script with retry
    const result = await sendMessageWithRetry(
      {
        action: 'exportToSheets',
        data: watchtimeData,
        spreadsheetId: currentSpreadsheetId,
      },
      3 // retry 3 times
    );

    if (result.success) {
      currentSpreadsheetId = result.spreadsheetId;
      document.getElementById('viewBtn').style.display = 'inline-flex';
      document.getElementById('sheetIdInfo').style.display = 'block';
      document.getElementById('sheetIdDisplay').textContent = currentSpreadsheetId;

      showStatus(
        'success',
        `✓ Successfully exported ${result.rowsExported} days of data!<br>
         <a href="${result.spreadsheetUrl}" target="_blank">Open in Google Sheets →</a>`
      );
    } else {
      showStatus('error', `Export failed: ${result.error}`);
    }
  } catch (error) {
    console.error('Export error:', error);
    showStatus('error', `An error occurred: ${error.message}`);
  } finally {
    exportBtn.disabled = false;
  }
}

/**
 * Send message to background script with retry logic
 */
async function sendMessageWithRetry(message, maxRetries = 3) {
  return new Promise((resolve, reject) => {
    let retries = 0;

    const attemptSend = () => {
      try {
        chrome.runtime.sendMessage(message, (response) => {
          if (chrome.runtime.lastError) {
            const error = chrome.runtime.lastError.message;
            // Retry on context invalidated error
            if (
              error.includes('context invalidated') ||
              error.includes('port closed')
            ) {
              if (retries < maxRetries) {
                retries++;
                console.log(`Retry attempt ${retries}/${maxRetries}...`);
                setTimeout(attemptSend, 1000); // Wait 1 second before retry
                return;
              }
            }
            resolve({
              success: false,
              error: error,
            });
          } else if (response) {
            resolve(response);
          } else {
            resolve({
              success: false,
              error: 'No response from background script',
            });
          }
        });
      } catch (error) {
        if (retries < maxRetries) {
          retries++;
          console.log(`Retry attempt ${retries}/${maxRetries}...`);
          setTimeout(attemptSend, 1000);
        } else {
          resolve({
            success: false,
            error: error.message,
          });
        }
      }
    };

    attemptSend();
  });
}

/**
 * Handle view sheet button click
 */
function handleViewSheet() {
  if (currentSpreadsheetId) {
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${currentSpreadsheetId}`;
    chrome.tabs.create({ url: sheetUrl });
  }
}

/**
 * Show status message
 */
function showStatus(type, message) {
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.className = `status-message ${type}`;
  statusMessage.innerHTML = message;
}

/**
 * Clear status message
 */
function clearStatus() {
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.className = 'status-message';
  statusMessage.textContent = '';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeExportPage);
} else {
  initializeExportPage();
}
