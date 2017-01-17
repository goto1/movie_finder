import { Component, OnInit }              from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieDetailsService } from '../services/movie-details.service';

import { Movie } from '../models/movie';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.sass' ]
})
export class MovieDetailsComponent implements OnInit {
  private movieId: number;
  public movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieDetailsService: MovieDetailsService ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap( (params: Params) => this.movieDetailsService.getDetails(+params['id']))
      .subscribe(
        movie => this.movie = movie,
        error => console.error(error)
      );
  }
}