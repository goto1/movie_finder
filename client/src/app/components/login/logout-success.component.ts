import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  template: `
    <div>
      <h1>You have successfully logged out!</h1>
      <button type="button" class="btn btn-default" [routerLink]="'/'">
        Home <i class="fa fa-home" aria-hidden="true"></i>
      </button>
    </div>
  `,
  styleUrls: [ './logout-success.component.sass' ]
})
export class LogoutSuccessComponent implements OnInit { 
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout();
  }
} 