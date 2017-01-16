import { Component, OnInit }    from '@angular/core';

import { Movie }                from '../models/movie';
import { SearchMoviesService }  from '../services/search-movies.service';

@Component({
  selector: 'movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: [ './movies-search.component.sass' ]
})
export class MoviesSearchComponent implements OnInit {
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