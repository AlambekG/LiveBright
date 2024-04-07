const jwt = require('jsonwebtoken');
// const User = require('../models/User');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)

  try {
    console.log("Login is here")
    // const user = await User.findOne({ email });
    // if (!user) {
    //   return res.status(404).send('User not found');
    // }

    // if (password !== user.password) {
    //   return res.status(401).send('Invalid password');
    // }

    // const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '24h' });

    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send('Error logging in user');
  }
};

exports.signUpUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)

  try {
    console.log("Sign-Up is here")
    
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send('Error logging in user');
  }
};