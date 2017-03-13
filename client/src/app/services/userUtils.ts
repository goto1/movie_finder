/**
 * Utility methods for Heroku User API response handling
 */

import { Observable } from 'rxjs/Observable';

export class UserUtils {
  static handleError(error) {
    const err = new Error();
    const body = JSON.parse(error._body);

    err.message = body.message || 'Something went wrong';

    return Observable.throw(err.toString());
  }
}