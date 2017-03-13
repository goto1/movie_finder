import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../modules/shared.module';
import { MovieService } from '../services/movie.service';
import { MovieDetailsComponent } from '../components/details/movie-details.component';

const detailsRoutes: Routes = [
  { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(detailsRoutes)
  ],
  declarations: [ MovieDetailsComponent ],
  providers: [ MovieService ]
})
export class DetailsModule { }