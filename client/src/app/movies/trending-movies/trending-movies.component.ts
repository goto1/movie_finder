import { Component, OnInit }      from '@angular/core';

import { Movie }                  from '../models/movie';
import { TrendingMoviesService }  from '../services/trending-movies.service';

@Component({
  selector: 'trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: [ './trending-movies.component.sass' ]
})
export class TrendingMoviesComponent implements OnInit {
  public allMovies;
  public showMovies: Movie[];
  private page: number = 0;
  
  constructor(private trendingMoviesService: TrendingMoviesService) { }

  ngOnInit(): void {
    this.trendingMoviesService.getMovies().subscribe(
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
    console.log(this.page, this.allMovies.length);
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