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
    return this.authHttp.get('https://gentle-tor-88697.herokuapp.com/api/movie')
      .map((res: Response) => this.extractData(res))
      .catch(err => this.handleError(err));
  }

  private extractData(response) {
    const data = response.json() || {};

    if (!data) {
      return;
    }

    this.extractFavoriteMovies(data);
    this.extractGenreIds(data);
  }

  private extractGenreIds(data) {
    if (!data.result) {
      return;
    }

    const ids = [];

    data.result.map(movie => {
      movie.genres.map(genre => { ids.push(genre.id); });
    });

    localStorage.setItem('genres', JSON.stringify({ ids }));
  }

  private extractFavoriteMovies(data) {
    if (!data.result) {
      return; 
    }

    const ids = data.result.map(movie => movie.id);

    localStorage.setItem('favorite', JSON.stringify({ ids }));
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
    const body = err.json() || {}; // NEEDS FIXING; ERROR .json() 

    if (body.message) {
      errorMessage = body.message;
    }

    return Observable.throw(errorMessage);
  }
}