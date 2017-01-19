import { Component, OnInit }      from '@angular/core';

import { Movie }                  from '../models/movie';
import { DiscoverMoviesService }  from '../services/discover-movies.service';

@Component({
  templateUrl: './movies-discover.component.html',
  styleUrls: [ './movies-discover.component.sass' ]
})
export class MoviesDiscoverComponent implements OnInit {
  public allMovies;
  public showMovies: Movie[];
  private page: number = 0;
  
  constructor(private discoverMoviesService: DiscoverMoviesService) { }

  ngOnInit(): void {
    this.discoverMoviesService.getMovies().subscribe(
      movies => {
        this.allMovies = movies;
        this.showMovies = this.allMovies[this.page];
      },
      error => console.error(error)
    );
  }

  public nextPage(): void {
    if (this.page < this.allMovies.length - 1) {
      this.page++;
    }
    this.getMoviesFromPage(this.page);
  }

  public prevPage(): void {
    if (this.page > 0) {
      this.page--;
    }
    this.getMoviesFromPage(this.page);
  }

  private getMoviesFromPage(number: number): void {
    this.showMovies = this.allMovies[number];
  }
}