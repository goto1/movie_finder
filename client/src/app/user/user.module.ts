import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { 
    FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { 
  Http, HttpModule, RequestOptions }    from '@angular/http';
import { 
  AuthHttp, AuthConfig,
  AUTH_PROVIDERS, provideAuth }         from 'angular2-jwt';

import { UserRoutingModule }            from './user-routing.module';

import { LoginComponent }               from './login/login.component';
import { RegisterComponent }            from './register/register.component';
import { LoginSuccessComponent }        from './login-success/login-success.component';
import { LogoutSuccessComponent }       from './logout-success/logout-success.component';

import { AuthenticationService }        from './services/authentication.service';

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
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginSuccessComponent,
    LogoutSuccessComponent
  ],
  providers: [
    AuthenticationService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
})
export class UserModule { }