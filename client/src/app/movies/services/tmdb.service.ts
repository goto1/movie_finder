import { Response }   from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Movie }      from '../models/movie';

export abstract class TMDBService {

  protected extractPosterUrl(movies: Movie[]) {
    movies.map(movie => {
      if (movie.poster_path) {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      } else {
        movie.poster_path = '';
      }
    });
  }

  protected handleError(error: Response | any) {
    let errorMessage: string = this.extractErrorMessage(error);

    return Observable.throw(errorMessage);
  }

  private extractErrorMessage(error: Response | any): string {
    let errorMessage: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }

    return errorMessage; 
  }

}