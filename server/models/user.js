const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../secret/config');
const sanitizer = require('../helpers/sanitizer');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true, set: sanitizer.email },
  password: { type: String, required: true },
  first_name: { type: String, required: true, set: sanitizer.name },
  last_name: { type: String, required: true, set: sanitizer.name },
  movies: { type: Array, default: [] },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  }

  bcrypt.hash(this.password, config.salt_rounds)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => {
      next(err);
    });
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
  return jwt.sign({
    id: this._id,
    email: this.email,
    first_name: this.first_name,
    last_name: this.last_name,
  }, config.secret, { expiresIn: '1h' });
};

mongoose.model('User', userSchema);
