const express = require('express');
const generatePassword = require('password-generator');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// API Endpoints
app.get('/api/password', (req, res) => {
  const password = generatePassword();
  res.json(password);
  console.log(`Generated a password`);
})

app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
})


