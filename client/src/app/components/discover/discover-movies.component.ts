import { Component } from '@angular/core';

@Component({
  template: `
    <div class="categories">
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/now_playing/"
        routerLinkActive="btn-default-active">Now Playing</button>
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/popular/"
        routerLinkActive="btn-default-active">Popular</button>
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/top_rated/"
        routerLinkActive="btn-default-active">Top Rated</button>
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/upcoming/"
        routerLinkActive="btn-default-active">Upcoming</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './discover-movies.component.sass' ]
})
export class DiscoverMoviesComponent { }