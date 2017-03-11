// ng build --prod --base-href ./
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './user/services/authentication.service';
import { HerokuService } from './services/heroku.service';

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
    <nav class="main-nav">
      <button 
        class="btn btn-nav"
        routerLink="/discover" 
        routerLinkActive="btn-nav-active">
        Discover <i class="fa fa-film" aria-hidden="true"></i>
      </button>
      <button 
        class="btn btn-nav"
        routerLink="/search" 
        routerLinkActive="btn-nav-active">
        Search <i class="fa fa-search" aria-hidden="true"></i>
      </button>
      <button
        class="btn btn-nav"
        routerLink="/recommended"
        routerLinkActive="btn-nav-active"
        *ngIf="auth.loggedIn()">
        Recommended <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.sass' ]
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private herokuService: HerokuService ) { }

  ngOnInit(): void {
    this.herokuService.wakeUp().subscribe(
      result => console.log('Heroku is awake!'),
      err => console.error(err)
    );
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/logout/success']);
  }
}
