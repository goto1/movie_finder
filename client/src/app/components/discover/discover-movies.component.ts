import { Component } from '@angular/core';

@Component({
  template: `
    <div class="categories">
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/now_playing/1"
        routerLinkActive="btn-active">Now Playing</button>
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/popular/1"
        routerLinkActive="btn-active">Popular</button>
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/top_rated/1"
        routerLinkActive="btn-active">Top Rated</button>
      <button
        type="button"
        class="btn btn-default"
        routerLink="/discover/upcoming/1"
        routerLinkActive="btn-active">Upcoming</button>
    </div>
    <router-outlet></router-outlet>
  `
})
export class DiscoverMoviesComponent { }