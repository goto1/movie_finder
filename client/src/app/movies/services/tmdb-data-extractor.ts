import { IMovie } from '../../shared/interfaces';

export class TMDBDataExtractor {

  /**
   * Used by:
   *  -> DiscoverService
   *  -> SearchService
   *  -> MovieDetailsService
   */
  static getPosterUrlsFromMovies(movies: IMovie[], largeImages: boolean) {
    let apiUrl: string;

    if (largeImages) {
      apiUrl = 'https://image.tmdb.org/t/p/w500';
    } else {
      apiUrl = 'https://image.tmdb.org/t/p/w300';
    }

    movies.map(movie => {
      if (movie.poster_path) {
        movie.poster_path = apiUrl + movie.poster_path;
      } else {
        movie.poster_path = '';
      }
    });
  }

  /**
   * Used by:
   *  -> MovieDetailsService
   */
  static getPosterUrl(movie: IMovie, largeImage: boolean) {
    let url: string;

    if (largeImage) {
      url = 'https://image.tmdb.org/t/p/w500';
    } else {
      url = 'https://image.tmdb.org/t/p/w300';
    }

    if (movie.poster_path) {
      movie.poster_path = `${url}${movie.poster_path}`;
    } else {
      movie.poster_path = '';
    }
  }

  /**
   * Used by:
   *  -> MovieDetailsService
   */
  static getSimilarMovies(movie) {
    let similar: IMovie[] = [];
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

  /**
   * Used by:
   *  -> MovieDetailsService
   */
  static getTrailerUrl(movie) {
    if (movie.videos.results[0]) {
      movie.trailer = `https://youtube.com/embed/${movie.videos.results[0].key}`;
    } else {
      movie.trailer = '';
    }
  }

  static getBackdropUrl(movie) {
    if (movie.backdrop_path) {
      movie.backdrop_path = `https://image.tmdb.org/t/p/w1000${movie.backdrop_path}`;
    } else {
      movie.backdrop_path = '';
    }
  }
}