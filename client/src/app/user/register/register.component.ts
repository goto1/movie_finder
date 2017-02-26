import { Component, OnInit }      from '@angular/core';
import {
  FormBuilder, FormControl, 
  FormGroup, Validators }         from '@angular/forms';
import { Router }                 from '@angular/router';
import { AuthenticationService }  from '../services/authentication.service';
import { IRegisterForm }          from '../../shared/interfaces';

@Component({
  templateUrl: './register.component.html',
  styleUrls: [ '../form-styles.sass' ]
})
export class RegisterComponent implements OnInit {
  user: FormGroup;
  error: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthenticationService ) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      passwordRepeated: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.auth.logout(); // just to be safe
  }

  onSubmit(): void {
    const formData: IRegisterForm = {
      first_name: this.user.value.firstName,
      last_name: this.user.value.lastName,
      email: this.user.value.email,
      password: this.user.value.password
    };

    this.error = '';

    this.register(formData);
  }

  private register(formData: IRegisterForm): void {
    this.auth.register(formData)
      .subscribe(
        result => {
          if (!result) {
            this.error = 'Registration failed, try again';
            return;
          }
          this.router.navigate(['/']);
        },
        err => {
          this.error = err;
        });
  }

  passwordsMatching(): boolean {
    return this.user.value.password === this.user.value.passwordRepeated;
  }
}