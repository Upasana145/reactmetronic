const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const db = require('./db'); // Assuming you have set up your MySQL connection in a separate 'db.js' file.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST request for login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = 'SELECT * FROM login WHERE `email` = ?';
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error('Error querying data:', err);
      return res.json('Error');
    }

    if (data.length === 0) {
      return res.json('Fail'); // User with the given email not found
    }

    const user = data[0];
    bcrypt.compare(password, user.password, (compareErr, isMatch) => {
      if (compareErr) {
        console.error('Error comparing passwords:', compareErr);
        return res.json('Error');
      }

      if (isMatch) {
        return res.json('Success'); // Passwords match, login successful
      } else {
        return res.json('Fail'); // Passwords do not match, login failed
      }
    });
  });
});

app.listen(8081, () => {
  console.log('listening');
});
