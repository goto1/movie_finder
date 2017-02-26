const passport = require('passport');
const _ = require('lodash');
const resJSON = require('../helpers/response');
const tmdb = require('../helpers/tmdb');

const User = require('mongoose').model('User');

module.exports.getProfile = (req, res) => {
  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return resJSON.internalServerError(res, 'Something went wrong');
      }

      if (!user) {
        return resJSON.restricted(res, 'Access restricted');
      }

      const user_details = {
        last_name: user.last_name,
        first_name: user.first_name,
        email: user.email,
        movies: user.movies,
      };

      return res.status(200).json({
        status: 200,
        result: user_details,
      });
    })(req, res);
};

module.exports.getMovies = (req, res, next) => {
  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return resJSON.unauthorized(res, 'Access restricted');
      }

      if (!user) {
        return resJSON.unauthorized(res, 'You are not authorized');
      }

      return res.status(200).json({
        status: 200,
        result: user.movies,
      });
    })(req, res);
};

module.exports.addMovie = (req, res, next) => {
  const id = parseInt(req.body.id, 10) || undefined;

  if (!id || isNaN(id)) {
    return resJSON.badRequest(res, 'Missing or incorrect required information');
  }

  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return resJSON.internalServerError(res, 'Something went wrong');
      }

      if (!user) {
        return resJSON.restricted(res, 'Access restricted');
      }

      const duplicate = _.find(user.movies, o => o.id == id);

      if (duplicate) {
        return resJSON.notModified(res, 'Movie already added');
      }

      tmdb.getMovie(id)
        .then((data) => {
          const movie = tmdb.extractMovie(data);
          user.movies.push(movie);

          user.save()
            .then(() => resJSON.ok(res, 'Movie added successfully'))
            .catch(() => resJSON.internalServerError(res, 'Couldn\'t add the movie'));
        })
        .catch(() => resJSON.internalServerError(res, 'Couldn\'t retrieve movie information'));
    })(req, res);
};

module.exports.deleteMovie = (req, res, next) => {
  const id = parseInt(req.body.id, 10) || undefined;

  if (!id || isNaN(id)) {
    return resJSON.badRequest(res, 'Missing or incorrect required information');
  }

  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return resJSON.internalServerError(res, 'Something went wrong');
      }

      if (!user) {
        return resJSON.restricted(res, 'Access restricted');
      }

      user.movies = _.filter(user.movies, o => o.id != id);

      user.save()
        .then(() => resJSON.ok(res, 'Movie removed successfully'))
        .catch(() => resJSON.notModified(res, 'Couldn\'t remove the movie'));
    })(req, res);
};
