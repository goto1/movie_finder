const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const passport = require('passport');

require('./secret/db');
require('./config/passport');

const routes = require('./routes/index');

const app = express();

app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message,
  };

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(error.status).send(error);
});

module.exports = app;
