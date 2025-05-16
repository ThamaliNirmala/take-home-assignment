const express = require('express');
const cors = require('cors');
require('dotenv').config();

const loginRoutes = require('./routes/login');
const accountRoutes = require('./routes/account');
const registerRoutes = require('./routes/register');
const updateAccountRoutes = require('./routes/updateAccount');
const deleteAccountRoutes = require('./routes/deleteAccount');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/login', loginRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/update-account', updateAccountRoutes);
app.use('/api/delete-account', deleteAccountRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});

module.exports = app;