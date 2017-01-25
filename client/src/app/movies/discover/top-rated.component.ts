import { Component, OnInit }  from '@angular/core';

import { TopRatedService }    from '../services/discover/top-rated.service';
import { Movie }              from '../models/movie';

@Component({
  selector: 'top-rated',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class TopRatedComponent implements OnInit {
  public movies: Movie[];
  public error: boolean;

  constructor(private topRatedService: TopRatedService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.topRatedService.getTopRated()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = true
      )
  }

  public nextPage(): void {
    this.topRatedService.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.topRatedService.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.topRatedService.hasPrevious();
  }

  public hasNext(): boolean {
    return this.topRatedService.hasNext();
  }
}