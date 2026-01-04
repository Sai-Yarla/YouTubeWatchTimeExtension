# Quick Start: Google Sheets Export

## What's New?

Your extension now exports daily watchtime totals to Google Sheets!

## 5-Minute Setup

### Step 1: Access the Export Page
- Open your extension popup
- Look for a link to "Export Watchtime" or "Google Sheets"
- Or navigate directly to: `chrome-extension://[EXTENSION_ID]/export.html`

### Step 2: Click Export Button
- Click **"Export to Sheets"**
- First time users will see a Google authentication dialog
- Click **"Allow"** to grant permissions

### Step 3: Your Data is Live!
- The extension creates a new Google Sheet
- Your daily totals are uploaded
- A link appears to view your sheet
- Your spreadsheet ID is saved for future exports

## Using Your Exported Data

### View Statistics
Your sheet includes:
- **Date** - The day tracked
- **YouTube (hours)** - Hours spent on YouTube
- **Twitch (hours)** - Hours spent on Twitch  
- **Total (hours)** - Combined total

### Create Charts
In Google Sheets:
1. Select your data
2. Insert → Chart
3. Create visualizations of your watching habits

### Share Your Progress
- Share the sheet with friends/accountability partners
- Set sharing permissions in Google Sheets
- Export to PDF for reporting

## Auto-Export (Optional)

Enable daily automatic exports:
1. Open the export page
2. Check "Auto-export on next update"
3. Data exports automatically at 2 AM each day

## Troubleshooting

### Permission Denied?
- Sign out and sign back into Google
- Go to Google Account → Security → Connected apps
- Re-authenticate the extension

### No Data Showing?
- Make sure you have tracked time on YouTube/Twitch
- Check that your browser isn't in private mode
- Verify popup is collecting data (look for time counters)

### Can't Find Your Sheet?
- Check your Google Drive for "Watchtime Tracker"
- The sheet ID is shown in Advanced Options
- You can manually open: `https://docs.google.com/spreadsheets/d/[SHEET_ID]`

## FAQ

**Q: Is my data private?**
A: Yes! Data stays on your device until you export. Only you can see it.

**Q: Can I export to multiple sheets?**
A: Currently, one sheet per year. The extension saves the sheet ID to reuse it.

**Q: What if I don't want auto-export?**
A: Leave it unchecked. You can export manually anytime.

**Q: How often should I export?**
A: Daily, weekly, or whenever you want. There's no limit!

**Q: Can I delete tracked data?**
A: Data is stored locally. Clear your browser data to reset (but also loses all tracking).

## Features

✅ **One-click export** to Google Sheets
✅ **Auto-save spreadsheet ID** for easy future exports
✅ **Professional formatting** with headers and colors
✅ **Automatic daily export** option
✅ **Converts seconds to hours** automatically
✅ **Beautiful export interface** with statistics
✅ **Secure OAuth 2.0** authentication

## Next Steps

1. ✅ Export your first batch of data
2. 📊 View your sheet in Google Sheets
3. 📈 Create charts to visualize trends
4. ⚙️ Enable auto-export if desired
5. 🎯 Set goals based on your data

## Need Help?

- **Extension errors**: Check browser console (F12 → Console)
- **Google Sheets not loading**: Refresh your Google account
- **Data not exporting**: Verify you have tracked time
- **Lost spreadsheet ID**: Check Advanced Options in export page

---

**Version**: 2.4.2  
**Last Updated**: January 2024
