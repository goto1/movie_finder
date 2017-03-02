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
  }

  goBack(): void {
    this.location.back();
  }

  toggleFavorite(id: number): void {

    this.us.toggleFavoriteMovie(id, this.isFavorite)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );

    this.isFavorite = this.isFavorite ? false : true;
  }

  private getMovie(id: number): void {
    this.ds.getDetails(id)
      .subscribe(
        movie => this.movie = movie,
        error => console.error(error)
      );
  }
}