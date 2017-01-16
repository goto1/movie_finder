import { BrowserModule }          from '@angular/platform-browser';
import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';

import { MoviesModule }           from './movies/movies.module';
import { PageNotFoundComponent }  from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

    MoviesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
