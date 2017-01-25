import { Component, OnInit }  from '@angular/core';

import { UpcomingService }    from '../services/discover/upcoming.service';
import { Movie }              from '../models/movie';

@Component({
  selector: 'upcoming',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class UpcomingComponent implements OnInit {
  public movies: Movie[];
  public error: boolean;

  constructor(private upcomingService: UpcomingService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.upcomingService.getUpcoming()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = true
      )
  }

  public nextPage(): void {
    this.upcomingService.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.upcomingService.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.upcomingService.hasPrevious();
  }

  public hasNext(): boolean {
    return this.upcomingService.hasNext();
  }
}