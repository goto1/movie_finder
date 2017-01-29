const express = require('express');
const router = express.Router();
const rp = require('request-promise');

const options = {
  uri: 'https://api.themoviedb.org/3/discover/movie?api_key=03eb2b84d82f7dbdb50c3106fb6c2de3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
  json: true,
};


/* GET users listing. */
router.get('/', (req, res, next) => {
  rp(options)
    .then(data => res.json(data))
    .catch(err => res.status(500).send('Something broke!'));
  // res.send('respond with a resource');
});

module.exports = router;

/**
 * res.end() -> end the response process
 * res.json() -> send a JSON response
 * res.jsonp() -> send a JSON response with JSOP support
 * res.send() -> send a response of various types
 * res.sendStatus() -> set the response status code and send its string
 *                     representation as the response body
 *
 * router.get()
 * router.post()
 * router.put()
 * router.delete()
 */
