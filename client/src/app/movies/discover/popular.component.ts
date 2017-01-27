import { Component, OnInit }  from '@angular/core';

import { IMovie }             from '../../shared/interfaces';
import { PopularService }     from '../services/discover/popular.service';

@Component({
  selector: 'popular',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class PopularComponent implements OnInit {
  public movies: IMovie[];
  public error: boolean;

  constructor(private popularService: PopularService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public nextPage(): void {
    this.popularService.pagination.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.popularService.pagination.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.popularService.pagination.hasPrevious();
  }

  public hasNext(): boolean {
    return this.popularService.pagination.hasNext();
  }

  private getMovies(): void {
    this.popularService.getPopular()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = error
      );
  }
}