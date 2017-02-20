const router = require('express').Router();
const userController = require('../controllers/user');
const authController = require('../controllers/authentication');
const movieController = require('../controllers/movie');

router.get('/profile', userController.getProfile);

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/movie', movieController.getMovies);
router.post('/movie', movieController.addMovie);
router.delete('/movie', movieController.deleteMovie);

module.exports = router;
