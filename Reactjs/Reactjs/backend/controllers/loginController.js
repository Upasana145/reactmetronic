// const bcrypt = require('bcrypt');
// const db = require('../db'); // Import the MySQL database connection

// exports.login = (req, res) => {
//   const sql = 'SELECT * FROM login WHERE `email` = ?';

//   // Check if 'email' and 'password' fields are present in the request body
//   if (!req.body.email || !req.body.password) {
//     return res.json({ Error: "Email and password fields are required." });
//   }

//   db.query(sql, [req.body.email], (err, data) => {
//     if (err) {
//       console.error('Error querying data:', err);
//       return res.json({ Error: "Login error in server" });
//     }

//     if (data.length > 0) {

//         console.log("heyyyy i am req.body.password.toString()------------------> ",req.body.password.toString(),"<-------------------heyyyy i am req.body.password.toString()")
//       bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
//         if (err) {
//           console.error('Error comparing passwords:', err);
//           return res.json({ Error: "Password compare error" });
//         }

//         if (response) {
//           return res.json({ Status: "Success" });
//         } else {
//           return res.json({ Error: "Email or password incorrect" });
//         }
//       });
//     } else {
//       return res.json({ Error: "Email or password incorrect" });
//     }
//   });
// };




const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');

const salt = 10;

const login = (req, res) => {
  // Your existing login controller logic here
  // ...

  const sql = 'SELECT * FROM login WHERE `email` = ?';
  console.log("req.body.password---------------------------->",req.body.password,"<--------------------------req.body.password")
  db.query(sql, [req.body.email], (err, data) => {
    if (!req.body.email || !req.body.password) {
          return res.json({ Error: "Email and password fields are required." });
        }
      
              console.log("i am sqllll---------------->>>>", sql, "<----------------i am sqllll");
              console.log("i am req.body.email---------------->>>>", req.body.email, "<----------------i am req.body.email");
          
              if (err) {
                console.error('Error querying data:', err);
                return res.json({ Error: "Login error in server" });
              }
          
              if (data.length > 0) {
                console.log("i am data.length---------------->>>>", data.length, "<----------------i am data.length");
                console.log("i am data[0]---------------->>>>", data[0], "<----------------i am data[0]");
                console.log("i am password---------------->>>>", req.body.password, "<----------------i am password");
                console.log("i am password string---------------->>>>", req.body.password.toString(), "<----------------i am password");
              
            

              
                bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                          console.log("i am responseeee---------------->>>>", response, "<----------------i am responseee"); // giving error
                          console.log("i am req.body.password---------------->>>>", req.body.password, "<----------------i am req.body.password");
                          console.log("i am data[0].password,---------------->>>>", data[0].password, "<----------------i am data[0].password,");
                  
                          if (err) return res.json({ Error: "Password compare error" });
                  
                          if (response) {

                            const name = data[0].name;
                            const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                            res.cookie('token', token);
                            return res.json({ Status: "Success" });
                          } else {
                            return res.json({ Error: "Password not matched" });
                          }
                        });
                      } else {
                        return res.json({ Error: "No email existed" });
                      }
                    });
    

};

module.exports = {
  login,
};




 