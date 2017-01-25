import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { TMDBService }    from '../tmdb.service';
import { Movie }          from '../../models/movie';
import { API }            from '../moviedb-api-info';

@Injectable()
export class SearchService extends TMDBService {
  private apiUrl = API.url + '/search/movie?' + API.key + '&language=en-US&page=1&include_adult=false';
  private cachedSearchQuery: string;
  constructor(private http: Http) { super(); }

  public search(title: string): Observable<Movie[]> {
    this.cachedSearchQuery = title;
    title = title.replace(/\s/g, '%20');
    this.apiUrl += '&query=' + title;

    return this.http.get(this.apiUrl)
      .map(data => this.extractData(data))
      .catch(err => this.handleError(err));
  }

  public cachedQuery(): string {
    return this.cachedSearchQuery || '';
  }

  private extractData(res: Response) {
    let data = res.json();
    this.extractPosterUrl(data.results);

    return data.results || {};
  }
}