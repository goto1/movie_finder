const passport = require('passport');
const resJSON = require('../helpers/response');

module.exports.getProfile = (req, res) => {
  passport.authenticate('jwt', { session: false },
    (err, user) => {
      if (err) {
        return resJSON.internalServerError(res, 'Something went wrong');
      }

      return res.status(200).json({
        status: 200,
        result: user,
      });
    })(req, res);
};
