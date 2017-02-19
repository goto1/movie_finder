const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.register = (req, res, next) => {
  const data = req.body || {};

  if (!data.first_name || !data.last_name || !data.email || !data.password) {
    return sendJSONResponse(res, 400, {
      message: 'Missing required information'
    });
  }

  const user = new User();

  user.email = data.email;
  user.first_name = data.first_name;
  user.last_name = data.last_name;
  user.password = data.password;

  user.save()
    .then(response => res.status(200).json({
      message: `User ${response.name ? response.name : ''} successfully registered`,
      token: user.generateJwt(),
    }))
    .catch(err => res.status(400).json({
      message: `Couldn't not register a new user${err.message ? '; ' + err.message : ''}`
    }));
};

module.exports.login = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return sendJSONResponse(res, 400, {
      message: 'Missing required fields'
    });
  }

  passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return res.status(404).json({
          message: 'Something went wrong',
        });
      }

      if (user) {
        return res.status(200).json({
          token: user.generateJwt(),
        });
      }

      return res.status(401).json(info);
    })(req, res);
};
