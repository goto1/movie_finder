import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Movie }          from './trending-movies/movie';

const API_INFO = {
  search_url: 'https://api.themoviedb.org/3/search/movie?api_key=03eb2b84d82f7dbdb50c3106fb6c2de3',
  add_info: '&language=en-US&page=1&include_adult=false'
};

@Injectable()
export class MoviesService {
  private apiUrl: string;

  constructor(private http: Http) { }

  public searchForMovie(title: string): Observable<Movie[]> {
    title = title.replace(/\s/g, '%20');
    this.apiUrl = `${API_INFO.search_url}${API_INFO.add_info}&query=${title}`;

    return this.http.get(this.apiUrl)
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