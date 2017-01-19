import { Component }  from '@angular/core';

@Component({
  template: `
    <nav>
      <a routerLink="/movies" routerLinkActive="active">
        Discover <i class="fa fa-film" aria-hidden="true"></i>
      </a>
      <a routerLink="/search" routerLinkActive="active">
        Search <i class="fa fa-search" aria-hidden="true"></i>
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './movies.component.sass' ]
})
export class MoviesComponent { }