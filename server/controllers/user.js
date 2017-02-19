const mongoose = require('mongoose');
const passport = require('passport');

module.exports.getProfile = (req, res, next) => {
  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return res.status(404).json({
          message: 'Something went wrong'
        });
      }

      return res.status(200).json(user);
    })(req, res);
};
