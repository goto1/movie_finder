const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const tmdbHelper = require('./tmdb-helper');

const api = {
  url: 'https://api.themoviedb.org/3',
  key: 'api_key=03eb2b84d82f7dbdb50c3106fb6c2de3',
};

router.get('/now_playing/:page', (req, res, next) => {
  rp({
    uri: `${api.url}/movie/now_splaying?${api.key}&language=en-US&page=${req.params.page}`,
    json: true,
  })
  .then(data => {
    const extracted = tmdbHelper.extractData(data);
    res.json(extracted);
  })
  .catch(err => {
    let errDetails = tmdbHelper.handleError(err);
    res.json(errDetails);
  });
});

module.exports = router;
