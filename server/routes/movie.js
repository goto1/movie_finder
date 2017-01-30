const express = require('express');

const router = express.Router();
const rp = require('request-promise');
const api = require('./api-info');
const tmdb = require('./tmdb-helper');

router.get('/details/:id', (req, res, next) => {

  const url = api.url + '/movie/' +
    req.params.id + '?' + api.key +
    '&language=en-US&append_to_response=videos,similar';

  rp({
    uri: url,
    json: true
  })
  .then(data => {
    data = tmdb.extractMovieData(data);
    res.json(data);
  })
  .catch(err => {
    err = tmdb.handleError(err);
    res.json(err);
  });
});

module.exports = router;
