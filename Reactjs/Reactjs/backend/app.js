const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const loginRoutes = require('./routes/loginRoutes');
const signupRoutes = require('./routes/signupRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const nodemailer = require('nodemailer');
// const forgetPasswordRoutes = require('./routes/fp');
const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const salt = 10; 


const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    console.log("heyyyyy i am tokennn --------->", token, "<--------------------heyyyyy i am tokennn");
    // console.log("heyyyyy i am tokennn --------->",jwt-secret-key,"<--------------------heyyyyy i am tokennn" )

    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not okay" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get('/', verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

// Your existing database connection code
// const db = mysql.createConnection({ ... });

// Routes
app.use('/', loginRoutes);
app.use('/', signupRoutes);
app.use('/', logoutRoutes);
// app.use('/', forgetPasswordRoutes);
app.listen(8081, () => {
  console.log('Server is running on port 3000');
});
