import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Observable }           from 'rxjs/Observable';

import { IMovie }               from '../../../shared/interfaces';
import { API }                  from '../moviedb-api-info';
import { TMDBResponseHandler }  from '../tmdb-response-handler';
import { TMDBDataExtractor }    from '../tmdb-data-extractor';

@Injectable()
export class DiscoverService {
  protected page: number;
  protected pageCount: number;

  constructor(protected http: Http) { }

  public nextPage(): void {
    this.page++;
  }

  public previousPage(): void {
    this.page--;
  }

  public hasNext(): boolean {
    return this.page < this.pageCount;
  }

  public hasPrevious(): boolean {
    return this.page > 1;
  }

  protected getMovies(url): Observable<[IMovie]> {
    return this.http.get(url)
      .map(response => this.extractData(response))
      .catch(err => TMDBResponseHandler.handleError(err));
  }

  private extractData(res: Response) {
    let data = res.json();

    this.extractPageCount(data);
    TMDBDataExtractor.getPosterUrlsFromMovies(data.results, false);
    
    return data.results || {};
  }

  private extractPageCount(movies) {
    this.page = movies.page;
    this.pageCount = movies.total_pages;
  }
}