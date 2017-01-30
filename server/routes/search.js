const express = require('express');

const router = express.Router();
const rp = require('request-promise');
const api = require('./api-info');
const tmdb = require('./tmdb-helper');

const err = {
  status_code: 400,
  status_message: 'Bad Request',
};

router.get('/movie', (req, res, next) => {

  if (!req.query.q) {
    res.status(400).send(err);
  }

  const url = api.url + '/search/movie?' + api.key +
    '&language=en-US&query=' + req.query.q + '&page=1&include_adult=true';

  rp({
    uri: url,
    json: true
  })
  .then(data => {
    data = tmdb.extractData(data);
    res.json(data);
  })
  .catch(err => {
    err = tmdb.handleError(err);
    res.status(400).send(err);
  });
});

module.exports = router;
