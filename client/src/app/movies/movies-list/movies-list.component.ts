import { Component, Input } from '@angular/core';

import { IMovie } from '../../shared/interfaces';

@Component({
  selector: 'movies-list',
  template: `
    <div class="movies">
      <div *ngFor="let movie of movies">
        <movie-overview [movie]="movie"></movie-overview>
      </div>
    </div>
  `,
  styleUrls: [ './movies-list.component.sass' ]
})
export class MoviesListComponent {
  @Input() movies: IMovie[];
}