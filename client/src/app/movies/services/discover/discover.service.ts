import { Injectable }           from '@angular/core';
import { Response }             from '@angular/http';

import { Pagination }           from '../pagination';
import { TMDBDataExtractor }    from '../tmdb-data-extractor';

@Injectable()
export class DiscoverService {
  public pagination: Pagination;

  protected extractData(res: Response) {
    let data = res.json();

    this.extractPageCount(data);
    TMDBDataExtractor.getPosterUrlsFromMovies(data.results, false);

    return data.results || {};
  }

  protected extractPageCount(data): void {
    this.pagination.setCurrentPage(data.page);
    this.pagination.setPageCount(data.total_pages);
  }
}