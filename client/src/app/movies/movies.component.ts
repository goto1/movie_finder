import { Component }  from '@angular/core';

@Component({
  template: `
    <nav>
      <div class="nav-item">
        Discover <i class="fa fa-film" aria-hidden="true"></i>
      </div>
      <div class="nav-item">
        Search <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </nav>
    <movies-trending></movies-trending>
    <movies-search></movies-search>
  `,
  styleUrls: [ './movies.component.sass' ]
})
export class MoviesComponent { }