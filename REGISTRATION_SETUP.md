# Registration Form Setup

This guide shows how to connect the FutureHack-X registration form to a Google Sheet via Google Apps Script.

## Quick Setup

### 1. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "FutureHack-X Registrations"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

### 2. Set up Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code and paste the script below
3. Replace `YOUR_SPREADSHEET_ID` with your actual spreadsheet ID
4. Replace `your-secret-token-here` with a random secret token (generate one below)

```javascript
// Google Apps Script for FutureHack-X Registration
function doPost(e) {
  try {
    // Verify the request comes from your app
    const token =
      e.parameter.headers?.["X-Verification-Token"] ||
      e.postData?.headers?.["X-Verification-Token"] ||
      PropertiesService.getScriptProperties().getProperty("VERIFICATION_TOKEN");

    const expectedToken = "your-secret-token-here"; // Replace with your actual token

    if (token !== expectedToken) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "Unauthorized" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Open your spreadsheet
    const ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
    const sheet = ss.getSheetByName("Sheet1");

    // Parse the form data
    const data = JSON.parse(e.postData.contents);

    // Add headers if this is the first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "College Name",
        "Team Name",
        "Leader Email",
        "Leader Phone",
        "Member 2 Email",
        "Member 2 Phone",
        "Member 3 Email",
        "Member 3 Phone",
        "Member 4 Email",
        "Member 4 Phone",
        "Primary Track",
        "Experience Level",
        "Resources Needed",
      ]);
    }

    // Add the registration data
    sheet.appendRow([
      new Date(),
      data.collegeName || "",
      data.teamName || "",
      data.leaderEmail || "",
      data.leaderPhone || "",
      data.member2Email || "",
      data.member2Phone || "",
      data.member3Email || "",
      data.member3Phone || "",
      data.member4Email || "",
      data.member4Phone || "",
      data.primaryTrack || "",
      data.experienceLevel || "",
      data.resources || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, message: "Registration saved successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Deploy the Apps Script

1. Click **Deploy** → **New deployment**
2. Choose type: **Web app**
3. Set **Execute as**: Me (your email)
4. Set **Who has access**: Anyone (for public registration)
5. Click **Deploy**
6. Copy the **Web app URL** (ends with `/exec`)

### 4. Generate Security Token

Run this command to generate a secure random token:

```bash
# On Linux/Mac:
openssl rand -hex 32

# Or use this online: https://www.uuidgenerator.net/
```

### 5. Configure Environment Variables

Create `.env.local` in your project root:

```bash
# .env.local
SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
WEBHOOK_TOKEN=your-generated-secret-token-here
```

**Important**:

- Replace `YOUR_SCRIPT_ID` with the actual script ID from step 3
- Replace `your-generated-secret-token-here` with the token from step 4
- Update the Apps Script code to use the same token

### 6. Restart Development Server

```bash
npm run dev
```

## Testing

1. Open your app and click "REGISTER NOW"
2. Fill out the form and submit
3. Check your Google Sheet - you should see a new row with the registration data

## Security Notes

- The verification token prevents unauthorized submissions
- Keep your `.env.local` file secure (it's already in `.gitignore`)
- For production, use environment variables in your hosting platform (Vercel, Netlify, etc.)

## Troubleshooting

**"Server webhook not configured"**: Add `SHEET_WEBHOOK_URL` to `.env.local`

**"Server token not configured"**: Add `WEBHOOK_TOKEN` to `.env.local`

**"Unauthorized" in Apps Script**: Token mismatch - ensure both files use the same token

**Apps Script permission error**: Re-deploy and authorize the script to access your Google Sheet

## Production Deployment

For production (Vercel, Netlify, etc.), add the environment variables in your hosting platform's dashboard:

- `SHEET_WEBHOOK_URL`
- `WEBHOOK_TOKEN`

The registration form will automatically use these values.
