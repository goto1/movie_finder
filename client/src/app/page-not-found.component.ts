import { Component } from '@angular/core';

@Component({
  template: `
    <div>
      <h2>The page you're looking <br />for doesn't exist.</h2>
      <div class="exclamation-triangle">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
      </div>
      <div class="back">
        <button>Home <i class="fa fa-home" aria-hidden="true"></i></button>
      </div>
    </div>
  `,
  styleUrls: [ './page-not-found.component.sass' ]
})
export class PageNotFoundComponent { }