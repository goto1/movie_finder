import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared.module';
import { RecommendedMoviesComponent } from '../components/recommended/recommended-movies.component';

const recommendedRoutes: Routes = [
  { path: 'recommended', component: RecommendedMoviesComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(recommendedRoutes)
  ],
  declarations: [ RecommendedMoviesComponent ],
  providers: [] 
})
export class RecommendedModule { }