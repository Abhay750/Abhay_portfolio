# Simplified Google Sheets Setup (Sheet Monkey)

Since the Apps Script was difficult to set up, we will use **Sheet Monkey**. It's a free service that connects your form to a Google Sheet in seconds.

## 1. Create a Sheet Monkey Form
1.  Go to [SheetMonkey.io](https://sheetmonkey.io/signup) and sign up with your Google account.
2.  Click **Create New Form**.
3.  Paste your [Google Sheet Link](https://docs.google.com/spreadsheets/d/1jQpnwMOoIYtHfZUeeGGabAAdgzpudkgQhqDzJoFgU_A/edit?gid=0#gid=0) when asked.
4.  Sheet Monkey will give you a **Form Action URL** (e.g., `https://api.sheetmonkey.io/form/xyz`).

## 2. Update React Code
Open [Contect.jsx](file:///Users/abhay/Desktop/My_portfolio-main%20copy/src/Components/Contect.jsx) and replace the `scriptURL` on line 19 with the URL from Sheet Monkey:

```javascript
const scriptURL = "PASTE_SHEET_MONKEY_URL_HERE";
```

## 3. That's it!
Now when you submit the form, it will automatically appear in your Google Sheet. No scripts or coding needed!

> [!TIP]
> Make sure your Google Sheet has column headers (Name, Email, Message) in the first row.
