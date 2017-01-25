import { Component, Input } from '@angular/core';

import { Movie } from '../models/movie';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [ './search-results.component.sass' ]
})
export class SearchResultsComponent {
  @Input() movies: Movie[];
  @Input() query: string;
}