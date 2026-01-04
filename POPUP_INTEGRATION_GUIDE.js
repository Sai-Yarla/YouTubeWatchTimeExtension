/**
 * Popup Integration Script
 * 
 * Add this code to your existing popup component to integrate the export feature.
 * This can be added to your React/Vue component or vanilla JS popup.
 */

// Example for vanilla JavaScript popup integration:

/**
 * Add Export Button to Popup
 */
function addExportButton() {
  // Create button element
  const exportButton = document.createElement('button');
  exportButton.id = 'export-watchtime-btn';
  exportButton.textContent = '📊 Export to Google Sheets';
  exportButton.style.cssText = `
    width: 100%;
    padding: 12px 16px;
    margin: 12px 0;
    border: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
  `;

  // Add hover effect
  exportButton.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)';
  });

  exportButton.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });

  // Add click handler
  exportButton.addEventListener('click', openExportPage);

  // Insert into popup (adjust selector as needed)
  const popupContainer = document.querySelector('#popup-root') || document.body;
  popupContainer.appendChild(exportButton);
}

/**
 * Open Export Page
 */
function openExportPage() {
  const exportUrl = chrome.runtime.getURL('export.html');
  window.location.href = exportUrl;
  // Or open in a new tab:
  // chrome.tabs.create({ url: exportUrl });
}

/**
 * React Component Example
 */
/*
import React, { useState } from 'react';

export function ExportButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = () => {
    setIsLoading(true);
    const exportUrl = chrome.runtime.getURL('export.html');
    chrome.tabs.create({ url: exportUrl }, () => {
      setIsLoading(false);
    });
  };

  return (
    <button
      onClick={handleExport}
      disabled={isLoading}
      style={{
        width: '100%',
        padding: '12px 16px',
        margin: '12px 0',
        border: 'none',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        fontSize: '14px',
        opacity: isLoading ? 0.7 : 1,
      }}
    >
      {isLoading ? 'Opening Export...' : '📊 Export to Google Sheets'}
    </button>
  );
}
*/

/**
 * Vue Component Example
 */
/*
<template>
  <button
    @click="openExportPage"
    :disabled="isLoading"
    class="export-button"
  >
    {{ isLoading ? 'Opening Export...' : '📊 Export to Google Sheets' }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    openExportPage() {
      this.isLoading = true;
      const exportUrl = chrome.runtime.getURL('export.html');
      chrome.tabs.create({ url: exportUrl }, () => {
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
.export-button {
  width: 100%;
  padding: 12px 16px;
  margin: 12px 0;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.export-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.export-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
*/

// Initialize if script is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Uncomment to auto-add button
    // addExportButton();
  });
} else {
  // Uncomment to auto-add button
  // addExportButton();
}

// Alternative: Emit event to parent component
const exportEvent = new CustomEvent('extensionReady', {
  detail: {
    openExportPage: openExportPage,
    addExportButton: addExportButton,
  },
});

if (typeof window !== 'undefined') {
  window.dispatchEvent(exportEvent);
}
