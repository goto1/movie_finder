const express = require('express');
const router = express.Router();
const rp = require('request-promise');

const movie_attributes = ['id', 'poster_path', 'title', 'vote_average'];

const api = {
  url: 'https://api.themoviedb.org/3',
  key: 'api_key=03eb2b84d82f7dbdb50c3106fb6c2de3',
};

function extract(data) {
  const arr = [];
  data.results.map((obj) => {
    const copy = {};
    movie_attributes.map((att) => {
      if (obj[att]) {
        copy[att] = obj[att];
      }
    });
    arr.push(copy);
  });
  return arr;
}

router.get('/now_playing', (req, res, next) => {
  rp({
    uri: `${api.url}/movie/now_playing?${api.key}&language=en-US&page=1`,
    json: true,
  })
  .then((data) => {
    // const newd = extract(data);
    console.log(extract(data));
    res.json(extract(data));
  })
  .catch(err => res.send(err));
});

module.exports = router;
