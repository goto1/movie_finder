import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  FormBuilder, FormControl,
  FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { ILoginForm } from '../../shared/interfaces';

@Component({
  templateUrl: './user-login.component.html',
  styleUrls: [ '../../shared/styles/form.sass' ]
})
export class UserLoginComponent implements OnInit {
  user: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService ) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    const formData: ILoginForm = {
      email: this.user.value.email,
      password: this.user.value.password
    };

    this.error = '';
    this.post(formData);
  }

  private post(formData: ILoginForm): void {
    this.authService.login(formData)
      .subscribe(
        result => {
          if (!result) {
            this.error = 'Logging failed, try again';
            return;
          }

          this.router.navigate(['/success']);
        },
        err => this.error = err
      );
  }
}