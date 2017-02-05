const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

function hash(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// --> /user/register
router.route('/register')
  .post((req, res, next) => {

    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        status: 400,
        message: 'Missing required user information',
      });
    }

    hash(req.body.password)
      .then((hashed) => {
        const user = new User({
          email: req.body.email,
          password: hashed,
        });

        user.save()
          .then(response => res.status(200).send({
            status: 200,
            message: 'Account created successfully',
          }))
          .catch(err => res.status(500).send({
            status: 500,
            message: 'Could not register a new account',
          }));
      })
      .catch(err => res.status(500).send({
        status: 500,
        message: 'Could not register a new account',
      }));
  });

// /user/login
router.route('/login')
  .post((req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        status: 400,
        message: 'Missing required user information',
      });
    }

    User.where({ email: req.body.email }).findOne()
      .then((user) => {
        bcrypt.compare(req.body.password, user.password)
          .then((matched) => {
            if (!matched) {
              return res.status(400).send({
                status: 200,
                message: 'User email or password is incorrect',
              });
            }

            return res.status(200).send({
              status: 200,
              message: 'User successfully authenticated',
            });
          })
          .catch((err) => res.status(500).send({
            status: 500,
            message: 'Something went wrong',
          }));
      })
      .catch((err) => res.status(200).send({
        status: 400,
        message: 'Could not find the user with specified information',
      }));
  });

// --> /user/:id
router.route('/:id')
  .get((req, res, next) => {
    User.findById(req.params.id).exec()
      .then((response) => res.json(response))
      .catch((err) => res.send(err));
  })
  .put((req, res, next) => {
    const options = {
      password: req.body.password,
      email: req.body.email,
      updatedAt: Date.now(),
    };

    User.findByIdAndUpdate(req.params.id, options).exec()
      .then((response => res.json({ message: 'User info successfully updated!' })))
      .catch((err) => res.send({ error: err }));
  })
  .delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id).exec()
      .then((response) => res.json({ message: 'User successfully deleted!' }))
      .catch((err) => res.send(err));
  });

module.exports = router;
