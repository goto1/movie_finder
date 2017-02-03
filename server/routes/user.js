const router = require('express').Router();
const db = require('../secret/db');
const User = require('../models/user');

const conn = db.connection;

router.post('/', (req, res, next) => {

  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  user.save()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    res.status(400).send({
      status_code: 400,
      status_message: 'Could not save to database',
    });
  });

  res.send('Test');
});

module.exports = router;
