const mongoose = require('mongoose');
const config = require('../secret/config');

mongoose.Promise = require('bluebird');

const options = {
  server: {
    socketOptions: { keepAlive: 30000, connectTimeoutMS: 30000 },
  },
  replest: {
    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
  },
  user: config.db_user,
  pass: config.db_pass,
};

const mongodbUri = config.db_uri;

mongoose.connect(mongodbUri, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to _moviejo_ database...');
});

require('../models/user');
