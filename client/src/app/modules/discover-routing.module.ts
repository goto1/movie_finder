import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscoverMoviesComponent } from '../components/discover/discover-movies.component';
import { NowPlayingMoviesComponent } from '../components/discover/now-playing-movies.component';
import { PopularMoviesComponent } from '../components/discover/popular-movies.component';
import { TopRatedMoviesComponent } from '../components/discover/top-rated-movies.component';
import { UpcomingMoviesComponent } from '../components/discover/upcoming-movies.component';

const discoverMoviesRoutes: Routes = [
  {
    path: 'discover',
    component: DiscoverMoviesComponent,
    children: [
      { path: 'now_playing', component: NowPlayingMoviesComponent },
      { path: 'popular', component: PopularMoviesComponent },
      { path: 'top_rated', component: TopRatedMoviesComponent },
      { path: 'upcoming', component: UpcomingMoviesComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(discoverMoviesRoutes) ],
  exports: [ RouterModule ]
})
export class DiscoverRoutingModule { }