const passport = require('passport');
const mongoose = require('mongoose');
const resJSON = require('../helpers/response');

const User = mongoose.model('User');

module.exports.register = (req, res) => {
  const data = req.body || {};

  if (!data.first_name || !data.last_name || !data.email || !data.password) {
    return resJSON.badRequest(res, 'Missing required information');
  }

  const user = new User();

  user.email = data.email;
  user.first_name = data.first_name;
  user.last_name = data.last_name;
  user.password = data.password;

  user.save()
    .then(() => resJSON.created(res, 'Account successfully created', user.generateJwt()))
    .catch((err) => {
      console.error(err);
      return resJSON.internalServerError(res, 'Couldn\'t register a new account');
    });
};

module.exports.login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return resJSON.badRequest(res, 'Missing required information');
  }

  passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        console.error(err);
        return resJSON.internalServerError(res, 'Something went wrong');
      }

      if (user) {
        return resJSON.ok(res, 'User successfully logged in', user.generateJwt());
      } else {
        return resJSON.badRequest(res, 'User email and/or password incorrect');
      }
    })(req, res);
};
