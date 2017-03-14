import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { DiscoverModule } from './modules/discover.module';
import { SearchModule } from './modules/search.module';
import { DetailsModule } from './modules/details.module';
import { SharedModule } from './modules/shared.module';
import { UserModule } from './modules/user.module';
import { RecommendedModule } from './modules/recommended.module';

import { HerokuService } from './services/heroku.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

    UserModule,
    DiscoverModule,
    SearchModule,
    DetailsModule,
    RecommendedModule
  ],
  providers: [
    HerokuService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
