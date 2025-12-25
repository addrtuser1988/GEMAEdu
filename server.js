const express = require('express');
const path = require('path');
const app = express();

const data = require('./data/student.json');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/report', (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
