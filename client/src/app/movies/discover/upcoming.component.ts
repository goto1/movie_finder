import { Component, OnInit }  from '@angular/core';

import { IMovie }             from '../../shared/interfaces';
import { UpcomingService }    from '../services/discover/upcoming.service';

@Component({
  selector: 'upcoming',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class UpcomingComponent implements OnInit {
  public movies: IMovie[];
  public error: boolean;

  constructor(private upcomingService: UpcomingService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public nextPage(): void {
    this.upcomingService.pagination.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.upcomingService.pagination.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.upcomingService.pagination.hasPrevious();
  }

  public hasNext(): boolean {
    return this.upcomingService.pagination.hasNext();
  }

  private getMovies(): void {
    this.upcomingService.getUpcoming()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = true
      )
  }
}