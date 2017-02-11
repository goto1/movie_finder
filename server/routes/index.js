const router = require('express').Router();
const jwt = require('express-jwt');
const secret = require('../secret/jwt');
const userController = require('../controllers/user');
const authController = require('../controllers/authentication');

const auth = jwt({
  secret,
  userProperty: 'payload',
});

router.get('/profile', auth, userController.getProfile);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
