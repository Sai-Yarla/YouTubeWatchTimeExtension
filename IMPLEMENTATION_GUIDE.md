# Google Sheets Export Feature - Implementation Guide

## Overview

Your YouTube/Twitch Watchtime Tracker extension has been enhanced with Google Sheets export functionality. This guide explains the new files, how they work, and how to integrate them with your existing popup UI.

## New Files Created

### 1. **`export.html`** - Export Interface
- Beautiful, responsive export page
- Displays watchtime statistics
- One-click export to Google Sheets
- Shows current spreadsheet ID
- Advanced options for auto-export

**Location**: `c:\Users\ysaim\OneDrive\Documents\Code\Youtube Watchtime Extension\export.html`

### 2. **`js/googleSheetsExport.js`** - Core API Module
- Handles all Google Sheets API interactions
- Creates new spreadsheets
- Formats sheets with headers
- Updates sheet values
- Manages authentication tokens

**Key Functions**:
- `exportDailyTotals(dailyData, spreadsheetId)` - Export data to sheets
- `exportDailyTotalsWithAutoSave(dailyData)` - Export with auto-save
- `getAccessToken()` - Get user's OAuth token
- `createWatchtimeSheet(token)` - Create new spreadsheet

### 3. **`js/exportUI.js`** - UI Controller
- Manages the export page interface
- Loads statistics from storage
- Handles button clicks
- Shows success/error messages
- Manages auto-export settings

**Key Functions**:
- `initializeExportPage()` - Set up the page
- `handleExport()` - Process export request
- `loadStats()` - Load watchtime statistics
- `showStatus(type, message)` - Display messages

### 4. **`js/backgroundExtension.js`** - Background Service Worker
- Extends existing background script
- Handles export requests from popup/export page
- Manages automatic daily exports
- Stores spreadsheet ID in sync storage

**Key Functions**:
- `handleExportToSheets(dailyData, spreadsheetId)` - Process export
- `handleAutoExport()` - Automatic daily export
- Message listener for popup integration

### 5. **Updated `manifest.json`**
Changes made:
- Added Google Sheets API scopes to OAuth2
- Added `alarms` permission for auto-export
- Updated web_accessible_resources
- Bumped version to 2.4.2

## How It Works

### Export Flow

```
User clicks "Export" 
    ↓
Extension gets OAuth token
    ↓
Creates new Google Sheet (if needed)
    ↓
Formats headers and styling
    ↓
Uploads daily watchtime data
    ↓
Saves spreadsheet ID for future use
    ↓
Shows success message with sheet link
```

### Data Storage

The extension uses Chrome Storage API:
- **Local Storage** (`chrome.storage.local`): Daily watchtime data
  - Key: `watchtimeData`
  - Format: `{ "2024-01-01": { youtube: 7200, twitch: 3600 }, ... }`

- **Sync Storage** (`chrome.storage.sync`): User settings
  - `watchtimeSheetId`: ID of user's Google Sheet
  - `autoExport`: Whether to auto-export daily

## Integration with Your Popup

### Option 1: Simple Button in Popup

Add this to your popup component:

```html
<button id="export-btn" onclick="openExportPage()">
  📊 Export to Google Sheets
</button>

<script>
function openExportPage() {
  chrome.tabs.create({ url: chrome.runtime.getURL('export.html') });
}
</script>
```

### Option 2: React Component

```jsx
import React from 'react';

export function ExportButton() {
  const handleClick = () => {
    const exportUrl = chrome.runtime.getURL('export.html');
    chrome.tabs.create({ url: exportUrl });
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
      }}
    >
      📊 Export to Google Sheets
    </button>
  );
}
```

### Option 3: Via Message Passing

From your popup:
```javascript
chrome.runtime.sendMessage(
  { action: 'openExportPage' },
  (response) => console.log(response)
);
```

## API Permissions Used

The extension now requires these Google API permissions:

1. **Google Sheets API** (`https://www.googleapis.com/auth/spreadsheets`)
   - Create and edit spreadsheets
   - Format cells and rows

2. **Google Drive API** (`https://www.googleapis.com/auth/drive`)
   - Access to spreadsheets
   - Manage file permissions

3. **Identity API** (Chrome native)
   - Existing permission for user authentication

## Testing the Export Feature

1. **First Time Setup**:
   ```
   - Open export.html
   - Click "Export to Sheets"
   - Approve Google permissions dialog
   - A new sheet will be created
   - Data will be exported
   ```

2. **Verify Sheet Format**:
   - Headers: Date, YouTube (hours), Twitch (hours), Total (hours)
   - Header row is frozen and formatted
   - Data rows show correct hours (converted from seconds)

3. **Test Auto-Export**:
   - Enable "Auto-export on next update"
   - Next daily export happens automatically at 2 AM

## Data Format in Google Sheets

The exported data looks like this:

```
┌────────────────┬──────────────────┬─────────────────┬────────────────┐
│ Date           │ YouTube (hours)  │ Twitch (hours)  │ Total (hours)  │
├────────────────┼──────────────────┼─────────────────┼────────────────┤
│ 2024-01-01     │ 2.50             │ 1.75            │ 4.25           │
│ 2024-01-02     │ 3.25             │ 0.50            │ 3.75           │
│ 2024-01-03     │ 2.00             │ 2.00            │ 4.00           │
└────────────────┴──────────────────┴─────────────────┴────────────────┘
```

## Troubleshooting

### "Failed to get auth token"
- User isn't logged into a Google account
- Request user to sign in to their Google account
- Check OAuth2 configuration in manifest

### "Failed to create sheet"
- Google Sheets API isn't enabled for your OAuth app
- Check Google Cloud Console project settings
- Verify client ID in manifest

### Data not appearing
- Check Chrome Storage API has permission
- Verify `watchtimeData` is being stored in local storage
- Check browser console for errors

## File Structure After Updates

```
Youtube Watchtime Extension/
├── manifest.json (updated)
├── popup.html
├── export.html (NEW)
├── css/
│   └── popup.css
├── js/
│   ├── background.bundle.js (existing)
│   ├── contentScript.bundle.js (existing)
│   ├── popup.bundle.js (existing)
│   ├── youtubeHook.bundle.js (existing)
│   ├── twitchHook.bundle.js (existing)
│   ├── googleSheetsExport.js (NEW)
│   ├── exportUI.js (NEW)
│   └── backgroundExtension.js (NEW)
├── assets/
│   └── icons/
└── SHEETS_EXPORT_FEATURE.md (NEW - feature documentation)
```

## Security Considerations

1. **OAuth 2.0**: Uses standard Google OAuth for authentication
2. **Local Storage**: Watch data stays on device until exported
3. **Sync Storage**: Only spreadsheet ID and settings are synced
4. **No Server**: Direct communication between extension and Google APIs
5. **User Control**: Export only happens on explicit user action (except auto-export if enabled)

## Next Steps

1. **Integrate Export Button** into your existing popup using the patterns above
2. **Test the feature** with real Google accounts
3. **Update your extension version** in manifest (currently 2.4.2)
4. **Publish to Chrome Web Store** when ready
5. **Monitor user feedback** and iterate

## Support & Maintenance

- Keep Google API scopes updated if adding new features
- Monitor Chrome API changes (manifest v3 is relatively new)
- Test regularly with different Google account types
- Update error handling based on user feedback

## Version Updates

- **v2.4.2**: Added Google Sheets export with auto-save
- Future: Consider adding export to CSV, other formats, or cloud services
