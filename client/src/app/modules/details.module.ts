import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from '../components/details/movie-details.component';

import { MovieService } from '../services/movie.service';

const detailsRoutes: Routes = [
  { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(detailsRoutes)
  ],
  declarations: [ MovieDetailsComponent ],
  providers: [ MovieService ]
})
export class DetailsModule { }