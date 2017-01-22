import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { HttpModule }                 from '@angular/http';
import { FormsModule }                from '@angular/forms';

import { MoviesRoutingModule }        from './movies-routing.module';

import { MoviesComponent }            from './movies.component';
import { MoviesDiscoverComponent }    from './movies-discover/movies-discover.component';
import { NowPlayingMoviesComponent }  from './movies-discover/now-playing-movies.component';
import { PopularMoviesComponent }     from './movies-discover/popular-movies.component';
import { TopRatedMoviesComponent }    from './movies-discover/top-rated-movies.component';
import { UpcomingMoviesComponent }    from './movies-discover/upcoming-movies.component';
import { MoviesSearchComponent }      from './movies-search/movies-search.component';
import { SearchResultsComponent }     from './movies-search/search-results.component';
import { MovieDetailsComponent }      from './movie-details/movie-details.component';

import { DiscoverMoviesService }      from './services/discover-movies.service';
import { SearchMoviesService }        from './services/search-movies.service';
import { MovieDetailsService }        from './services/movie-details.service';

import { MovieTitleShortPipe }        from './pipes/movie-title-short.pipe';
import { SafeUrlPipe }                from './pipes/safe-url.pipe';

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
    NowPlayingMoviesComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent,
    MoviesSearchComponent,
    SearchResultsComponent,
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