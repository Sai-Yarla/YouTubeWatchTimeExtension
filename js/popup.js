/**
 * Popup Script
 * Handles the extension popup UI
 */

// DOM elements
const todayTimeEl = document.getElementById('todayTime');
const totalTimeEl = document.getElementById('totalTime');
const totalDaysEl = document.getElementById('totalDays');
const lastTrackedEl = document.getElementById('lastTracked');
const exportBtn = document.getElementById('exportBtn');
const resetBtn = document.getElementById('resetBtn');
const statusMsg = document.getElementById('statusMsg');

/**
 * Load and display statistics
 */
async function loadStats() {
  chrome.runtime.sendMessage({ action: 'getStats' }, (response) => {
    if (response) {
      todayTimeEl.textContent = response.today;
      totalTimeEl.textContent = response.total;
      totalDaysEl.textContent = response.totalDays;
      lastTrackedEl.textContent = response.totalDays > 0 
        ? `Last tracked: ${response.lastTracked}`
        : 'No data yet';
    }
  });
}

/**
 * Show status message
 */
function showStatus(message, type = 'info') {
  statusMsg.textContent = message;
  statusMsg.className = `status-message show ${type}`;
  
  if (type !== 'loading') {
    setTimeout(() => {
      statusMsg.classList.remove('show');
    }, 3000);
  }
}

/**
 * Export to Excel
 */
exportBtn.addEventListener('click', () => {
  showStatus('Exporting data...', 'loading');
  
  chrome.runtime.sendMessage({ action: 'exportData' }, (response) => {
    if (response && response.status === 'exported') {
      showStatus(`✓ Exported! File: ${response.filename}`, 'success');
    } else {
      showStatus('✗ Export failed', 'error');
    }
  });
});

/**
 * Reset data
 */
resetBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to delete all watchtime data? This cannot be undone.')) {
    chrome.runtime.sendMessage({ action: 'resetData' }, (response) => {
      showStatus('✓ Data reset', 'success');
      setTimeout(loadStats, 500);
    });
  }
});

/**
 * Refresh stats when popup opens
 */
window.addEventListener('focus', loadStats);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    loadStats();
  }
});

// Initial load
loadStats();
setInterval(loadStats, 2000); // Refresh every 2 seconds while popup is open

console.log('YouTube Watchtime Tracker - Popup Script loaded');
