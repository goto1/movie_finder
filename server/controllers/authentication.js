const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.register = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    sendJSONResponse(res, 400, { message: 'All fields required' });
    return;
  }

  const user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save()
    .then(response => res.status(200).json({ token: user.generateJwt() }))
    .catch(err => res.status(400).json({
      error: err.message || 'Could not register new user'
    }));
};

module.exports.login = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    sendJSONResponse(res, 400, {
      message: 'All fields required'
    });
    return;
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.status(404).json(err);
      return;
    }

    if (user) {
      let token = user.generateJwt();
      res.status(200).json({ token });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};
