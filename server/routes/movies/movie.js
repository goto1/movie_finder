const router = require('express').Router();

const api = require('./api-info');
const tmdb = require('./tmdb-helper');
const request = require('request-promise');

const options = {
  method: 'GET',
  json: true,
  qs: {
    api_key: api.key,
    language: 'en-US',
  },
};

/**
 * /movie/now_playing
 * /movie/now_playing?page=1
 */
router.get('/now_playing', (req, res, next) => {
  options.uri = `${api.url}/movie/upcoming`;
  options.qs.page = req.query.page || 1;

  request(options)
  .then((data) => {
    const movies = tmdb.extractData(data);
    res.json(movies);
  })
  .catch((err) => {
    const error = tmdb.handleError(err);
    res.status(400).send(error);
  });
});

/**
 * /movie/popular
 * /movie/popular?page=1
 */
router.get('/popular', (req, res, next) => {
  options.uri = `${api.url}/movie/popular`;
  options.qs.page = req.query.page || 1;

  request(options)
  .then((data) => {
    const movies = tmdb.extractData(data);
    res.json(movies);
  })
  .catch((err) => {
    const error = tmdb.handleError(err);
    res.status(400).send(error);
  });
});

/**
 * /movie/top_rated
 * /movie/top_rated?page=1
 */
router.get('/top_rated', (req, res, next) => {
  options.uri = `${api.url}/movie/top_rated`;
  options.qs.page = req.query.page || 1;

  request(options)
  .then((data) => {
    const movies = tmdb.extractData(data);
    res.json(movies);
  })
  .catch((err) => {
    const error = tmdb.handleError(err);
    res.status(400).send(error);
  });
});

/**
 * /movie/upcoming
 * /movie/upcoming?page=1
 */
router.get('/upcoming', (req, res, next) => {
  options.uri = `${api.url}/movie/upcoming`;
  options.qs.page = req.query.page || 1;

  request(options)
  .then((data) => {
    const movies = tmdb.extractData(data);
    res.json(movies);
  })
  .catch((err) => {
    const error = tmdb.handleError(err);
    res.status(400).send(error);
  });
});

/**
 * /movie/:id
 */
router.get('/:id', (req, res, next) => {
  options.uri = `${api.url}/movie/${req.params.id}`;
  options.qs.append_to_response = 'videos,similar';

  request(options)
  .then((data) => {
    const movie = tmdb.extractMovieData(data);
    res.json(movie);
  })
  .catch((err) => {
    const error = tmdb.handleError(err);
    res.status(400).send(error);
  });
});

module.exports = router;
