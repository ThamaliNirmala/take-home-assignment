const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const { authMiddleware } = require('../utils');

// Get account details
router.get('/', authMiddleware, async (req, res) => {
  try {
    // Get user ID from request added by authMiddleware
    const userId = req.user.id;

    // Fetch user details from database
    const user = await dbFunctions.getUserById(userId);

    // If user not found
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({user :{
      id: user.id,
      email: user.email,
      name: user.name
    }});

  } catch (error) {
    res.status(500).json({ message: 'Error fetching account', error: error.message });
  }
});

module.exports = router;
