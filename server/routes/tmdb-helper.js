/**
 * Helper methods for extracting data from TheMovieDB API
 */

const movieAttributes = ['id', 'poster_path', 'title', 'vote_average'];

module.exports = {

  extractData(response) {
    let data = {};

    data.page = response.page;
    data.total_pages = response.total_pages;
    data.movies = this.extractMovies(response);
    data.movies = this.extractPosterUrls(data.movies);

    return data;
  },

  extractMovies(data) {
    const movies = data.results.map(obj => {
      const copy = {};
      movieAttributes.map(att => {
        if (obj[att]) {
          copy[att] = obj[att];
        }
      });
      return copy;
    });

    return movies;
  },

  extractPosterUrls(data) {
    const movies = data.map(movie => {
      if (movie.poster_path) {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      }
      return movie;
    });

    return movies;
  },

  handleError(err) {
    let details = {};

    details.status_code =
      err.response.body.status_code ? err.response.body.status_code : 400;
    details.status_message =
      err.response.body.status_message ? err.response.body.status_message : 'Something went wrong!';

    return details;
  }
};
