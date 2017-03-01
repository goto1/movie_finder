import { Component, Input } from '@angular/core';

import { IMovie } from '../../shared/interfaces';

@Component({
  selector: 'movie-overview',
  template: `
    <div class="movie-overview" [routerLink]="['/movie', movie.id]">
      <div class="movie-poster">
        <img *ngIf="movie.poster_path" [src]="movie.poster_path | safeUrl"
          alt="movie poster">
        <!-- If no poster, display a placeholder -->
        <div class="no-poster" *ngIf="!movie.poster_path">
          <i class="fa fa-file-video-o" aria-hidden="true"></i>
        </div>
      </div>
      <div class="movie-title">
        <span>{{ movie.title }}</span>
      </div>
      <div *ngIf="movie.vote_average" class="movie-rating">
        {{ movie.vote_average }} <i class="fa fa-star-o" aria-hidden="true"></i>
      </div>
    </div>
  `,
  styleUrls: [ './movie-overview.component.sass' ]
})
export class MovieOverviewComponent {
  @Input() movie: IMovie;
}