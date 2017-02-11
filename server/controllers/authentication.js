const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.register = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return sendJSONResponse(res, 400, {
      message: 'Missing required fields'
    });
  }

  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

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
        console.log(err);
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
