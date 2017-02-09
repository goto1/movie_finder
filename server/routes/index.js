const express = require('express');
const jwt = require('express-jwt');

const secret = require('../secret/jwt');
const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');

const router = express.Router();
const auth = jwt({
  secret,
  userProperty: 'payload',
});

// Profile
router.get('/profile', auth, ctrlProfile.profileRead);

// Authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
