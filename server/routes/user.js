const router = require('express').Router();
const User = require('../models/user');

// --> /user/
router.route('/')
  .post((req, res, next) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    user.save()
      .then((response) => res.json({ message: 'New user added! ' }))
      .catch((err) => res.send(err));
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

    console.log(Date.now());

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
