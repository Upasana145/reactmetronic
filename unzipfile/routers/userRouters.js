const express = require('express');
const router = express.Router();
const {loginUser} = require('../controllers/userControllers');
const { mySubject,myClassTeacherInfo } = require('../controllers/myClassController');
const { myBookList } = require('../controllers/MyBookListController');
const { mySyllabus } = require('../controllers/MySyllabus');




router.post('/login', loginUser)
router.post('/myclass',mySubject )
router.post('/myclass-teacher',myClassTeacherInfo )
router.post('/my-booklist',myBookList )
router.post('/my-syllabus',mySyllabus)




module.exports = router;
const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
  connectionLimit: 10, // Adjust this according to your needs
});

// Express middleware to parse JSON data
app.use(express.json());

// Register a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  try {
    const [existingUser] = await pool.promise().query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'Username already taken' });
    }
  } catch (error) {
    console.error('Error checking existing user:', error);
    return res.status(500).json({ message: 'Server error' });
  }

  // Hash the password
  try {
    const saltRounds = 10; // You can adjust this value as per your requirements
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Store the user in the database
    await pool.promise().query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
