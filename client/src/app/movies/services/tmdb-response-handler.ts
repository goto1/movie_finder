import { Response }   from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IMovie }     from '../../shared/interfaces';

export class TMDBResponseHandler {

  static handleError(error: Response | any) {
    let errorMessage: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }

    return Observable.throw(errorMessage);
  }
}