const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const xssFilters = require('xss-filters');
const config = require('../secret/main');

const Schema = mongoose.Schema;

const setFirstName = fname => xssFilters.inHTMLData(fname);
const setLastName = lname => xssFilters.inHTMLData(lname);
const setEmail =
  (email) => {
    let clean = email;
    clean = xssFilters.inHTMLData(clean);
    clean = validator.trim(clean);
    clean = validator.escape(clean);
    clean = validator.normalizeEmail(clean);

    return clean;
  };

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    set: setEmail,
  },
  first_name: { type: String, required: true, set: setFirstName },
  last_name: { type: String, required: true, set: setLastName },
  password: { type: String, required: true },
});

userSchema.methods.validatePassword =
  password =>
    bcrypt.hash(password, config.rounds)
      .then((hash) => {
        bcrypt.compare(password, hash)
          .then(() => true)
          .catch(() => false);
      })
      .catch(() => false);

userSchema.methods.generateJwt = () => {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000)
  }, config.secret);
};

mongoose.model('User', userSchema);
