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

// Track current session seconds for real-time display
let currentSessionSeconds = 0;
let lastLoadedSeconds = 0;
let isVideoPlaying = false;
let sessionStartTime = 0;

/**
 * Convert seconds to human-readable time with seconds
 */
function secondsToTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
}

/**
 * Load and display statistics
 */
async function loadStats() {
  chrome.runtime.sendMessage({ action: 'getStats' }, (response) => {
    if (response) {
      lastLoadedSeconds = response.raw.todaySeconds;
      currentSessionSeconds = 0;
      sessionStartTime = Date.now();
      
      // Check if a video is currently playing
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.url?.includes('youtube.com')) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getPlayerState' }, (playerResponse) => {
            if (playerResponse && playerResponse.isPlaying) {
              isVideoPlaying = true;
            } else {
              isVideoPlaying = false;
            }
          }).catch(() => {
            isVideoPlaying = false;
          });
        }
      });
      
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
setInterval(loadStats, 2000); // Refresh stats every 2 seconds

// Update display every 100ms to show seconds changing in real-time
setInterval(() => {
  if (isVideoPlaying && sessionStartTime > 0) {
    const elapsedSeconds = Math.floor((Date.now() - sessionStartTime) / 1000);
    const totalTodaySeconds = lastLoadedSeconds + elapsedSeconds;
    todayTimeEl.textContent = secondsToTime(totalTodaySeconds);
  }
}, 100);

console.log('YouTube Watchtime Tracker - Popup Script loaded');
