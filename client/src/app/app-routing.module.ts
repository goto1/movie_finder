import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/movies/now_playing', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }