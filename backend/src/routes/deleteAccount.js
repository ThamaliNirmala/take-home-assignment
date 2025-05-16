const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const { authMiddleware } = require('../utils');

// Delete user account route
router.delete('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // from JWT decoded by authMiddleware

    //delete the user
    const success = await dbFunctions.deleteUser(userId);

    // user not found to delete
    if (!success) {
      return res.status(404).json({ message: 'User not found or could not be deleted.' });
    }

    // success response
    res.status(200).json({ message: 'User account deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting account', error: error.message });
  }
});

module.exports = router;
