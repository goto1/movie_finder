const db = require('../secret/db');

const userSchema = db.Schema({
  username: String,
  password: String,
  email: String,
});

const User = db.model('User', userSchema);

module.exports = User;
