// const bcrypt = require('bcrypt');
// const db = require('../db'); // Import the MySQL database connection

// const salt = 10; // Define the number of salt rounds for bcrypt

// exports.signup = (req, res) => {
//   const sql = 'INSERT INTO login (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)';

//   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//     if (err) {
//       console.error('Error hashing password:', err);
//       return res.json({ Error: 'Error for hashing password' });
//     }

//     const values = [req.body.firstname, req.body.lastname, req.body.email, hash];

//     console.log("heyyyyyyy i am value in signupController---------->",values,"<----------------------heyyyyyyy i am value signupController")

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error('Error inserting data:', err);
//         return res.json({ Error: 'Inserting data Error in server' });
//       }

//       return res.json({ Status: 'Success' });
//     });
//   });
// };








const mysql = require('mysql');
const bcrypt = require('bcrypt');
const db = require('../db');

const salt = 10;

const signup = (req, res) => {
  // Your existing signup controller logic here
  // ...

  const sql = 'INSERT INTO login (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)';

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.json({ Error: 'Error for hashing password' });
    }

    const values = [req.body.firstname, req.body.lastname, req.body.email, hash];
    console.log("heyyyy i am value----------->" ,values,"<----------------------heyyyy i am value" )

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.json({ Error: 'Inserting data Error in server' });
      }

      return res.json({ Status: 'Success' });
    });
  });












};

module.exports = {
  signup,
};




 


