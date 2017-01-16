import { Component, OnInit }  from '@angular/core';

import { MoviesService }      from './movies.service';
import { Movie }              from './trending-movies/movie';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.sass' ]
})
export class MoviesComponent implements OnInit { 
  public movies: Movie[];
  public errorMessage: string;
  public searchQuery: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.searchQuery = 'The Hangover';
    this.searchMovie(this.searchQuery);
  }

  public searchMovie(title: string): void {
    if (title) {
      this.searchQuery = title;
      this.moviesService.searchForMovie(title).subscribe(
        movies => this.movies = movies,
        error => this.errorMessage = <any>error
      );
    }
  }
}