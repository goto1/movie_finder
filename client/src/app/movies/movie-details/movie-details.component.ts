import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MovieDetailsService } from '../services/movie-details.service';

import { DetailedMovie }  from '../models/detailed-movie';
import { Movie }          from '../models/movie';
import { Genre }          from '../models/genre';
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
        movie => { 
          this.movie = movie;
          this.extractSimilarMovies(this.movie);
          this.extractTrailerUrl(this.movie);
          this.extractPosterPath(this.movie);
        },
        error => console.error(error)
      );
  }

  private extractSimilarMovies(movie): void {
    let similarMovies: Movie[] = [];
    const numberOfMovies: number = 6;

    if (movie.similar.results) {
      if (movie.similar.results.length > numberOfMovies) {
        similarMovies = movie.similar.results.slice(0, numberOfMovies);
      } else {
        similarMovies = movie.similar.results;
      }
    }
    this.movie.similar = similarMovies;
  }

  private extractTrailerUrl(movie): void {
    let trailerUrl: string = '';
    if (movie.videos.results[0]) {
      trailerUrl = `https://www.youtube.com/embed/${movie.videos.results[0].key}`;
    }
    this.movie.trailer = trailerUrl;
  }

  private extractPosterPath(movie): void {
    let posterUrl: string = '';
    if (movie.poster_path) {
      posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    }
    this.movie.poster_path = posterUrl;
  }

}