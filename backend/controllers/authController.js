const jwt = require('jsonwebtoken');
const pool = require('../db');
// const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  try{
    const { rows } = await pool.query(`select * from users where email = $1`, [email]);
    const user = rows[0];
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(password, user.password)
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: 'Invalid credentials' });
    // }
    if(password === user.password) {
      res.status(200).send('OK');
    }
    else{
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  }
  catch(err){
    console.log(err);
    res.status(500).send('Error logging in user');
  }
};

exports.signUpUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)

  try {
    console.log("Sign-Up")
    await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2)",
      [email, password]
    );
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send('Error logging in user');
  }
};