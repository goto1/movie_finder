/**
 * Utility methods for TMDB API response handling
 */

import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovieDetailed, IMoviesListData } from '../shared/interfaces';
import * as _ from 'lodash';

export class TMDBUtils {

  static extractDataSingleMovie(res: Response): IMovieDetailed {
    const data = res.json() || {};

    return {
      id: data.id,
      poster_path: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '',
      backdrop_path: data.backdrop_path ? `https://image.tmdb.org/t/p/w1000${data.backdrop_path}` : '',
      title: data.title,
      vote_average: data.vote_average,
      overview: data.overview,
      release_date: data.release_date,
      runtime: data.runtime,
      similar: data.similar ? data.similar.results : [],
      trailer: data.videos ? data.videos.results : [],
      genres: data.genres,
      isFavorite: false
    };
  }

  static extractTrailerUrl(data): IMovieDetailed {
    const clone = _.clone(data);

    clone.trailer = clone.trailer[0] ? `https://www.youtube.com/watch?v=${clone.trailer[0].key}` : '';
    
    return clone;
  }

  static extractSimilarMovies(data): IMovieDetailed {
    const clone = _.clone(data);

    clone.similar = clone.similar.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '',
        vote_average: movie.vote_average
      };
    })

    return clone;
  }
  
  static extractDataMultipleMovies(res: Response): IMoviesListData {
    const data = res.json() || {};

    return {
      page: data.page,
      movies: data.results,
      total_pages: data.total_pages
    };
  }

  static extractMovieInformation(data): IMoviesListData {
    const clone = _.clone(data);

    clone.movies = clone.movies.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '',
        vote_average: movie.vote_average
      };
    });

    return clone;
  }

  static extractRandomGenreIds(genres: Array<number>): Array<number> {
    let randomGenreIds = [];

    while (randomGenreIds.length < 3) {
      let randomGenre = TMDBUtils.getRandomNumberBetween(0, genres.length - 1);
      let duplicate = _.find(randomGenreIds, idx => idx === genres[randomGenre]);

      if (duplicate === undefined) {
        randomGenreIds.push(genres[randomGenre]);
      }
    }

    return randomGenreIds;
  }

  static getRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static handleError(error) {
    const err = new Error();
    
    err.name = error.status || 'Error';

    if (error instanceof Response) {
      const body = error.json();
      err.message = body.status_message;
    } else {
      err.message = 'Something went wrong.';
    }

    return Observable.throw(err.toString());
  }
}