import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieService } from '../services/movie.service';
import { SharedModule } from '../modules/shared.module';
import { SearchMoviesComponent } from '../components/search/search-movies.component';

const searchRoutes: Routes = [
  { path: 'search', component: SearchMoviesComponent }
];

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    RouterModule.forRoot(searchRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchMoviesComponent,
  ],
  providers: [ MovieService ]
})
export class SearchModule { }