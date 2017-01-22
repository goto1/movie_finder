import { Component, Input } from '@angular/core';

import { Movie }            from '../models/movie';

@Component({
  selector: 'movies-search-result',
  templateUrl: './search-results.component.html',
  styleUrls: [ './search-results.component.sass' ]
})
export class SearchResultsComponent {
  @Input() movies: Movie[];
}