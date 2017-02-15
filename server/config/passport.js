const User = require('mongoose').model('User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({ usernameField: 'email' },
  (username, password, done) => {
    User.findOne({ email: username }).exec()
      .then((user) => {
        if (!user || !user.validatePassword(password)) {
          return done(null, false, {
            message: 'Incorrect username or password'
          });
        }
        return done(null, user);
      })
      .catch(err => done(err));
  }));
