const express = require('express');
const mongoose = require('mongoose');
const request = require('request-promise');
const { MovieSchema, UserSchema } = require('../models/schemas');
const api = require('./api-info');

const tmdb = require('../helpers/user-helpers');

const router = express.Router();
const User = mongoose.model('User', UserSchema);
const Movie = mongoose.model('Movie', MovieSchema);

function jsonResponse(status, message) {
  return { status, message };
}

// --> /user/register
router.post('/register', (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    const response = jsonResponse(400, 'Missing email or password');
    return res.status(400).send(response);
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
    .then((response) => {
      const message = jsonResponse(200, `User ${response.email} created successfully`);
      return res.send(message);
    })
    .catch((err) => {
      const message = jsonResponse(500, err.message || 'Could not create new user');
      return res.status(500).send(message);
    });
});

// --> /user/:id/favorites
router.route('/:user_id/favorites')
  .post((req, res, next) => {
    tmdb.getMovie(req.body.movie_id)
      .then((data) => {
        const movie = tmdb.extractMovieData(data);

        const update = { movies.favorites: movies.favorites.push(movie) };

        User.findByIdAndUpdate(req.params.user_id, update).exec()
          .then((user) => {
            console.log(user);
          })
          .catch((err) => {
            console.log(err);
          });

        return res.send('success');

      })
      .catch((err) => {
        return res.send(err);
      })
  });


// --> /user/:id/favorites
// router.route('/:user_id/favorites')
//   .post((req, res, next) => {
//     let response = {};
//
//     User.findByIdAndUpdate(req.params.user_id).exec()
//       .then((user) => {
//         return res.send(user);
//       })
//       .catch((err) => {
//
//         return res.send(err);
//       });
//
//     // User.findById(req.params.user_id).exec()
//     //   .then((user) => {
//     //     return res.send(user);
//     //   })
//     //   .catch((err) => {
//     //     response = {
//     //       status: 500,
//     //       message: jsonResponse(500, `Couldn't find user with the specified id, ${err.message || ''}`),
//     //     }
//     //     return res.status(response.status).send(response.message);
//     //   });
//
//     // tmdb.getMovie(req.body.movie)
//     //   .then((data) => {
//     //     const movie = tmdb.extractMovieData(data);
//     //
//     //     User.findById(req.params.user_id).exec()
//     //       .then((user) => {
//     //         user.movies.favorites.push(movie);
//     //
//     //         user.save()
//     //           .then((result) => {
//     //             response = {
//     //               status: 200,
//     //               message: jsonResponse(200, 'Movie added successfully to favorites'),
//     //             };
//     //           })
//     //           .catch((err) => {
//     //             response = {
//     //               status: 500,
//     //               message: jsonResponse(500, err.message || 'Couldn\'t add movie to favorites'),
//     //             };
//     //           });
//     //       })
//     //       .catch((err) => {
//     //         response = {
//     //           status: 500,
//     //           message: jsonResponse(500, err.message || 'Couldn\'t find user with the specified id'),
//     //         };
//     //       });
//     //
//     //     return res.status(response.status).send(response.message);
//     //   })
//     //   .catch((err) => {
//     //     response = {
//     //       status: 500,
//     //       message: jsonResponse(500, err.message || 'Couldn\'t retrieve movie with the specified id'),
//     //     };
//     //
//     //     return res.status(response.status).send(response.message);
//     //   });
//   });

module.exports = router;
