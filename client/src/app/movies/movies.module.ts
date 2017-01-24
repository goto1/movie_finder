import { NgModule }                   from '@angular/core';
import { CommonModule, Location }     from '@angular/common';
import { HttpModule }                 from '@angular/http';
import { FormsModule }                from '@angular/forms';

// Routing
import { MoviesRoutingModule }        from './movies-routing.module';

// Components
import { MoviesComponent }            from './movies.component';
import { DiscoverComponent }          from './discover/discover.component';
import { NowPlayingComponent }        from './discover/now-playing.component';
import { PopularComponent }           from './discover/popular.component';
import { TopRatedComponent }          from './discover/top-rated.component';
import { UpcomingComponent }          from './discover/upcoming.component';
import { MoviesSearchComponent }      from './movies-search/movies-search.component';
import { SearchResultsComponent }     from './movies-search/search-results.component';
import { MovieDetailsComponent }      from './movie-details/movie-details.component';

// Services
import { PopularService }             from './services/popular.service';
import { NowPlayingService }          from './services/now-playing.service';
import { TopRatedService }            from './services/top-rated.service';
import { UpcomingService }            from './services/upcoming.service';
import { SearchMoviesService }        from './services/search-movies.service';
import { MovieDetailsService }        from './services/movie-details.service';

// Pipes
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
    DiscoverComponent,
    NowPlayingComponent,
    PopularComponent,
    TopRatedComponent,
    UpcomingComponent,
    MoviesSearchComponent,
    SearchResultsComponent,
    MovieDetailsComponent,

    // Pipes
    MovieTitleShortPipe,
    SafeUrlPipe
  ],
  providers: [
    PopularService,
    NowPlayingService,
    TopRatedService,
    UpcomingService,
    SearchMoviesService,
    MovieDetailsService,
    
    Location,
  ]
})
export class MoviesModule { }