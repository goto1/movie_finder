const mongoose = require('mongoose');
const passport = require('passport');
const request = require('request-promise');

module.exports.getMovies = (req, res, next) => {
  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return res.status(404).json({ message: 'Couldn\'t retrieve movies' });
      }

      return res.status(200).json(user.movies);
    })(req, res);
};

module.exports.addMovie = (req, res, next) => {

};

module.exports.deleteMovie = (req, res, next) => {

};
