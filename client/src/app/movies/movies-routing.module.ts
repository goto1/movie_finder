import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DetailsComponent }         from './details/details.component';
import { DiscoverComponent }        from './discover/discover.component';
import { SearchComponent }          from './search/search.component';
import { MoviesComponent }          from './movies.component';

const moviesRoutes: Routes = [
  { path: 'movie/:id', component: DetailsComponent },
  {
    path: '',
    component: MoviesComponent,
    children: [
      { path: 'movies', component: DiscoverComponent },
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