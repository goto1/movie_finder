import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DetailsComponent }         from './details/details.component';
import { DiscoverComponent }        from './discover/discover.component';
import { SearchComponent }          from './search/search.component';
import { MoviesComponent }          from './movies.component';

import { NowPlayingComponent } from './discover/now-playing.component';
import { PopularComponent } from './discover/popular.component';
import { TopRatedComponent } from './discover/top-rated.component';
import { UpcomingComponent } from './discover/upcoming.component';

const moviesRoutes: Routes = [
  { path: 'movie/:id', component: DetailsComponent },
  {
    path: '',
    component: MoviesComponent,
    children: [
      { 
        path: 'movies', 
        component: DiscoverComponent,
        children: [
          { path: 'now_playing', component: NowPlayingComponent },
          { path: 'popular', component: PopularComponent },
          { path: 'top_rated', component: TopRatedComponent },
          { path: 'upcoming', component: UpcomingComponent }
        ] 
      },
      { path: 'search', component: SearchComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(moviesRoutes) ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule { }