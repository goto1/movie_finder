const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const movie = require('./routes/movie');
const movies = require('./routes/movies');
const search = require('./routes/search');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/movie', movie);
app.use('/movies', movies);
app.use('/search', search);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  const errDetailed = {
    status: err.status || 500,
    message: err.message,
  };

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(errDetailed.status).send(errDetailed);
});

module.exports = app;
