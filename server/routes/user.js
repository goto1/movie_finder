const express = require('express');
const mongoose = require('mongoose');
const { MovieSchema, UserSchema } = require('../models/schemas');
const request = require('request-promise');
const tmdb = require('./tmdb-helper');
const api = require('./api-info');

const router = express.Router();
const Movie = mongoose.model('Movie', MovieSchema);
const User = mongoose.model('User', UserSchema);

function createResponseMessage(status, message) {
  return { status, message };
}

// -> /user/register
router.post('/register', (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    const message = createResponseMessage(400, 'Missing required information');
    return res.status(400).send(message);
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
    .then((response) => {
      const message = createResponseMessage(200, 'User created successfully');
      return res.send(message);
    })
    .catch((err) => {
      const message = createResponseMessage(500, err.message || 'Could not create a new user');
      return res.status(500).send(message);
    });
});

// -> /user/:id/favorites/:id
router.route('/:user_id/favorites/:movie_id')
  .post((req, res, next) => {
    const options = {
      method: 'GET',
      json: true,
      uri: `${api.url}/movie/${req.params.movie_id}`,
      qs: { api_key: api.key, language: 'en-US' },
    };

    User.findById(req.params.user_id).exec()
      .then((user) => {

        request(options)
          .then((data) => {
            const movieExtracted = tmdb.extractMovieData(data);

            user.movies.favorites.push(
              new Movie({
                _id: movieExtracted.id,
                poster_path: movieExtracted.poster_path,
                title: movieExtracted.title,
                vote_average: movieExtracted.vote_average,
              })
            );

            user.save()
              .then((response) => {
                const message = createResponseMessage(200, 'Movie was added to favorites');
                res.send(message);
              })
              .catch((err) => {
                const message = createResponseMessage(500, 'Could not add movie to favorites');
                res.status(500).send(message);
              });
          })
          .catch((err) => {
            const message = createResponseMessage(400, 'Couldn\'t retrieve movie information');
            return res.status(400, message);
          });
      })
      .catch((err) => {
        const message = createResponseMessage(400, 'Couldn\'t find user');
        return res.status(400).send(message);
      });
  });

module.exports = router;
