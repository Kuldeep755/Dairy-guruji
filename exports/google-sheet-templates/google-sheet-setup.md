# Farmer Registration to Google Sheets Setup

This project now submits the farmer registration form to:

- `POST /api/farmer-registration`
- That API route forwards data to `GOOGLE_SHEETS_FARMER_WEBHOOK_URL`
- The Google Apps Script webhook creates the spreadsheet automatically the first time it receives a submission

## 1. Create the Google Apps Script

1. Open `https://script.google.com`
2. Create a new project
3. Replace the default code with the contents of `exports/google-sheet-templates/google-apps-script.js`
4. Save the project

## 2. Deploy it as a Web App

1. Click `Deploy` -> `New deployment`
2. Select type `Web app`
3. Set `Execute as` to `Me`
4. Set `Who has access` to `Anyone`
5. Deploy and copy the `/exec` URL

## 3. Add the webhook URL in this project

Add this to `.env.local`:

```env
GOOGLE_SHEETS_FARMER_WEBHOOK_URL=https://script.google.com/macros/s/your-deployment-id/exec
```

## 4. Start the app

```bash
npm run dev
```

## 5. Test the farmer registration form

1. Open `/farmer-registration`
2. Fill all 5 steps
3. Click submit
4. The first submission will auto-create a spreadsheet named `Dairy Guruji Farmer Registrations`
5. Later submissions will append new rows into the `Farmer Registrations` sheet

## Notes

- The file upload field currently sends only the selected file name to Google Sheets, not the actual image.
- If you want image upload to Google Drive too, we can add that next.
- The column order is defined in `exports/google-sheet-templates/google-sheet-schema.json`.
