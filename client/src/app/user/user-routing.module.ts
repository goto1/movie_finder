import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { LoginComponent }         from './login/login.component';
import { RegisterComponent }      from './register/register.component';
import { LoginSuccessComponent }  from './login-success/login-success.component';
import { LogoutSuccessComponent } from './logout-success/logout-success.component';
import { AuthGuard }              from './services/auth-guard.service';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login/success', component: LoginSuccessComponent, canActivate: [AuthGuard] },
  { path: 'logout/success', component: LogoutSuccessComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }