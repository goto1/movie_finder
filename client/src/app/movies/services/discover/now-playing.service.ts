import { Injectable }       from '@angular/core';
import { Http }             from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { IMovie }           from '../../../shared/interfaces';
import { API }              from '../moviedb-api-info';
import { DiscoverService }  from './discover.service';

@Injectable()
export class NowPlayingService extends DiscoverService {
  public apiUrl: string = `${API.url}/movie/now_playing?${API.key}&language=en-US&page=`;

  constructor(protected http: Http) {
    super(http);
  }

  public getNowPlaying(): Observable<[IMovie]> {
    this.page = this.page || 1;
    this.apiUrl += this.page;

    return this.getMovies(this.apiUrl);
  }
}

