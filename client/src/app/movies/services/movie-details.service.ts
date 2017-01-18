import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { MovieDBService } from './moviedb.service';
import { DetailedMovie }  from '../models/detailed-movie';
import { API }            from './moviedb-api-info';

@Injectable()
export class MovieDetailsService extends MovieDBService {

  constructor(private http: Http) { super(); }

  public getDetails(id: number | string): Observable<DetailedMovie> {
    const apiUrl = API.url + '/movie/' + id + '?' + 
      API.key + '&language=en-US' + '&append_to_response=videos,similar';
    return this.http.get(apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  protected extractData(res: Response) {
    return res.json();
  }
}