import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';

import { MoviesRoutingModule }      from './movies-routing.module';

import { MoviesComponent }          from './movies.component';
import { MoviesDiscoverComponent }  from './movies-discover/movies-discover.component';
import { MoviesSearchComponent }    from './movies-search/movies-search.component';
import { MovieDetailsComponent }    from './movie-details/movie-details.component';

import { DiscoverMoviesService }    from './services/discover-movies.service';
import { SearchMoviesService }      from './services/search-movies.service';
import { MovieDetailsService }      from './services/movie-details.service';

import { MovieTitleShortPipe }      from './pipes/movie-title-short.pipe';
import { SafeUrlPipe }              from './pipes/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    MoviesDiscoverComponent,
    MoviesSearchComponent,
    MovieDetailsComponent,

    MovieTitleShortPipe,
    SafeUrlPipe
  ],
  providers: [
    DiscoverMoviesService,
    SearchMoviesService,
    MovieDetailsService
  ]
})
export class MoviesModule { }