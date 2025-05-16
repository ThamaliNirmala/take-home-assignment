const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const { authMiddleware } = require('../utils');

// Update account details route
router.put('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // from JWT decoded by authMiddleware
    const { name, email } = req.body;

    if (!name && !email) {
      return res.status(400).json({ message: 'At least one field (name or email) is required to update.' });
    }

    //update user
    const updatedUser = await dbFunctions.updateUser(userId, { name, email });

    // if user not fount to update
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found or update failed.' });
    }

    //success response
    res.status(200).json({
      message: 'User updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating account', error: error.message });
  }
});

module.exports = router;
