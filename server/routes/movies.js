const router = require('express').Router();

const api = require('./api-info');
const tmdb = require('./tmdb-helper');

const options = {
  method: 'GET',
  json: true,
  qs: {
    api_key: api.key,
    language: 'en-US',
  },
};

// Upcoming Movies
router.get('/upcoming/:page?', (req, res, next) => {
  options.uri = `${api.url}/movie/upcoming`;
  options.qs.page = req.params.page || 1;

  tmdb.getMovies(res, options);
});

// Top Rated Movies
router.get('/top_rated/:page?', (req, res, next) => {
  options.uri = `${api.url}/movie/top_rated`;
  options.qs.page = req.params.page || 1;

  tmdb.getMovies(res, options);
});

// Now Playing
router.get('/now_playing/:page?', (req, res, next) => {
  options.uri = `${api.url}/movie/now_playing`;
  options.qs.page = req.params.page || 1;

  tmdb.getMovies(res, options);
});

// Popular Movies
router.get('/popular/:page?', (req, res, next) => {
  options.uri = `${api.url}/movie/popular`;
  options.qs.page = req.params.page || 1;

  tmdb.getMovies(res, options);
});

module.exports = router;
