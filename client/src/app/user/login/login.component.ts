import { Component, OnInit }  from '@angular/core';
import { 
  FormBuilder, FormControl, 
  FormGroup, Validators }     from '@angular/forms';
import { Router }             from '@angular/router';
import { LoginService }       from '../services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: [ '../form-styles.sass' ]
})
export class LoginComponent implements OnInit { 
  user: FormGroup;
  error: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ls: LoginService ) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.ls.logout();
  }

  public onSubmit(): void {
    let email = this.user.value.email;
    let password = this.user.value.password;

    this.ls.login(email, password)
      .subscribe(
        result => {
          if (result === true) {
            this.router.navigate(['/']);
          } else {
            this.error = 'Email or password is incorrect';
          }
        },
        err => {
          let details = err.json() || {};
          this.error = details.message;
        });
  }
}