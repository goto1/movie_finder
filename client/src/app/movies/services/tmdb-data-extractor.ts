import { Movie } from '../models/movie';

export class TMDBDataExtractor {

  static getPosterUrlsMultipleMovies(movies: Movie[]) {
    movies.map(movie => {
      if (movie.poster_path) {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      } else {
        movie.poster_path = '';
      }
    });
  }

  /**
   * Used by:
   *  -> MovieDetailsService
   */

  static getPosterUrlSingleMovie(movie: Movie) {
    if (movie.poster_path) {
      movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    } else {
      movie.poster_path = '';
    }
  }

  static getSimilarMovies(movie) {
    let similar: Movie[] = [];
    const moviesToBeExtracted: number = 10;

    if (movie.similar.results) {
      if (movie.similar.results.length > moviesToBeExtracted) {
        similar = movie.similar.results.slice(0, moviesToBeExtracted);
      } else {
        similar = movie.similar.results;
      }
    }

    movie.similar = similar;
  }

  static getTrailerUrl(movie) {
    if (movie.videos.results[0]) {
      movie.trailer = `https://youtube.com/embed/${movie.videos.results[0].key}`;
    } else {
      movie.trailer = '';
    }
  }
}