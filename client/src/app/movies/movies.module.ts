import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpModule }               from '@angular/http';

import { MoviesComponent }          from './movies.component';
import { TrendingMoviesComponent }  from './trending-movies/trending-movies.component';
import { MoviesRoutingModule }      from './movies-routing.module';
import { TrendingMoviesService }    from './trending-movies/trending-movies.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    TrendingMoviesComponent
  ],
  providers: [
    TrendingMoviesService
  ]
})
export class MoviesModule { }