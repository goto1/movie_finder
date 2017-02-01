/**
 * Helper methods for extracting data from TheMovieDB API
 */

module.exports = {

  /**
   * Used by following routes:
   *  -> /movies/now_playing/
   *  -> /movies/upcoming/
   *  -> /movies/top_rated/
   *  -> /movies/popular/
   *  -> /search/movie
   */
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
    const attributes = [
      'id', 'poster_path',
      'title', 'vote_average',
    ];

    if (data.results) {
      movies = data.results.map(movie => {
        const temp = {};
        attributes.map(attribute => {
          if (movie.hasOwnProperty(attribute)) {
            temp[attribute] = movie[attribute];
          }
        });
        return temp;
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

  /**
   * Used by following routes:
   *  -> /movie/:id
   */
  extractMovieData(response) {
    let data = response || {};

    data = this.extractAttributes(data);
    data = this.extractImages(data);
    data.similar = this.extractMovies(data.similar);
    data.similar = this.extractPosterUrl(data.similar);

    return data;
  },

  extractAttributes(movie) {
    const attributes = [
      'id', 'poster_path', 'title', 'backdrop_path',
      'vote_average', 'imdb_id', 'overview', 'release_date',
      'runtime', 'similar', 'trailer', 'vote_count', 'genres',
    ];
    const extracted = {};

    if (movie) {
      attributes.map(att => {
        if (movie.hasOwnProperty(att)) {
          extracted[att] = movie[att];
        }
        return extracted;
      });
    }

    return extracted;
  },

  extractImages(data) {
    const movie = data || {};

    if (movie) {
      movie.poster_path =
        movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
      movie.backdrop_path =
        movie.backdrop_path ? `https://image.tmdb.org/t/p/w1000${movie.backdrop_path}` : '';
    }

    return movie;
  },

  /**
   * Used for extracting the error message
   */
  handleError(err) {
    const details = {};

    if (err.response.body) {
      details.status_code = err.response.body.status_code || 400;
      details.status_message = err.response.body.status_message || 'Bad Request';
    }

    return details;
  },
};
