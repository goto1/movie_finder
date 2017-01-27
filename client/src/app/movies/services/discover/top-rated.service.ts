import { Injectable }           from '@angular/core';
import { Http }                 from '@angular/http';
import { Observable }           from 'rxjs/Observable';

import { DiscoverService }      from './discover.service';
import { IMovie }               from '../../../shared/interfaces';
import { API }                  from '../moviedb-api-info';
import { Pagination }           from '../pagination';
import { TMDBResponseHandler }  from '../tmdb-response-handler';

@Injectable()
export class TopRatedService extends DiscoverService {
  
  constructor(protected http: Http) { 
    super();
    this.pagination = new Pagination(1, 1);
  }

  public getTopRated(): Observable<[IMovie]> {
    let currentPage = this.pagination.getCurrentPage();
    let url = `${API.url}/movie/top_rated?${API.key}&language=en-US&page=${currentPage}`;

    return this.http.get(url)
      .map(response => this.extractData(response))
      .catch(err => TMDBResponseHandler.handleError(err));
  }
}