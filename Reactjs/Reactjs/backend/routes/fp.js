const express = require('express');
const router = express.Router();
const forgetPasswordController = require('../controllers/fp');

router.post('/forget-password', forgetPasswordController.sendResetLink);

module.exports = router;
