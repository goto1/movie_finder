const router = require('express').Router();

const api = require('./api-info');
const tmdb = require('./tmdb-helper');
const request = require('request-promise');

const options = {
  method: 'GET',
  json: true,
  uri: `${api.url}/search/movie`,
  qs: {
    api_key: api.key,
    language: 'en-US',
  },
};

router.get('/movie', (req, res, next) => {
  if (!req.query.query) {
    res.status(400).send({
      status_code: 400,
      status_message: 'Bad Request',
    }).end();
  } else {
    options.qs.query = req.query.query;
    options.qs.page = req.query.page || 1;

    request(options)
    .then((data) => {
      const movies = tmdb.extractData(data);
      res.json(movies);
    })
    .catch((err) => {
      const error = tmdb.handleError(err);
      res.status(400).send(error).end();
    });
  }
});

module.exports = router;
