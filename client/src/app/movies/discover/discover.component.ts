import { Component, OnInit }            from '@angular/core';

import { ICategory, ISelectedCategory } from '../../shared/interfaces';

@Component({
  template: `
    <nav>
      <button 
        type="button" 
        class="btn btn-default" 
        routerLink="/movies/now_playing" 
        routerLinkActive="btn-active">Now Playing</button>
      <button 
        type="button" 
        class="btn btn-default" 
        routerLink="/movies/popular" routerLinkActive="btn-active">Popular</button>
      <button 
        type="button" 
        class="btn btn-default" 
        routerLink="/movies/top_rated" routerLinkActive="btn-active">Top Rated</button>
      <button 
        type="button" 
        class="btn btn-default" 
        routerLink="/movies/upcoming" 
        routerLinkActive="btn-active">Upcoming</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './discover.component.sass' ]
})
export class DiscoverComponent implements OnInit {
  public selected: ISelectedCategory;
  private categories: ICategory[] = [
    { value: 1, name: 'Now Playing' },
    { value: 2, name: 'Popular' },
    { value: 3, name: 'Top Rated' },
    { value: 4, name: 'Upcoming'}
  ];
  
  ngOnInit(): void {
    this.selected = {
      category: this.categories[0]
    };
  }
}