const express = require('express');

const router = express.Router();
const rp = require('request-promise');
const api = require('./api-info');
const tmdb = require('./tmdb-helper');

router.get('/movie', (req, res, next) => {

  if (!req.query.q) {
    res.send(400).send('Bad Request');
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
    res.json(err);
  });
});

module.exports = router;
