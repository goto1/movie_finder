import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { DetailsService }         from '../services/details/details.service';
import { IDetailedMovie }         from '../../shared/interfaces';

@Component({
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.sass' ]
})
export class DetailsComponent implements OnInit {
  public movie: IDetailedMovie;

  constructor( 
    private route: ActivatedRoute,
    private ds: DetailsService,
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

  private getMovie(id: number): void {
    this.ds.getDetails(id)
      .subscribe(
        movie => this.movie = movie,
        error => console.error(error)
      );
  }
}