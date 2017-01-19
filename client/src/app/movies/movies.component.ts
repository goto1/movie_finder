import { Component }  from '@angular/core';

@Component({
  template: `
    <nav>
      <a routerLink="/movies" routerLinkActive="active">
        <div class="nav-item">
          Discover <i class="fa fa-film" aria-hidden="true"></i>
        </div>
      </a>
      <a routerLink="/search" routerLinkActive="active">
        <div class="nav-item">
          Search <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './movies.component.sass' ]
})
export class MoviesComponent { }