const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const tmdbDataExtractor = require('./tmdb/tmdb-data-extractor');

const api = {
  url: 'https://api.themoviedb.org/3',
  key: 'api_key=03eb2b84d82f7dbdb50c3106fb6c2de3',
};

router.get('/now_playing', (req, res, next) => {
  rp({
    uri: `${api.url}/movie/now_playing?${api.key}&language=en-US&page=1`,
    json: true,
  })
  .then(data => {
    const extracted = tmdbDataExtractor.extractData(data);
    res.json(extracted);
  });
});

module.exports = router;
