import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../models/movie';

@Component({
  selector: 'movies-search-result',
  templateUrl: './search-results.component.html',
  styleUrls: [ './search-results.component.sass' ]
})
export class SearchResultsComponent implements OnInit {
  @Input() movies: Movie[];

  ngOnInit(): void {
    console.log('SearchResultsComponent initialized.');
    console.log(this.movies);
  }
}