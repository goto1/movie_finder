import { Injectable }           from '@angular/core';
import { Http }                 from '@angular/http';
import { Observable }           from 'rxjs/Observable';

import { DiscoverService }      from './discover.service';
import { IMovie }               from '../../../shared/interfaces';
import { API }                  from '../moviedb-api-info';
import { Pagination }           from '../pagination';
import { TMDBResponseHandler }  from '../tmdb-response-handler';

@Injectable()
export class UpcomingService extends DiscoverService {

  constructor(private http: Http) {
    super();
    this.pagination = new Pagination(1, 1);
  }

  public getUpcoming(): Observable<[IMovie]> {
    let currentPage = this.pagination.getCurrentPage();
    let url = `${API.url}/movie/upcoming?${API.key}&language=en-US&page=${currentPage}`;

    return this.http.get(url)
      .map(response => this.extractData(response))
      .catch(err => TMDBResponseHandler.handleError(err));
  }
}