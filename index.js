const express = require('express');
const generatePassword = require('password-generator');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// API Endpoints
app.get('/api/password', (req, res) => {
  const password = generatePassword();
  res.json(password);
  console.log(`Generated a password`);
})

// For any request that doesn't match one above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
})


