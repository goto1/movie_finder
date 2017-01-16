import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { Movie }            from '../models/movie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieDBService {
  constructor(private http: Http) { }

  public getData(url: string): Observable<Movie[]> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
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