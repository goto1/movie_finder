import { Injectable }       from '@angular/core';
import { Http }             from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { Movie }            from '../../models/movie';
import { API }              from '../moviedb-api-info';
import { DiscoverService }  from './discover.service';

@Injectable()
export class TopRatedService extends DiscoverService {
  constructor(protected http: Http) {
    super(http);
  }

  public getTopRated(): Observable<[Movie]> {
    this.page = this.page || 1;
    const url = `${API.url}/movie/top_rated?${API.key}&language=en-US&page=${this.page}`;
    return this.getMovies(url); 
  }
}