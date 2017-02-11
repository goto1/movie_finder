const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = require('../secret/jwt');
const rounds = require('../secret/salt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String,
});

userSchema.methods.setPassword = (password) => {
  bcrypt.hash(password, rounds)
    .then(hash => {
      this.hash = hash;
    })
    .catch(err => console.log(err));
}

userSchema.methods.validatePassword = (password) => {
  return bcrypt.hash(password, rounds)
    .then(hash => {
      bcrypt.compare(password, hash)
        .then(matched => true)
        .catch(err => false);
    })
    .catch(err => false);
}

// userSchema.methods.setPassword = (password) => {
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
// };

// userSchema.methods.validPassword = (password) => {
//   const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
//   return this.hash === hash;
// };

userSchema.methods.generateJwt = () => {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000)
  }, secret);
};

mongoose.model('User', userSchema);
