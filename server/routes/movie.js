const router = require('express').Router();

const rp = require('request-promise');
const api = require('./api-info');
const tmdb = require('./tmdb-helper');

const err = {
  status_code: 400,
  status_message: 'Bad Request',
};

// movie/:id/details
router.get('/:id/details', (req, res, next) => {

  rp({
    uri: `${api.url}/movie/${req.params.id}?${api.key}&language=en-US&append_to_response=videos,similar`,
    json: true
  })
  .then(data => {
    data = tmdb.extractMovieData(data);
    res.json(data);
  })
  .catch(err => {
    err = tmdb.handleError(err);
    res.status(400).send(err);
  });
});

module.exports = router;
