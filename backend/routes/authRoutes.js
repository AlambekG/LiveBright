const express = require('express');
const router = express.Router();

const { loginUser, signUpUser } = require('../controllers/authController.js');
router.post('/login', loginUser);
router.post('/sign-up', signUpUser)

module.exports = router;