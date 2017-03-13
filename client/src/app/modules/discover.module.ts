import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DiscoverRoutingModule } from './discover-routing.module';
import { SharedModule } from './shared.module';

import { DiscoverMoviesComponent } from '../components/discover/discover-movies.component';
import { NowPlayingMoviesComponent } from '../components/discover/now-playing-movies.component';
import { PopularMoviesComponent } from '../components/discover/popular-movies.component';
import { TopRatedMoviesComponent } from '../components/discover/top-rated-movies.component';
import { UpcomingMoviesComponent } from '../components/discover/upcoming-movies.component';

import { MovieService } from '../services/movie.service';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    DiscoverRoutingModule
  ],
  declarations: [ 
    DiscoverMoviesComponent,
    NowPlayingMoviesComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent
  ],
  providers: [ MovieService ]
})
export class DiscoverModule { }