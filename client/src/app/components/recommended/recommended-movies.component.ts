import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';

import { IMovieOverview } from '../../shared/interfaces';

@Component({
  template: `
    <div *ngIf="movies">
      <h1>Movies You Might Like...</h1>
      <movie-list [movies]="movies"></movie-list>
    </div>
    <div *ngIf="!movies" class="no-movies">
      No recommendations to show. You need to <i class="fa fa-heart" aria-hidden="true"></i> a few movies first
      before you're able to get recommendations.
    </div>
  `,
  styleUrls: [ './recommended-movies.component.sass' ]
})
export class RecommendedMoviesComponent implements OnInit {
  movies: IMovieOverview[];

  constructor(
    private movieService: MovieService,
    private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getMovies().subscribe();

    const userInfo = JSON.parse(localStorage.getItem('user_info'));

    if (userInfo.genreIds.length > 0) {
      this.movieService.getMoviesWithGenres(userInfo.genreIds)
        .subscribe(
          res => { this.movies = res.movies; console.log(res.movies); },
          err => console.error(err)
        );
    }
  }
}