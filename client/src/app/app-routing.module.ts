import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';

// import { TestComponent } from './components/test.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/discover/now_playing', pathMatch: 'full' },
  // { path: 'test', component: TestComponent } // DELETE AFTER DONE TESTING!!!
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }