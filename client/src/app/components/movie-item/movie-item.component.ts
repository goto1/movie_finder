import { Component, Input } from '@angular/core';
import { IMovieOverview } from '../../shared/interfaces';

@Component({
  selector: 'movie-item',
  template: `
    <div class="movie" [routerLink]="['/movie', movie.id]">
      <div class="poster">
        <img *ngIf="movie.poster_path" [src]="movie.poster_path | sanitizeUrl"
          alt="movie poster" />
        <!-- If no poster, display a placeholder -->
        <div class="placeholder" *ngIf="!movie.poster_path">
          <i class="fa fa-file-video-o" aria-hidden="true"></i>
        </div>
      </div>
      <div class="title">{{movie.title}}</div>
      <div *ngIf="movie.vote_average" class="rating">
        {{movie.vote_average}} <i class="fa fa-star-o" aria-hidden="true"></i>
      </div>
    </div>
  `,
  styleUrls: [ './movie-item.component.sass' ]
})
export class MovieItemComponent {
  @Input() movie: IMovieOverview;
}

