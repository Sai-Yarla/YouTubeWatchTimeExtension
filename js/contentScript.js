/**
 * Content Script
 * Monitors YouTube video playback and reports to background service worker
 */

let lastPlayerState = null;
let currentVideoId = null;
let currentVideoTitle = null;

/**
 * Get video ID from URL
 */
function getVideoIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('v');
}

/**
 * Extract video title from page
 */
function getVideoTitle() {
  // Try multiple selectors as YouTube changes their DOM structure
  let title = document.querySelector('h1.title yt-formatted-string')?.textContent;
  if (!title) {
    title = document.querySelector('h1 yt-formatted-string')?.textContent;
  }
  if (!title) {
    title = document.querySelector('yt-formatted-string[class*="title"]')?.textContent;
  }
  if (!title) {
    title = document.title.split(' - YouTube')[0];
  }
  return title || 'Unknown Video';
}

/**
 * Get player state from YouTube's internal player
 */
function getPlayerState() {
  // YouTube player states: 0=ended, 1=playing, 2=paused, 3=buffering, 5=unstarted
  try {
    const video = document.querySelector('video');
    if (!video) return null;

    // Check if video is playing (not paused, not ended, has duration)
    const isPlaying = !video.paused && video.currentTime > 0 && video.duration > 0;
    return isPlaying ? 1 : 2; // 1=playing, 2=paused
  } catch (e) {
    return null;
  }
}

/**
 * Monitor video element for play/pause events
 */
function monitorVideoElement() {
  const video = document.querySelector('video');
  
  if (!video) {
    // Retry if video element not found yet
    setTimeout(monitorVideoElement, 500);
    return;
  }

  // Listen to play event
  video.addEventListener('play', () => {
    console.log('Video play event detected');
    notifyPlayerStateChange();
  }, true);

  // Listen to pause event
  video.addEventListener('pause', () => {
    console.log('Video pause event detected');
    notifyPlayerStateChange();
  }, true);

  // Listen to ended event
  video.addEventListener('ended', () => {
    console.log('Video ended event detected');
    notifyPlayerStateChange();
  }, true);

  // Monitor video changes (when user switches videos)
  video.addEventListener('loadstart', () => {
    console.log('New video loading');
    notifyPlayerStateChange();
  }, true);
}

/**
 * Notify background service worker of player state change
 */
function notifyPlayerStateChange() {
  const videoId = getVideoIdFromUrl();
  const playerState = getPlayerState();
  const videoTitle = getVideoTitle();

  // Only notify if state actually changed
  if (lastPlayerState === playerState && currentVideoId === videoId) {
    return;
  }

  lastPlayerState = playerState;
  currentVideoId = videoId;
  currentVideoTitle = videoTitle;

  const isPlaying = playerState === 1;

  console.log(`Player state changed: ${isPlaying ? 'PLAYING' : 'PAUSED'} - ${videoTitle}`);

  try {
    chrome.runtime.sendMessage({
      action: 'playerStateChanged',
      isPlaying,
      videoId,
      videoTitle
    });
  } catch (error) {
    console.error('Failed to send message to background:', error);
  }
}

/**
 * Initial setup when page loads
 */
function initializeTracking() {
  currentVideoId = getVideoIdFromUrl();
  
  if (currentVideoId) {
    console.log('YouTube video page detected:', currentVideoId);
    
    // Monitor video element (may not exist yet, so retry)
    setTimeout(monitorVideoElement, 1000);
    
    // Periodic check every 5 seconds as fallback
    setInterval(notifyPlayerStateChange, 5000);
  }
}

// Start tracking when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTracking);
} else {
  initializeTracking();
}

// Also monitor URL changes for YouTube's single-page app navigation
let lastUrl = window.location.href;
setInterval(() => {
  if (window.location.href !== lastUrl) {
    lastUrl = window.location.href;
    lastPlayerState = null; // Reset state on navigation
    initializeTracking();
  }
}, 1000);

console.log('YouTube Watchtime Tracker - Content Script loaded');
