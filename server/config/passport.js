const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = mongoose.model('User');

passport.use(new LocalStrategy({ usernameField: 'email' },
  (username, password, done) => {
    User.findOne({ email: username }).exec()
      .then((user) => {
        if (!user) {
          console.log('1', user);
          return done(null, false, { message: 'Incorrect username' });
        }

        if (!user.validatePassword(password)) {
          console.log(user.validatePassword(password));
          console.log('2', user);
          return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
      })
      .catch(err => done(err));
  }));
