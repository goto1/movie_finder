import { Component }  from '@angular/core';

import '../shared/rxjs-operators';

@Component({
  template: `
    <nav>
      <button class="btn btn-nav" routerLink="/movies" routerLinkActive="active">
        Discover <i class="fa fa-film" aria-hidden="true"></i>
      </button>
      <button class="btn btn-nav" routerLink="/search" routerLinkActive="active">
        Search <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './movies.component.sass' ]
})
export class MoviesComponent { }