import { Component, Input, OnInit } from '@angular/core';

import { IMovie }           from '../../shared/interfaces';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [ './search-results.component.sass' ]
})
export class SearchResultsComponent {
  @Input() movies: IMovie[];
  @Input() query: string;
}