const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const db = require('../db');

const transporter = nodemailer.createTransport({
  // Setup your nodemailer transporter configuration here (e.g., SMTP, Gmail, etc.)
  // You need to provide the appropriate service credentials
  // Example for using Gmail:
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password'
  }
});

const sendResetLink = (req, res) => {
  const { email } = req.body;
  
  // Check if the email exists in the database
  const sql = 'SELECT * FROM login WHERE email = ?';
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error('Error querying data:', err);
      return res.json({ Error: "Error querying data in server" });
    }

    if (data.length === 0) {
      // Email not found in the database
      return res.json({ Error: "Email not found" });
    }

    // Generate a reset token with a short expiration time
    const resetToken = jwt.sign({ email }, "reset-secret-key", { expiresIn: '15m' });

    // Create the password reset link
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    // Send the reset link to the user's email
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      html: `<p>Please click the following link to reset your password: <a href="${resetLink}">${resetLink}</a></p>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        return res.json({ Error: "Error sending password reset link" });
      }

      return res.json({ Status: "Success", Message: "Password reset link sent to your email" });
    });
  });
};

module.exports = {
  sendResetLink,
};
