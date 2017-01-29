/**
 * Helper methods for extracting data from TheMovieDB API
 */

const movieAttributes = ['id', 'poster_path', 'title', 'vote_average'];

module.exports = {

  extractData(data) {
    let movies;

    movies = this.extractMovies(data);
    movies = this.extractPosterUrls(movies);

    return movies;
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
};
