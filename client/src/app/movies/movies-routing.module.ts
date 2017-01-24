import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { MoviesComponent }          from './movies.component';
import { MoviesDiscoverComponent }  from './movies-discover/movies-discover.component';
import { MovieDetailsComponent }    from './movie-details/movie-details.component';
import { MoviesSearchComponent }    from './movies-search/movies-search.component';

import { DiscoverComponent } from './discover/discover.component';

const moviesRoutes: Routes = [
  { path: 'movie/:id', component: MovieDetailsComponent },
  {
    path: '',
    component: MoviesComponent,
    children: [
      { path: 'movies', component: DiscoverComponent },
      { path: 'search', component: MoviesSearchComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(moviesRoutes) ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule { }