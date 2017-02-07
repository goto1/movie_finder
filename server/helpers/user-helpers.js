const request = require('request-promise');
const mongoose = require('mongoose');
const api = require('../configs/api');
const tmdb = require('./tmdb-helper');
const { MovieSchema } = require('../models/schemas');

const Movie = mongoose.model('Movie', MovieSchema);

const options = {
  method: 'GET',
  json: true,
  uri: api.url,
  qs: { api_key: api.key, language: 'en-US' },
};

module.exports = {

  getMovie(id) {
    options.uri = `${options.uri}/movie/${id}`;

    return request(options);
  },

  extractMovieData(data) {
    let movie = tmdb.extractMovieData(data);

    movie = new Movie({
      _id: movie.id,
      poster_path: movie.poster_path,
      title: movie.title,
      vote_average: movie.vote_average,
      genres: movie.genres,
    });

    return movie;
  }
};
