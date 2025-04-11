const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const user = req.body;

  let users = [];
  if (fs.existsSync('users.json')) {
    users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
  }

  users.push(user);

  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

  res.json({ message: 'user saved!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});