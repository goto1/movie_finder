import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';
import '../shared/rxjs-operators';

import { UserUtils } from './userUtils';

@Injectable()
export class UserService {
  
  constructor(private authHttp: AuthHttp) { }

  getMovies() {
    return this.authHttp.get('https://gentle-tor-88697.herokuapp.com/api/movie')
      .map((res: Response) => this.extractData(res))
      .map(data => this.extractUserMoviesInfo(data))
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

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
}