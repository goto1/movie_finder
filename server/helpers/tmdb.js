const request = require('request-promise');
const api = require('../secret/config');

const options = {
  method: 'GET',
  json: true,
  qs: {
    uri: `${api.tmdb_url}/movie`,
    api_key: api.tmdb_key,
    language: 'en-US',
  },
};

module.exports = {
  extractMovie(data) {
    return {
      id: data.id,
      title: data.title,
      vote_average: data.vote_average,
      genres: data.genres,
      poster_path: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '',
    };
  },

  getMovie(id) {
    options.url = `${options.qs.uri}/${id}`;

    return request(options);
  },
};
