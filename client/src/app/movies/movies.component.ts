import { Component, OnInit }  from '@angular/core';

import { Movie } from './models/movie'
import { SearchMoviesService } from './services/search-movies.service';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.sass' ]
})
export class MoviesComponent implements OnInit { 
  public movies: Movie[];
  public searchQuery: string;

  constructor(private searchMoviesService: SearchMoviesService) { }

  ngOnInit(): void {
    this.searchQuery = 'The Hangover';
    this.searchMovie(this.searchQuery);
  }

  public searchMovie(title: string): void {
    if (title) {
      this.searchQuery = title;
      this.searchMoviesService.searchMovie(title).subscribe(
        movies => this.movies = movies,
        error => console.error(<any>error)
      );
    }
  }
}