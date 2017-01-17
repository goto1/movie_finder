import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { MoviesComponent }        from './movies.component';
import { MovieDetailsComponent }  from './movie-details/movie-details.component';

const moviesRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(moviesRoutes) ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule { }