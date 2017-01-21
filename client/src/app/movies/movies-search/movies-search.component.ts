import { Component, OnInit }    from '@angular/core';

import { Movie }                from '../models/movie';
import { SearchMoviesService }  from '../services/search-movies.service';

interface SearchMovieInput {
  title: string;
}

@Component({
  selector: 'movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: [ './movies-search.component.sass' ]
})
export class MoviesSearchComponent implements OnInit {
  public search: SearchMovieInput;
  public movies: Movie[];

  constructor(private searchService: SearchMoviesService) { }

  ngOnInit(): void {
    this.search = { title: '' };
    this.searchFor(this.search.title);
  }

  public searchFor(title: string): void {
    if (title) {
      this.search.title = title;
      this.searchService.searchMovie(this.search.title)
        .subscribe(
          movies => this.movies = movies,
          error => console.error(error)
        );
    }
  }
}