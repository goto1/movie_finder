import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrendingMoviesService {
  private moviesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=03eb2b84d82f7dbdb50c3106fb6c2de3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  constructor(private http: Http) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get(this.moviesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }

  private handleError(error: Response | any) {
    let errorMessage: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    console.error(errorMessage);
    
    return Observable.throw(errorMessage);
  }

}

