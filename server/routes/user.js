const express = require('express');
const mongoose = require('mongoose');
const { MovieSchema, UserSchema } = require('../models/schemas');

const router = express.Router();
const Movie = mongoose.model('Movie', MovieSchema);
const User = mongoose.model('User', UserSchema);

// /user/:id/movie/:id/favorites
// /user/:id/movie/:id/bookmarked
// /user/:id/favorites/:id
// /user/:id/bookmark/:id

function createResponseMessage(status, message) {
  return { status, message };
}

// -> /user/register
router.post('/register', (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400)
      .send(createResponseMessage(400, 'Missing required information'));
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
    .then(response => res.send(createResponseMessage(200, 'User created successfully')))
    .catch((err) => {
      const message = err.message || 'Could not create a new user';
      return res.status(500).send(createResponseMessage(500, message));
    });
});

//
// // /user/login
// router.route('/login')
//   .post((req, res, next) => {
//     if (!req.body.email || !req.body.password) {
//       return res.status(400).send({
//         status: 400,
//         message: 'Missing required user information',
//       });
//     }
//
//     User.where({ email: req.body.email }).findOne()
//       .then((user) => {
//         bcrypt.compare(req.body.password, user.password)
//           .then((matched) => {
//             if (!matched) {
//               return res.status(400).send({
//                 status: 200,
//                 message: 'User email or password is incorrect',
//               });
//             }
//
//             return res.status(200).send({
//               status: 200,
//               message: 'User successfully authenticated',
//             });
//           })
//           .catch((err) => res.status(500).send({
//             status: 500,
//             message: 'Something went wrong',
//           }));
//       })
//       .catch((err) => res.status(200).send({
//         status: 400,
//         message: 'Could not find the user with specified information',
//       }));
//   });
//
// // --> /user/:id
// router.route('/:id')
//   .get((req, res, next) => {
//     User.findById(req.params.id).exec()
//       .then((response) => res.json(response))
//       .catch((err) => res.send(err));
//   })
//   .put((req, res, next) => {
//     const options = {
//       password: req.body.password,
//       email: req.body.email,
//       updatedAt: Date.now(),
//     };
//
//     User.findByIdAndUpdate(req.params.id, options).exec()
//       .then((response => res.json({ message: 'User info successfully updated!' })))
//       .catch((err) => res.send({ error: err }));
//   })
//   .delete((req, res, next) => {
//     User.findByIdAndRemove(req.params.id).exec()
//       .then((response) => res.json({ message: 'User successfully deleted!' }))
//       .catch((err) => res.send(err));
//   });

module.exports = router;
