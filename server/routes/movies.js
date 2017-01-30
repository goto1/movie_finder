const express = require('express');

const router = express.Router();
const rp = require('request-promise');
const tmdb = require('./tmdb-helper');
const api = require('./api-info');

// Upcoming Movies
router.get('/upcoming/:page?', (req, res, next) => {
  const page = req.params.page || 1;

  rp({
    uri: `${api.url}/movie/upcoming?${api.key}&language=en-US&page=${page}`,
    json: true,
  })
  .then(data => {
    data = tmdb.extractData(data);
    res.json(data);
  })
  .catch(err => {
    err = tmdb.handleError(err);
    res.json(err);
  });
})

// Top Rated Movies
router.get('/top_rated/:page?', (req, res, next) => {
  const page = req.params.page || 1;

  rp({
    uri: `${api.url}/movie/now_playing?${api.key}&language=en-US&page=${page}`,
    json: true,
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

// Now Playing
router.get('/now_playing/:page?', (req, res, next) => {
  const page = req.params.page || 1;

  rp({
    uri: `${api.url}/movie/now_playing?${api.key}&language=en-US&page=${page}`,
    json: true,
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

// Popular Movies
router.get('/popular/:page?', (req, res, next) => {
  const page = req.params.page || 1;

  rp({
    uri: `${api.url}/movie/popular?${api.key}&language=en-US&page=${page}`,
    json: true,
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
