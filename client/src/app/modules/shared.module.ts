import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { ExtractYearPipe } from '../pipes/extract-year.pipe';

@NgModule({
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    SanitizeUrlPipe,
    SafeUrlPipe,
    ExtractYearPipe
  ],
  imports: [ CommonModule ],
  providers: [],
  exports: [
    CommonModule,
    MovieItemComponent,
    MovieListComponent,
    SanitizeUrlPipe,
    SafeUrlPipe,
    ExtractYearPipe
  ]
})
export class SharedModule { }