// ng build --prod --base-href ./
import { Component }              from '@angular/core';
import { Router }                 from '@angular/router';
import { AuthenticationService }  from './user/services/authentication.service';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <div class="logo header-item" [routerLink]="'/'">MOVIEJO</div>
      <nav class="header-item">
        <button class="btn btn-default" *ngIf="!auth.loggedIn()" [routerLink]="'/login'">
          Login
          <i class="fa fa-user" aria-hidden="true"></i>
        </button>
        <button class="btn btn-default" *ngIf="auth.loggedIn()" (click)="logout()">
          Logout
          <i class="fa fa-sign-out" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.sass' ]
})
export class AppComponent {
  constructor(
    private auth: AuthenticationService,
    private router: Router ) { }

  logout(): void {
    this.auth.logout();
    // this.router.navigate(['/']);
  }
}
