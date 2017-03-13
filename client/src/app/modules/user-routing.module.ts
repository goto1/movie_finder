import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';

import { UserLoginComponent } from '../components/login/user-login.component';
import { RegisterUserComponent } from '../components/register/register-user.component';
import { LoginSuccessComponent } from '../components/login/login-success.component';
import { LogoutSuccessComponent } from '../components/login/logout-success.component';

const userRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'success', component: LoginSuccessComponent },
  { path: 'logout', component: LogoutSuccessComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }