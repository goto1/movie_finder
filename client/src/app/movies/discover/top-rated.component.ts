import { Component, OnInit }  from '@angular/core';

import { IMovie }             from '../../shared/interfaces';
import { TopRatedService }    from '../services/discover/top-rated.service';

@Component({
  selector: 'top-rated',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class TopRatedComponent implements OnInit {
  public movies: IMovie[];
  public error: boolean;

  constructor(private topRatedService: TopRatedService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public nextPage(): void {
    this.topRatedService.pagination.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.topRatedService.pagination.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.topRatedService.pagination.hasPrevious();
  }

  public hasNext(): boolean {
    return this.topRatedService.pagination.hasNext();
  }

  private getMovies(): void {
    this.topRatedService.getTopRated()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = true
      )
  }
}