const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const passport = require('passport');

require('./config/db');
require('./config/passport');

const routes = require('./routes/index');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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

  res.status(error.status).send(error);
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
