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
    append_to_response: 'videos,similar',
    page: 1,
  },
};

router.get('/:id/details', (req, res, next) => {
  options.uri = `${api.url}/movie/${req.params.id}`;

  request(options)
  .then((data) => {
    data = tmdb.extractMovieData(data);
    res.json(data);
  })
  .catch((err) => {
    err = tmdb.handleError(err);
    res.status(400).send(err);
  });
});

module.exports = router;
