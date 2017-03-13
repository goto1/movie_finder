import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../../services/movie.service';
import { IMovieDetailed } from '../../shared/interfaces';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.sass' ]
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovieDetailed;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => { 
        this.fetchMovieDetails(+params['id']);
      },
      err => console.error(err)
    );
  }

  goBack(): void {
    this.location.back();
  }

  private fetchMovieDetails(id: number) {
    this.movieService.getMovieDetails(id)
      .subscribe(
        response => this.movie = response,
        err => console.log(err)
      );
  }
}

