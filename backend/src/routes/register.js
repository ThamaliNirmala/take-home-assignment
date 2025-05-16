const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const { generateJWTToken } = require('../utils');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = process.env;

// register route
router.post('/', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // input validation
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    // Check if user already exists
    const existingUser = await dbFunctions.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists.' });
    }

    // hashed the pasword
    const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS))

    // Create new user
    const newUser = await dbFunctions.createUser({
      email,
      name,
      password: hashedPassword
    });

    // Generate JWT token
    const token = generateJWTToken(newUser);

    // Send response
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error during registration', error: error.message });
  }
});

module.exports = router;
