const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.getProfile = (req, res, next) => {
  if (!req.payload.id) {
    return res.status(401).json({
      message: 'UnauthorizedErrror: Private Profile',
    });
  }

  User.findById(req.payload.id).exec()
    .then(user => res.status(200).json(user))
    .catch(err =>
      res.status(400).json({
        message: err.message || 'Couldn\'t not retrieve profile information'
      })
    );
};
