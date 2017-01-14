import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <div class="logo header-item">MOVIEJO</div>
      <nav class="header-item">
        <button class="nav-item" *ngIf="!userLoggedIn">
          Login <i class="fa fa-user" aria-hidden="true"></i>
        </button>
        <button class="nav-item" *ngIf="userLoggedIn">
          Logout <i class="fa fa-sign-out" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public userLoggedIn: boolean = false;
}
