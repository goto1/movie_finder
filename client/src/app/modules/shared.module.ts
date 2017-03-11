import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';

import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';

@NgModule({
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    SanitizeUrlPipe
  ],
  imports: [ CommonModule ],
  providers: [],
  exports: [
    MovieItemComponent,
    MovieListComponent,
    SanitizeUrlPipe,
    CommonModule
  ]
})
export class SharedModule { }