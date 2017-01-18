import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MovieDetailsService }    from '../services/movie-details.service';

import { DetailedMovie }          from '../models/detailed-movie';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.sass' ]
})
export class MovieDetailsComponent implements OnInit {
  public movie: DetailedMovie;

  constructor(
    private route: ActivatedRoute,
    private movieDetailsService: MovieDetailsService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.getMovieDetails(+params['id']),
      error => console.error(error)
    );
  }

  private getMovieDetails(id: number): void {
    this.movieDetailsService.getDetails(id)
      .subscribe(
        // movie => { this.movie = movie; console.log(this.movie); },
        movie => this.movie = movie,
        error => console.error(error)
      );
  }

}