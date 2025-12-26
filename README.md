# Student Speaking Assessment Report (Minimal)

This repository contains a minimal prototype web app that displays a student's speaking assessment (overall and skill-wise scores) along with descriptive feedback.

1) How to run the project

Prerequisites:
- Node.js (v14+ recommended)

Steps:

```powershell
cd "C:\Users\Desktop\Student Assessment Report"
npm install
npm start
# Open http://localhost:3000 in your browser
```

If port 3000 is busy, set a different port in PowerShell before starting:

```powershell
$env:PORT=4000
npm start
```

2) Where the scores are stored

- The scores are kept in `data/student.json` in the project root.
- The file holds the `overall` score (09) and a `scores` object with skill-wise numbers.

Example `data/student.json`:

```json
{
  "id": "student1",
  "name": "John Doe",
  "overall": 7,
  "scores": {
    "Pronunciation": 7,
    "Fluency": 7,
    "Vocabulary": 6.5,
    "Grammar": 7.5
  }
}
```

Note: `server.js` currently loads this JSON at server startup using `require()`. After editing `data/student.json` you should restart the server to load changes.

3) How feedback logic works

- Feedback text is produced in the frontend (`public/app.js`). It reads the `overall` numeric score and applies this simple mapping:
  - `overall >= 8`  "Excellent performance with strong control."
  - `6 <= overall < 8`  "Good performance with minor inaccuracies."
  - `overall < 6`  "Needs improvement."

- The descriptive feedback shown on the page uses the same logic.

Files of interest:
- `server.js`  Express server serving `public/` and the API endpoint `/api/report`.
- `public/index.html`  report page HTML.
- `public/app.js`  frontend rendering and feedback logic.
- `public/style.css`  styles for the report.

Quick API test (CLI):

```powershell
curl http://localhost:3000/api/report
```

