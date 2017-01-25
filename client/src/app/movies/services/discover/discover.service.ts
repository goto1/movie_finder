import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Movie }          from '../../models/movie';
import { API }            from '../moviedb-api-info';
import { TMDBService }    from '../tmdb.service';

@Injectable()
export class DiscoverService extends TMDBService {
  protected page: number;
  protected pageCount: number;

  constructor(protected http: Http) { super(); };

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

  protected getMovies(url): Observable<[Movie]> {
    return this.http.get(url)
      .map(response => this.extractData(response))
      .catch(err => this.handleError(err));
  }

  private extractData(res: Response) {
    let data = res.json();

    this.extractPageCount(data);
    this.extractPosterUrl(data.results);
    
    return data.results || {};
  }

  private extractPageCount(movies) {
    this.page = movies.page;
    this.pageCount = movies.total_pages;
  }
}