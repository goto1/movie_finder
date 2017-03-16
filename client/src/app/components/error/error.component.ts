import { Component } from '@angular/core';

@Component({
  selector: 'error',
  template: `
    <div>
      <i class="fa fa-meh-o" aria-hidden="true"></i>
      <p>Something went wrong. Please try again.</p>
    </div>
  `,
  styleUrls: [ './error.component.sass' ]
})
export class ErrorComponent { }