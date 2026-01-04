/**
 * Background Service Worker
 * Tracks YouTube watchtime across all tabs
 */

// Active tabs that are currently playing YouTube videos
const activeTabs = new Map();

// Interval for recording watchtime (1 second)
const RECORDING_INTERVAL = 1000;

// Listener for content script messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    if (request.action === 'playerStateChanged') {
      handlePlayerStateChange(sender.tab.id, request.isPlaying, request.videoId, request.videoTitle);
      sendResponse({ status: 'received' });
    } else if (request.action === 'getStats') {
      getStats(sendResponse);
      return true; // Keep channel open for async response
    } else if (request.action === 'exportData') {
      exportToExcel(sendResponse);
      return true;
    } else if (request.action === 'resetData') {
      resetAllData(sendResponse);
      sendResponse({ status: 'reset' });
    }
  } catch (error) {
    console.error('Error in message listener:', error);
    sendResponse({ error: error.message });
  }
});

/**
 * Handle player state changes from content script
 */
function handlePlayerStateChange(tabId, isPlaying, videoId, videoTitle) {
  const today = new Date().toISOString().split('T')[0];

  if (isPlaying) {
    // Video started playing
    if (!activeTabs.has(tabId)) {
      activeTabs.set(tabId, {
        tabId,
        videoId,
        videoTitle,
        startTime: Date.now(),
        lastRecordedTime: Date.now()
      });
      console.log(`[${today}] Started tracking: ${videoTitle}`);
    }
  } else {
    // Video stopped playing
    if (activeTabs.has(tabId)) {
      const session = activeTabs.get(tabId);
      const watchedSeconds = Math.floor((Date.now() - session.lastRecordedTime) / 1000);
      
      if (watchedSeconds > 0) {
        recordWatchtime(session.videoId, session.videoTitle, watchedSeconds, today);
      }
      
      activeTabs.delete(tabId);
      console.log(`[${today}] Stopped tracking: ${session.videoTitle}`);
    }
  }
}

/**
 * Record watchtime to storage
 */
async function recordWatchtime(videoId, videoTitle, seconds, date) {
  const data = await chrome.storage.local.get('watchtimeData') || {};
  const watchtimeData = data.watchtimeData || {};

  if (!watchtimeData[date]) {
    watchtimeData[date] = [];
  }

  watchtimeData[date].push({
    videoId,
    videoTitle,
    seconds,
    timestamp: Date.now()
  });

  await chrome.storage.local.set({ watchtimeData });
  console.log(`Recorded ${seconds}s for: ${videoTitle}`);
}

/**
 * Background task: Record time every second for active tabs
 */
setInterval(async () => {
  const today = new Date().toISOString().split('T')[0];
  
  for (const [tabId, session] of activeTabs) {
    const elapsedSeconds = Math.floor((Date.now() - session.lastRecordedTime) / 1000);
    
    if (elapsedSeconds >= 1) {
      // Check if tab still exists and is YouTube
      try {
        const tab = await chrome.tabs.get(tabId);
        if (tab && tab.url && tab.url.includes('youtube.com')) {
          // Record the watchtime
          recordWatchtime(session.videoId, session.videoTitle, elapsedSeconds, today);
          session.lastRecordedTime = Date.now();
        } else {
          // Tab closed or navigated away
          activeTabs.delete(tabId);
        }
      } catch (e) {
        // Tab no longer exists
        activeTabs.delete(tabId);
      }
    }
  }
}, RECORDING_INTERVAL);

/**
 * Clean up when tab is closed
 */
chrome.tabs.onRemoved.addListener((tabId) => {
  if (activeTabs.has(tabId)) {
    const session = activeTabs.get(tabId);
    const today = new Date().toISOString().split('T')[0];
    const watchedSeconds = Math.floor((Date.now() - session.lastRecordedTime) / 1000);
    
    if (watchedSeconds > 0) {
      recordWatchtime(session.videoId, session.videoTitle, watchedSeconds, today);
    }
    
    activeTabs.delete(tabId);
  }
});

/**
 * Get statistics
 */
async function getStats(sendResponse) {
  const data = await chrome.storage.local.get('watchtimeData');
  const watchtimeData = data.watchtimeData || {};

  const today = new Date().toISOString().split('T')[0];
  const todayData = watchtimeData[today] || [];
  
  let todaySeconds = 0;
  let totalSeconds = 0;

  // Calculate today's total
  todayData.forEach(entry => {
    todaySeconds += entry.seconds;
  });

  // Calculate all-time total
  Object.values(watchtimeData).forEach(dayEntries => {
    dayEntries.forEach(entry => {
      totalSeconds += entry.seconds;
    });
  });

  const totalDays = Object.keys(watchtimeData).length;

  sendResponse({
    today: secondsToTime(todaySeconds),
    total: secondsToTime(totalSeconds),
    totalDays,
    lastTracked: today,
    raw: { todaySeconds, totalSeconds }
  });
}

/**
 * Convert seconds to human-readable time
 */
function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

/**
 * Export data to Excel
 */
async function exportToExcel(sendResponse) {
  const data = await chrome.storage.local.get('watchtimeData');
  const watchtimeData = data.watchtimeData || {};

  // Create CSV data
  let csv = 'Date,Video Title,Minutes Watched\n';

  Object.keys(watchtimeData)
    .sort()
    .forEach(date => {
      watchtimeData[date].forEach(entry => {
        const minutes = Math.floor(entry.seconds / 60);
        const title = entry.videoTitle.replace(/"/g, '""'); // Escape quotes
        csv += `${date},"${title}",${minutes}\n`;
      });
    });

  // Create blob and download
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const filename = `watchtime_${new Date().toISOString().split('T')[0]}.csv`;

  chrome.downloads.download({
    url: url,
    filename: filename,
    saveAs: false
  }, (downloadId) => {
    console.log('Download started with ID:', downloadId);
    sendResponse({ status: 'exported', filename });
  });
}

/**
 * Reset all data
 */
async function resetAllData(sendResponse) {
  await chrome.storage.local.remove('watchtimeData');
  activeTabs.clear();
  sendResponse({ status: 'reset' });
}

console.log('YouTube Watchtime Tracker - Background Service Worker loaded');
