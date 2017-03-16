import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Utils } from '../../shared/utils';
import { IMovieDetailed } from '../../shared/interfaces';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.sass' ]
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovieDetailed;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private authService: AuthService,
    private userService: UserService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => { 
        this.fetchMovieDetails(+params['id']);
        
        if (this.authService.loggedIn()) {
          this.userService.getMovies().subscribe();
        }

        this.error = false;
      },
      err => this.error = true
    );
  }

  goBack(): void {
    this.location.back();
  }

  toggleFavorite(): void {
    this.movie.isFavorite = !this.movie.isFavorite;
    this.userService.toggleFavoriteMovie(this.movie).subscribe();
  }

  private fetchMovieDetails(id: number) {
    this.movieService.getMovieDetails(id)
      .subscribe(
        res => {
          this.movie = res;

          if (this.authService.loggedIn()) {
            this.movie.isFavorite = Utils.isMovieFavorite(this.movie.id);
          }
        },
        err => this.error = true
      );
  }
}

