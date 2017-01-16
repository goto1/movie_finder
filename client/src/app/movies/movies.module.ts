import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpModule, JsonpModule }  from '@angular/http';
import { FormsModule }              from '@angular/forms';

import { MoviesRoutingModule }      from './movies-routing.module';

import { MoviesComponent }          from './movies.component';
import { MoviesTrendingComponent }  from './movies-trending/movies-trending.component';
import { MoviesSearchComponent }    from './movies-search/movies-search.component';

import { TrendingMoviesService }    from './services/trending-movies.service';
import { SearchMoviesService }      from './services/search-movies.service';

import { MovieTitleSearchPipe }     from './pipes/movie-title-search.pipe';
import { MovieTitleTrendingPipe }   from './pipes/movie-title-trending.pipe';

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
    MoviesTrendingComponent,
    MoviesSearchComponent,

    MovieTitleTrendingPipe,
    MovieTitleSearchPipe
  ],
  providers: [
    TrendingMoviesService,
    SearchMoviesService
  ]
})
export class MoviesModule { }