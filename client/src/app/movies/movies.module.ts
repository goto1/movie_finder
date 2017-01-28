import { NgModule }                   from '@angular/core';
import { CommonModule, Location }     from '@angular/common';
import { HttpModule }                 from '@angular/http';
import { 
  FormsModule, ReactiveFormsModule }  from '@angular/forms';

// Routing
import { MoviesRoutingModule }        from './movies-routing.module';

// Components
import { MoviesComponent }            from './movies.component';
import { DiscoverComponent }          from './discover/discover.component';
import { NowPlayingComponent }        from './discover/now-playing.component';
import { PopularComponent }           from './discover/popular.component';
import { TopRatedComponent }          from './discover/top-rated.component';
import { UpcomingComponent }          from './discover/upcoming.component';
import { SearchComponent }            from './search/search.component';
import { SearchResultsComponent }     from './search/search-results.component';
import { DetailsComponent }           from './details/details.component';

// Services
import { PopularService }             from './services/discover/popular.service';
import { NowPlayingService }          from './services/discover/now-playing.service';
import { TopRatedService }            from './services/discover/top-rated.service';
import { UpcomingService }            from './services/discover/upcoming.service';
import { SearchService }              from './services/search/search.service';
import { DetailsService }             from './services/details/details.service';

// Pipes
import { MovieTitleShortPipe }        from './pipes/movie-title-short.pipe';
import { SafeUrlPipe }                from './pipes/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    DiscoverComponent,
    NowPlayingComponent,
    PopularComponent,
    TopRatedComponent,
    UpcomingComponent,
    SearchComponent,
    SearchResultsComponent,
    DetailsComponent,

    // Pipes
    MovieTitleShortPipe,
    SafeUrlPipe,
  ],
  providers: [
    PopularService,
    NowPlayingService,
    TopRatedService,
    UpcomingService,
    SearchService,
    DetailsService,
    
    Location,
  ]
})
export class MoviesModule { }