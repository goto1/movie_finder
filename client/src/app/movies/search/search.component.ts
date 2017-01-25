import { Component, OnInit }  from '@angular/core';

import { Movie }              from '../models/movie';
import { SearchService }      from '../services/search/search.service';

interface SearchMovieInput {
  title: string;
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.sass' ]
})
export class SearchComponent implements OnInit {
  public search: SearchMovieInput;
  public movies: Movie[];
  public error: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.search = { title: '' };
    this.checkForPreviousSearches();
  }

  private checkForPreviousSearches() {
    if (this.searchService.cachedQuery()) {
      let cachedQuery = this.searchService.cachedQuery();
      this.searchFor(cachedQuery);
    }
  }

  public searchFor(title: string) {
    if (title) {
      this.search.title = title;
      this.searchService.search(this.search.title)
        .subscribe(
          movies => this.movies = movies,
          error => this.error = true
        );
    }
  }
}