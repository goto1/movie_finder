const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.profileRead = (req, res) => {
  if (!req.payload.id) {
    res.status(401).json({
      message: 'UnauthorizedError: private profile',
    });
  } else {
    User.findById(req.payload.id).exec()
      .then(user => res.status(200).json(user))
      .catch(err =>
        res.status(400).json({ message: err.message || 'Could not retrieve profile information' }));
  }
};
