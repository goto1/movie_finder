import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';

import { IMovieOverview } from '../../shared/interfaces';

@Component({
  template: `
    <div>
      <h1>Movies You Might Like...</h1>
      <movie-list [movies]="movies"></movie-list>
    </div>
  `,
  styleUrls: [ './recommended-movies.component.sass' ]
})
export class RecommendedMoviesComponent implements OnInit {
  movies: IMovieOverview[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('user_info'));

    this.movieService.getMoviesWithGenres(userInfo.genreIds)
      .subscribe(
        res => { this.movies = res.movies },
        err => console.error(err)
      );
  }
}