import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { AuthenticationService }  from '../../user/services/authentication.service';
import { UserService }            from '../../user/services/user.service';
import { DetailsService }         from '../services/details/details.service';
import { IDetailedMovie }         from '../../shared/interfaces';

@Component({
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.sass' ]
})
export class DetailsComponent implements OnInit {
  movie: IDetailedMovie;
  isFavorite: boolean;

  constructor( 
    private route: ActivatedRoute,
    private ds: DetailsService,
    private auth: AuthenticationService,
    private us: UserService,
    private location: Location ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.getMovie(+params['id']),
      error => console.error(error)
    );

    this.us.getMovies()
      .subscribe(
        res => res,
        err => err
      );
  }

  goBack(): void {
    this.location.back();
  }

  toggleFavorite(id: number): void {
    this.us.toggleFavoriteMovie(id, this.movie.favorite)
      .subscribe(
        res => { 
          console.log(res);
          this.us.getMovies().subscribe(res => res);
        },
        err => console.log(err)
      );

    this.movie.favorite = this.movie.favorite ? false : true;
  }

  private getMovie(id: number): void {
    this.ds.getDetails(id)
      .subscribe(
        movie => {
          this.movie = movie;

          const favorites = JSON.parse(localStorage.getItem('favorite'));
          const isCurrentMovieFavorite = favorites.find(id => id === this.movie.id);

          if (isCurrentMovieFavorite) {
            this.movie.favorite = true;
          }
        },
        err => console.error(err)
      );
  }
}