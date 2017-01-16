import { Response }   from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Movie }      from '../models/movie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export abstract class MovieDBService {

  protected extractData(res: Response) {
    const body = res.json();
    return body.results || {};
  }

  protected handleError(error: Response | any) {
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