# Watchtime Tracker - Google Sheets Export Feature

## Overview
This extension has been updated to include the ability to export your daily YouTube and Twitch watchtime totals directly to a Google Sheet.

## New Features

### 1. Export Page (`export.html`)
A dedicated page for managing your watchtime exports with:
- **Daily Statistics**: View total days tracked and total hours watched
- **One-Click Export**: Export all tracked data to Google Sheets
- **Auto-Export Option**: Enable automatic exports on updates
- **View Sheet**: Quick access to open your spreadsheet
- **Advanced Options**: Control over what data to export

### 2. Google Sheets Integration
- **Automatic Sheet Creation**: First export creates a new spreadsheet
- **Formatted Headers**: Professional formatting with bold headers and color
- **Frozen Header Row**: Easy scrolling through your data
- **Organized Columns**: Date, YouTube hours, Twitch hours, and Total hours

### 3. Auto-Export (Optional)
- Enable in the export settings to automatically export data daily
- Spreadsheet ID is saved for future exports
- All data is sent securely using OAuth 2.0

## How to Use

### Manual Export
1. Click the extension icon and navigate to the export page
2. Click **"Export to Sheets"**
3. Approve the Google Sheets access request (first time only)
4. Your data will be exported to a new Google Sheet
5. Click **"View Sheet"** to open the spreadsheet

### Auto-Export
1. Open the export page
2. Enable the **"Auto-export on next update"** checkbox
3. Your data will be automatically exported daily at 2 AM

### View Your Data
- Click the **"View Sheet"** button to open your spreadsheet
- All your tracked data is organized by date with calculated totals

## Data Format

The exported spreadsheet includes:

| Date | YouTube (hours) | Twitch (hours) | Total (hours) |
|------|-----------------|----------------|---------------|
| 2024-01-01 | 2.50 | 1.75 | 4.25 |
| 2024-01-02 | 3.00 | 0.50 | 3.50 |

## Privacy & Security

- Your data is stored locally on your device
- OAuth 2.0 authentication ensures secure access to Google Sheets
- Data is only sent to Google when you explicitly export
- Your spreadsheet ID is saved locally for convenient future exports

## New Files Added

- **`export.html`** - Export interface and UI
- **`js/exportUI.js`** - Export page controller
- **`js/googleSheetsExport.js`** - Google Sheets API integration
- **`js/backgroundExtension.js`** - Background service worker extension

## Updated Files

- **`manifest.json`** - Added Google Sheets API permissions and auto-export alarm

## Manifest Changes

The following permissions were added:
- `https://www.googleapis.com/auth/spreadsheets` - Create and edit sheets
- `https://www.googleapis.com/auth/drive` - Access to drive resources
- `alarms` - For automatic daily exports

## Troubleshooting

### Export Failed
- Ensure you're logged into your Google account
- Check your internet connection
- Verify Google Sheets API is enabled in your Google Cloud Console

### Can't Find Sheet
- The spreadsheet ID is displayed in the Advanced Options section
- You can manually visit: `https://docs.google.com/spreadsheets/d/[SHEET_ID]`

### Permission Issues
- The extension requests OAuth access on first export
- You can revoke permissions in your Google Account settings and re-authenticate

## Version History

- **v2.4.2** - Added Google Sheets export functionality
- **v2.4.1** - Previous version

## Support

For issues or feedback, visit: https://analytics.lucask.dev/
