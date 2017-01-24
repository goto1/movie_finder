import { Component, OnInit }  from '@angular/core';

import { PopularService }     from '../services/popular.service';
import { Movie }              from '../models/movie';

@Component({
  selector: 'popular',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class PopularComponent implements OnInit {
  public movies: Movie[];
  public error: boolean;

  constructor(private popularService: PopularService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.popularService.getPopular()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = error
      );
  }

  public nextPage(): void {
    this.popularService.nextPage();
    this.getMovies();
  }

  public previousPAge(): void {
    this.popularService.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.popularService.hasPrevious();
  }

  public hasNext(): boolean {
    return this.popularService.hasNext();
  }
}