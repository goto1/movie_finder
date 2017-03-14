import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  template: `
    <div>
      <h1>You have successfully logged in!</h1>
      <button type="button" class="btn btn-default" [routerLink]="'/'">
        Home <i class="fa fa-home" aria-hidden="true"></i>
      </button>
    </div>
  `,
  styleUrls: [ './login-success.component.sass' ]
})
export class LoginSuccessComponent implements OnInit { 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMovies().subscribe();
  }
} 