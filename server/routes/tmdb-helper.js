/**
 * Helper methods for extracting data from TheMovieDB API
 */

module.exports = {

  extractData(response) {
    const data = {};

    data.page = response.page || 1;
    data.total_pages = response.total_pages || 1;
    data.movies = this.extractMovies(response);
    data.movies = this.extractPosterUrl(data.movies);

    return data;
  },

  extractMovies(data) {
    let movies = [];
    const attributesToExtract = [
      'id', 'poster_path',
      'title', 'vote_average',
    ];

    if (data) {
      movies = data.results.map(movie => {
        const copy = {};
        attributesToExtract.map(attribute => {
          if (movie[attribute]) {
            copy[attribute] = movie[attribute];
          }
        });
        return copy;
      });
    }

    return movies;
  },

  extractPosterUrl(movies) {
    let data = [];

    if (movies) {
      data = movies.map(movie => {
        movie.poster_path =
          movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
        return movie;
      });
    }

    return data;
  },

  handleError(err) {
    const details = {};

    if (err) {
      details.status_code = err.response.body.status_code || 400;
      details.status_message = err.response.body.status_message || 'Could not get any response';
    }

    return details;
  },
};
