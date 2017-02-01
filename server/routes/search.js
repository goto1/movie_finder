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
    page: 1,
  },
};

router.get('/movie', (req, res, next) => {
  if (!req.query.q) {
    res.status(400).send({
      status_code: 400,
      status_message: 'Bad Request',
    });
  } else {
    options.qs.query = req.query.q;
    options.uri = `${api.url}/search/movie`;

    request(options)
    .then((data) => {
      data = tmdb.extractData(data);
      res.json(data);
    })
    .catch((err) => {
      err = tmdb.handleError(err);
      res.status(400).send(err);
    });
  }
});

module.exports = router;
