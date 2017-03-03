import { Injectable }     from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { AuthHttp }       from 'angular2-jwt';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private authHttp: AuthHttp) { }

  getProfile() {
    const url = 'https://gentle-tor-88697.herokuapp.com/api/profile';

    return this.authHttp.get(url)
      .map((res: Response) => res.json())
      .catch(err => this.handleError(err));
  }

  getMovies() {
    const url = 'https://gentle-tor-88697.herokuapp.com/api/movie';

    return this.authHttp.get(url)
      .map((res: Response) => res.json())
      .map(data => this.updateFavoriteMovies(data))
      .catch(err => this.handleError(err));
  }

  private updateFavoriteMovies(data) {
    if (!data.result) {
      localStorage.setItem('favorite', JSON.stringify([]));
      return;
    }

    const favoriteMovies = data.result.map(movie => movie.id);
    localStorage.setItem('favorite', JSON.stringify(favoriteMovies));
    // localStorage.setItem('favorite', JSON.stringify([1, 2, 3, 4, 5]));

    return favoriteMovies;
  }

  toggleFavoriteMovie(id: number, isFavorite: boolean) {
    const url = 'https://gentle-tor-88697.herokuapp.com/api/movie';
    const movie = { id };
    let fetch;

    if (isFavorite) {
      const options: RequestOptionsArgs = { body: movie };
      fetch = this.authHttp.delete(url, options);
    } else {
      fetch = this.authHttp.post(url, JSON.stringify(movie));
    }

    return fetch
      .map((res: Response) => res.json())
      .catch(err => this.handleError(err));
  }

  private handleError(err: any): Observable<Error> {
    let errorMessage: string = 'Something went wrong';
    const body = err.json() || {};

    if (body.message) {
      errorMessage = body.message;
    }

    return Observable.throw(errorMessage);
  }
}