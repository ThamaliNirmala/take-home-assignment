const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const dbFunctions = require('../db/dbFunctions');
const { generateJWTToken } = require('../utils');

// Login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    //Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    //Check if user exists
    const user = await dbFunctions.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    //compare passwords
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    //Send response
    return res.status(200).json({
      message: 'Login successful',
      token: generateJWTToken(user),
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });

  } catch (error) {
    console.error('Login Error:', error); 
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
});

module.exports = router;
