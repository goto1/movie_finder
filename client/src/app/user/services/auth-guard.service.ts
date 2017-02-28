import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private as: AuthenticationService, 
    private router: Router) { }
  
  canActivate(): boolean {
    if (!this.as.loggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}