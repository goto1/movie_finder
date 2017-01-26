import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Observable }           from 'rxjs/Observable';

import { API }                  from '../moviedb-api-info';
import { IMovie }               from '../../../shared/interfaces';
import { TMDBDataExtractor }    from '../tmdb-data-extractor';
import { TMDBResponseHandler }  from '../tmdb-response-handler';

@Injectable()
export class SearchService {
  private apiUrl = API.url + '/search/movie?' + API.key + '&language=en-US&page=1';
  private cachedSearchQuery: string;
  
  constructor(private http: Http) { }

  public search(title: string): Observable<IMovie[]> {
    this.cachedSearchQuery = title;
    title = title.replace(/\s/g, '%20');
    this.apiUrl += '&query=' + title;

    return this.http.get(this.apiUrl)
      .map(data => this.extractData(data))
      .catch(err => TMDBResponseHandler.handleError(err));
  }

  private extractData(res: Response) {
    let data = res.json();

    TMDBDataExtractor.getPosterUrlsFromMovies(data.results, false);

    return data.results || {};
  }

  public cachedQuery(): string {
    return this.cachedSearchQuery || '';
  }
}