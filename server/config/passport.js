const User = require('mongoose').model('User');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const secret = require('../secret/config').secret;

passport.use(new LocalStrategy({ usernameField: 'email' },
  (username, password, done) => {
    User.findOne({ email: username }).exec()
      .then((user) => {
        if (!user || !user.validatePassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch(err => done(err));
  }));

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: secret,
};

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  User.findOne({ _id: jwt_payload.id }).exec()
    .then((user) => {
      next(null, user);
    })
    .catch(() => {
      next(null, false);
    });
}));
