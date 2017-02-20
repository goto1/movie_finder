const mongoose = require('mongoose');
const passport = require('passport');
const request = require('request-promise');
const _ = require('lodash');
const api = require('../secret/tmdb_api');

const User = mongoose.model('User');

const options = {
  method: 'GET',
  json: true,
  qs: {
    uri: `${api.url}/movie`,
    api_key: api.key,
    language: 'en-US',
  },
};

function extractMovie(data) {
  return {
    id: data.id,
    title: data.title,
    vote_average: data.vote_average,
    genres: data.genres,
    poster_path: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '',
  };
}

const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.getMovies = (req, res, next) => {
  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return sendJSONResponse(res, 404, 'Access restricted');
      }

      return sendJSONResponse(res, 200, user.movies);
    })(req, res);
};

module.exports.addMovie = (req, res, next) => {
  if (!req.body.id) {
    return sendJSONResponse(res, 400, 'Missing movie id');
  }

  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return sendJSONResponse(res, 400, 'Access restricted');
      }

      options.url = `${options.qs.uri}/${req.body.id}`;

      request(options)
        .then((data) => {
          const movie = extractMovie(data);
          const duplicate = user.movies.find(e => e.id === movie.id);

          if (!duplicate) {
            User.findById(user.id)
              .then((u) => {
                u.movies.push(movie);
                u.save()
                  .then(() => sendJSONResponse(res, 200, 'Movie saved successfully'))
                  .catch(() => sendJSONResponse(res, 400, 'Couldn\'t save the movie'));
              })
              .catch(() => sendJSONResponse(res, 400, 'Something went wrong retrieving the user'));
          } else {
            return sendJSONResponse(res, 200, 'Movie already added');
          }
        })
        .catch(() => sendJSONResponse(res, 400, 'Something went wrong retrieving the movie'));
    })(req, res);
};

module.exports.deleteMovie = (req, res, next) => {
  if (!req.body.id) {
    return sendJSONResponse(res, 400, 'Missing movie id');
  }

  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return sendJSONResponse(res, 400, 'Access restricted');
      }

      User.findById(user.id)
        .then((u) => {
          const movies = _.remove(u.movies, n => n.id === req.body.id);
          u.movies = movies;

          u.save()
            .then(() => sendJSONResponse(res, 200, 'Movie successfully deleted'))
            .catch(() => sendJSONResponse(res, 400, 'Couldn\'t delete the movie'));
        })
        .catch(() => sendJSONResponse(res, 400, 'Something went wrong retrieving user'));
    })(req, res);
};
