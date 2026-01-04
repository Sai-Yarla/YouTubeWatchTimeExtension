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
 * Setup event listeners
 */
function setupEventListeners() {
  const exportBtn = document.getElementById('exportBtn');
  const viewBtn = document.getElementById('viewBtn');
  const autoExportCheckbox = document.getElementById('autoExport');

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

    // Call export function from background script
    const result = await new Promise((resolve) => {
      chrome.runtime.sendMessage(
        {
          action: 'exportToSheets',
          data: watchtimeData,
          spreadsheetId: currentSpreadsheetId,
        },
        (response) => {
          if (chrome.runtime.lastError) {
            resolve({
              success: false,
              error: chrome.runtime.lastError.message,
            });
          } else {
            resolve(response);
          }
        }
      );
    });

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
