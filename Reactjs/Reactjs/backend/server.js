// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'signup',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });

// app.post('/signup', (req, res) => {
//   const sql = 'INSERT INTO login (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)';
//   const values = [
//     req.body.firstname,
//     req.body.lastname,
//     req.body.email,
//     req.body.password,
//   ];
//   db.query(sql, values, (err, data) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       return res.json('Error');
//     }
//     return res.json('Success');
//   });
// });

// app.post('/login', (req, res) => {
//   const sql = 'SELECT * FROM login WHERE `email` = ? AND `password` = ?';
//   db.query(sql, [req.body.email, req.body.password], (err, data) => {
//     if (err) {
//       console.error('Error querying data:', err);
//       return res.json('Error');
//     }
//     if (data.length > 0) {
//       return res.json('Success');
//     } else {
//       return res.json('Fail');
//     }
//   });
// });

// app.listen(8081, () => {
//   console.log('listening');
// });












// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// // const crypto = require('crypto');

// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'signup',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });

// const salt= 10; // Define the number of salt rounds for bcrypt

// app.post('/signup', (req, res) => {
//   // console.log("hey i am req----------->",req,"<----------------hey i am req")
//   // console.log("hey i am resssss----------->",res,"<----------------hey i am ressssss")




//   const sql = 'INSERT INTO login (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)';
//   // console.log("hey i am sqllllll----------->",sql,"<----------------hey i am sqlllll")
//   // console.log("hey i am req.body.password.toString()----------->",req.body.password.toString(),"<----------------hey i am req.body.password.toString()")
//   // console.log("hey i am saltttttttt----------->",salt,"<----------------hey i am saltttttttt")
  


//   // Hash the password using bcrypt
//   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//     // console.log("hey i am hasshhhhh----------->",hash,"<----------------hey i am hasshhhhh") //encrypted password
  

//     if (err) {
//       console.error('Error hashing password:', err);
//       return res.json({ Error: 'Error for hashing password' });
//     }

//     const values = [
//       req.body.firstname,
//       req.body.lastname,
//       req.body.email,
//       hash,
//     ];

//     console.log("hey i am valuesssssss----------->",values,"<----------------hey i am valuesssssss")
//     // console.log("hey i am valuesssssss----------->",values.hash,"<----------------hey i am valuesssssss") // undifined
//     // console.log("hey i am valuesssssss----------->",values[hash],"<----------------hey i am valuesssssss")// undifined




//     db.query(sql, values, (err, result) => {    // don't write like [values]
    
//       // console.log("hey i am sqllllllagainnnn----------->",sql,"<----------------hey i am sqlllllagainnn")
//       // console.log("hey i am valuesagainnnn----------->",values,"<----------------hey i am valuesagainnnn")

//      // this line giving me error while running backend // console.log("hey i am valuesagainnnn----------->",result,"<----------------hey i am valuesagainnnn")
      
//       if (err) {
//         console.error('Error inserting data:', err);
//         return res.json({ Error: 'Inserting data Error in server' });
//       }
//     // this line giving me error while running backend // console.log("hey i am valuesagainnnn----------->",res.json({ Status: 'Success' }),"<----------------hey i am valuesagainnnn")
//       return res.json({ Status: 'Success' });


//     });
//   });
// });






// // working code------>>>>


// // app.post('/login', (req, res) => {
// //   const sql = 'SELECT * FROM login WHERE email = ?';
// //   console.log("i am request---------------->>>>", req.body, "<----------------i am request");

// //   // Check if 'email' and 'password' fields are present in the request body
// //   if (!req.body.email || !req.body.password) {
// //     return res.json({ Error: "Email and password fields are required." });
// //   }

// //   db.query(sql, [req.body.email], (err, data) => {
// //     console.log("i am sqllll---------------->>>>", sql, "<----------------i am sqllll");
// //     console.log("i am req.body.email---------------->>>>", req.body.email, "<----------------i am req.body.email");

// //     if (err) {
// //       console.error('Error querying data:', err);
// //       return res.json({ Error: "Login error in server" });
// //     }

// //     if (data.length > 0) {
// //       console.log("i am data.length---------------->>>>", data.length, "<----------------i am data.length");
// //       console.log("i am data[0]---------------->>>>", data[0], "<----------------i am data[0]");
// //       console.log("i am password---------------->>>>", req.body.password, "<----------------i am password");
// //       console.log("i am password string---------------->>>>", req.body.password.toString(), "<----------------i am password");

// //       bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
// //         console.log("i am responseeee---------------->>>>", response, "<----------------i am responseee"); // giving error
// //         console.log("i am req.body.password---------------->>>>", req.body.password, "<----------------i am req.body.password");
// //         console.log("i am data[0].password,---------------->>>>", data[0].password, "<----------------i am data[0].password,");

// //         if (err) return res.json({ Error: "Password compare error" });

// //         if (response) {
// //           return res.json({ Status: "Success" });
// //         } else {
// //           return res.json({ Error: "Password not matched" });
// //         }
// //       });
// //     } else {
// //       return res.json({ Error: "No email existed" });
// //     }
// //   });
// // });






// app.post('/login', (req, res) => {
//     const sql = 'SELECT * FROM login WHERE `email` = ?';


//     console.log("req.body.password---------------------------->",req.body.password,"<--------------------------req.body.password")
//     db.query(sql, [req.body.email], (err, data) => {
//       if (!req.body.email || !req.body.password) {
//             return res.json({ Error: "Email and password fields are required." });
//           }
        
//                 console.log("i am sqllll---------------->>>>", sql, "<----------------i am sqllll");
//                 console.log("i am req.body.email---------------->>>>", req.body.email, "<----------------i am req.body.email");
            
//                 if (err) {
//                   console.error('Error querying data:', err);
//                   return res.json({ Error: "Login error in server" });
//                 }
            
//                 if (data.length > 0) {
//                   console.log("i am data.length---------------->>>>", data.length, "<----------------i am data.length");
//                   console.log("i am data[0]---------------->>>>", data[0], "<----------------i am data[0]");
//                   console.log("i am password---------------->>>>", req.body.password, "<----------------i am password");
//                   console.log("i am password string---------------->>>>", req.body.password.toString(), "<----------------i am password");
                
              

                
//                   bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
//                             console.log("i am responseeee---------------->>>>", response, "<----------------i am responseee"); // giving error
//                             console.log("i am req.body.password---------------->>>>", req.body.password, "<----------------i am req.body.password");
//                             console.log("i am data[0].password,---------------->>>>", data[0].password, "<----------------i am data[0].password,");
                    
//                             if (err) return res.json({ Error: "Password compare error" });
                    
//                             if (response) {
//                               return res.json({ Status: "Success" });
//                             } else {
//                               return res.json({ Error: "Password not matched" });
//                             }
//                           });
//                         } else {
//                           return res.json({ Error: "No email existed" });
//                         }
//                       });
      
    
//   });
  












// app.listen(8081, () => {
//   console.log('listening');
// });









// this is correct and working codee  




// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// // const crypto = require('crypto');

// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'signup',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });

// const salt= 10; // Define the number of salt rounds for bcrypt

// // ... (existing code above)

// app.post('/signup', (req, res) => {
//   const sql = 'INSERT INTO login (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)';

//   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//     if (err) {
//       console.error('Error hashing password:', err);
//       return res.json({ Error: 'Error for hashing password' });
//     }

//     const values = [req.body.firstname, req.body.lastname, req.body.email, hash];
//     console.log("heyyyy i am value----------->" ,values,"<----------------------heyyyy i am value" )

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error('Error inserting data:', err);
//         return res.json({ Error: 'Inserting data Error in server' });
//       }

//       return res.json({ Status: 'Success' });
//     });
//   });
// });



// app.post('/login', (req, res) => {
//   const sql = 'SELECT * FROM login WHERE `email` = ?';


//   console.log("req.body.password---------------------------->",req.body.password,"<--------------------------req.body.password")
//   db.query(sql, [req.body.email], (err, data) => {
//     if (!req.body.email || !req.body.password) {
//           return res.json({ Error: "Email and password fields are required." });
//         }
      
//               console.log("i am sqllll---------------->>>>", sql, "<----------------i am sqllll");
//               console.log("i am req.body.email---------------->>>>", req.body.email, "<----------------i am req.body.email");
          
//               if (err) {
//                 console.error('Error querying data:', err);
//                 return res.json({ Error: "Login error in server" });
//               }
          
//               if (data.length > 0) {
//                 console.log("i am data.length---------------->>>>", data.length, "<----------------i am data.length");
//                 console.log("i am data[0]---------------->>>>", data[0], "<----------------i am data[0]");
//                 console.log("i am password---------------->>>>", req.body.password, "<----------------i am password");
//                 console.log("i am password string---------------->>>>", req.body.password.toString(), "<----------------i am password");
              
            

              
//                 bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
//                           console.log("i am responseeee---------------->>>>", response, "<----------------i am responseee"); // giving error
//                           console.log("i am req.body.password---------------->>>>", req.body.password, "<----------------i am req.body.password");
//                           console.log("i am data[0].password,---------------->>>>", data[0].password, "<----------------i am data[0].password,");
                  
//                           if (err) return res.json({ Error: "Password compare error" });
                  
//                           if (response) {
//                             return res.json({ Status: "Success" });
//                           } else {
//                             return res.json({ Error: "Password not matched" });
//                           }
//                         });
//                       } else {
//                         return res.json({ Error: "No email existed" });
//                       }
//                     });
    
  
// });




// app.listen(8081, () => {
//   console.log('listening');
// });


















// after using jwt










const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const cookieParser  = require('cookie-parser')


const app = express();

app.use(cors(
{
origin: ["http://localhost:3000"],
methods: ['POST', "GET"],
credentials: true
}

));
app.use(express.json());
app.use(cookieParser());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

const salt= 10; // Define the number of salt rounds for bcrypt

// ... (existing code above)



const verifyUser = (req,res,next) =>{

const token = req.cookies.token;
if(!token){

  
  return res.json({Error: "You are not authenticated"});
}else{

  console.log("heyyyyy i am tokennn --------->",token,"<--------------------heyyyyy i am tokennn" )
  // console.log("heyyyyy i am tokennn --------->",jwt-secret-key,"<--------------------heyyyyy i am tokennn" )

  jwt.verify(token,"jwt-secret-key",(err,decoded) =>{
   if(err){

    return res.json({Error: "Token is not okay"});
   }
   else{

     req.name = decoded.name;
     next();
   }
  })
}

}

app.get('/', verifyUser, (req,res) =>{

  return res.json({Status: "Success", name: req.name});


})






app.post('/signup', (req, res) => {
  
  const checkEmailSql = "SELECT COUNT(*) AS count FROM login WHERE email = ?";


  console.log("heeeyyyyyyyyyyyyyyyyyyyyyyy i am teq.body.email--------->",req.body.email,"<-----------------heeeyyyyyyyyyyyyyyyyyyyyyyy i am teq.body.email"  )
  db.query(checkEmailSql, [req.body.email], (err, result) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.json({ Error: 'Error checking email' });
    }


    console.log("heeeeeyyyyyyyyyyyyyyyyyyyyyyyyyy cuteee");
    console.log("Hey i am result ---------------------------->",result[0], "<--------------------------hey i am result");

    if (result[0].count > 0) {
      console.log("Email already existed");
      // return res.json({ Error: 'Email ID already exists in the database' });
    
    }
    else{
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
    }

  });




  
 


});



app.post('/login', (req, res) => {
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
    
  
});

app.get('/logout', (req, res) => {
  res.clearCookie('token'); // Clear the cookie named 'token'
  return res.json({ Status: "Success" });
});





app.listen(8081, () => {
  console.log('listening');
});


app.post('/forget-password', (req,res) =>{

  
})



 












