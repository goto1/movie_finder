import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from './shared.module';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';

import { UserLoginComponent } from '../components/login/user-login.component';
import { RegisterUserComponent } from '../components/register/register-user.component';
import { LoginSuccessComponent } from '../components/login/login-success.component';
import { LogoutSuccessComponent } from '../components/login/logout-success.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerName: 'Authorization',
    headerPrefix: 'JWT',
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UserRoutingModule
  ],
  declarations: [
    UserLoginComponent,
    RegisterUserComponent,
    LoginSuccessComponent,
    LogoutSuccessComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class UserModule { }