import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MovieDetailsService } from '../services/movie-details.service';

import { Movie } from '../models/movie';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.sass' ]
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie;
  public similarMovies;

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
        movie => { 
          this.movie = movie;
          this.extractSimilarMovies(this.movie);
          console.log(this.similarMovies);
          console.log(this.movie); 
        },
        error => console.error(error)
      );
  }

  private extractSimilarMovies(movie): void {
    let similarMovies = movie.similar.results;
    if (similarMovies.length > 6) {
      this.similarMovies = similarMovies.slice(0, 6);
    } else {
      this.similarMovies = similarMovies;
    }
  }

}