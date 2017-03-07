/**
 * Utility methods for TMDB API response handling
 */

import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovie } from '../shared/interfaces';
import * as _ from 'lodash';

export class TMDBUtils {

  static extractDataSingleMovie(res: Response) {
    const data = res.json() || {};

    return {
      id: data.id,
      poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      backdrop_path: `https://image.tmdb.org/t/p/w1000${data.backdrop_path}`,
      title: data.title,
      vote_average: data.vote_average,
      overview: data.overview,
      release_date: data.release_date,
      runtime: data.runtime,
      similar: data.similar ? data.similar.results : [],
      trailer: data.videos ? data.videos.results : [],
      genres: data.genres,
      favorite: false
    };
  }

  static extractTrailerUrl(data) {
    const clone = _.clone(data);

    clone.trailer = clone.trailer[0] ? `https://www.youtube.com/watch?v=${clone.trailer[0].key}` : '';
    
    return clone;
  }
  
  static extractDataMultipleMovies(res: Response) {
    const data = res.json() || {};

    return {
      page: data.page,
      movies: data.results,
      total_pages: data.total_pages
    };
  }

  static fixImagePaths(data) {
    const clone = _.clone(data);

    clone.movies.map(movie => {
      movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movie.backdrop_path = `https://image.tmdb.org/t/p/w1000${movie.backdrop_path}`;
    });

    return clone;
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