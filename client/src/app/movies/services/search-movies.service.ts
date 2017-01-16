import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { MovieDBService } from './moviedb.service';
import { Movie }          from '../models/movie';
import { API }            from './moviedb-api-info';

@Injectable()
export class SearchMoviesService extends MovieDBService {
  private apiUrl = API.url + '/search/movie?' + API.key + '&language=en-US&page=1&include_adult=false';

  constructor(private http: Http) { super(); }

  public searchMovie(title: string): Observable<Movie[]> {
    title = title.replace(/\s/g, '%20');
    this.apiUrl += '&query=' + title;
    return this.http.get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
}