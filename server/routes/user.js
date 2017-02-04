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

    console.log(req.params.id);

    User.findById(req.params.id).exec()
      .then((response) => res.json(response))
      .catch((err) => res.send(err));
  });

module.exports = router;
