import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DiscoverRoutingModule } from './discover-routing.module';

import { DiscoverMoviesComponent } from '../components/discover/discover-movies.component';
import { NowPlayingMoviesComponent } from '../components/discover/now-playing-movies.component';
import { PopularMoviesComponent } from '../components/discover/popular-movies.component';
import { TopRatedMoviesComponent } from '../components/discover/top-rated-movies.component';
import { UpcomingMoviesComponent } from '../components/discover/upcoming-movies.component';
import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { MovieService } from '../services/movie.service';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DiscoverRoutingModule
  ],
  declarations: [ 
    DiscoverMoviesComponent,
    NowPlayingMoviesComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent,
    MovieItemComponent,
    MovieListComponent,
    SanitizeUrlPipe
  ],
  providers: [
    MovieService,
    Location
  ]
})
export class DiscoverModule { }