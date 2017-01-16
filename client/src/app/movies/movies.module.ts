import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpModule, JsonpModule }  from '@angular/http';
import { FormsModule }              from '@angular/forms';

import { MoviesComponent }          from './movies.component';
import { TrendingMoviesComponent }  from './trending-movies/trending-movies.component';
import { MoviesRoutingModule }      from './movies-routing.module';

import { TrendingMoviesService }    from './services/trending-movies.service';
import { SearchMoviesService }      from './services/search-movies.service';

import { MovieTitlePipe }           from './trending-movies/movie-title.pipe';
import { MovieTitleSearchPipe }     from './pipes/movie-title-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    TrendingMoviesComponent,

    MovieTitlePipe,
    MovieTitleSearchPipe
  ],
  providers: [
    TrendingMoviesService,
    SearchMoviesService
  ]
})
export class MoviesModule { }