import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';

import { MoviesRoutingModule }      from './movies-routing.module';

import { MoviesComponent }          from './movies.component';
import { MoviesTrendingComponent }  from './movies-trending/movies-trending.component';
import { MoviesSearchComponent }    from './movies-search/movies-search.component';
import { MovieDetailsComponent }    from './movie-details/movie-details.component';

import { TrendingMoviesService }    from './services/trending-movies.service';
import { SearchMoviesService }      from './services/search-movies.service';
import { MovieDetailsService }      from './services/movie-details.service';

import { MovieTitleShortPipe }      from './pipes/movie-title-short.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    MoviesTrendingComponent,
    MoviesSearchComponent,
    MovieDetailsComponent,

    MovieTitleShortPipe
  ],
  providers: [
    TrendingMoviesService,
    SearchMoviesService,
    MovieDetailsService
  ]
})
export class MoviesModule { }