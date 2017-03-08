import { Component, Input } from '@angular/core';
import { IMovieOverview } from '../../shared/interfaces';

@Component({
  selector: 'movie-list',
  template: `
    <div class="movie-list">
      <div *ngFor="let movie of movies">
        <movie-item [movie]="movie"></movie-item>
      </div>
    </div>
  `,
  styleUrls: [ './movie-list.component.sass' ]
})
export class MovieListComponent {
  @Input() movies: IMovieOverview[];
}