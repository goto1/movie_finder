import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { MoviesComponent }          from './movies.component';
import { MoviesTrendingComponent }  from './movies-trending/movies-trending.component';
import { MovieDetailsComponent }    from './movie-details/movie-details.component';
import { MoviesSearchComponent }    from './movies-search/movies-search.component';

const moviesRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      { path: 'movies', component: MoviesTrendingComponent },
      { path: 'movie/:id', component: MovieDetailsComponent },
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