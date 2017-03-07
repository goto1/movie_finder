/**
 * Utility methods for TMDB API response handling
 */

import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMovie } from '../shared/interfaces';
import * as _ from 'lodash';

export class TMDBUtils {

  static extractData(res: Response) {
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
    
    err.name = error.status || 400;

    if (error instanceof Response) {
      const body = error.json();
      err.message = body.status_message;
    } else {
      err.message = 'Something went wrong.';
    }

    return Observable.throw(err.toString());
  }
}