import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { IRegisterForm } from '../../shared/interfaces';

@Component({
  templateUrl: './register-user.component.html',
  styleUrls: [ '../../shared/styles/form.sass' ]
})
export class RegisterUserComponent implements OnInit {
  user: FormGroup;
  error: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService ) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      passwordRepeated: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Just to be safe, log user out
    this.authService.logout();
  }

  onSubmit(): void {
    const formData: IRegisterForm = {
      first_name: this.user.value.firstName,
      last_name: this.user.value.lastName,
      email: this.user.value.email,
      password: this.user.value.password
    };

    this.error = '';
    this.post(formData);
  }

  private post(formData: IRegisterForm): void {
    this.authService.register(formData)
      .subscribe(
        result => {
          if (!result) {
            this.error = 'Registration failed, try again';
            return;
          }
          
          this.router.navigate(['/']);
        },
        err => this.error = err
      );
  }

  passwordsMatching(): boolean {
    return this.user.value.password === this.user.value.passwordRepeated;
  }
}