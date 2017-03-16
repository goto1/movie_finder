import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';
import '../shared/rxjs-operators';

import { UserUtils } from './userUtils';
import { IMovieDetailed } from '../shared/interfaces';

@Injectable()
export class UserService {
  private headers: Headers;
  private options: RequestOptions;
  
  constructor(private authHttp: AuthHttp) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getMovies() {
    return this.authHttp.get('https://gentle-tor-88697.herokuapp.com/api/movie')
      .map((res: Response) => this.extractData(res))
      .map(data => this.extractUserMoviesInfo(data))
      .catch(err => UserUtils.handleError(err));
  }

  toggleFavoriteMovie(movie: IMovieDetailed) {
    const body = { id: movie.id };
    const opts: RequestOptions = _.assign({}, this.options, { body });
    const request = 
      movie.isFavorite ?
      this.authHttp.post('https://gentle-tor-88697.herokuapp.com/api/movie', body) :
      this.authHttp.delete('https://gentle-tor-88697.herokuapp.com/api/movie', opts);

    return request
      .map((res: Response) => res.json() || {})
      .catch(err => UserUtils.handleError(err));
  }
  
  private extractData(res: Response) {
    const data = res.json() || {};

    return data.result;
  }

  private extractUserMoviesInfo(movies): void {
    const movieIds = movies.map(movie => movie.id);
    const genreIds = [];
    
    movies.map(movie => {
      movie.genres.map(genre => { genreIds.push(genre.id); });
    });

    this.saveToLocalStorage({ movieIds, genreIds });

    return movies;
  }

  private saveToLocalStorage(data): void {
    const userInfo = _.assign({}, data);

    localStorage.setItem('user_info', JSON.stringify(userInfo));
  }
}