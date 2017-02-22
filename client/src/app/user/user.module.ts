import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { 
    FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { UserRoutingModule }            from './user-routing.module';

import { LoginComponent }               from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [],
})
export class UserModule { }