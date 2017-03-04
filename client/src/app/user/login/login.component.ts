import { Component, OnInit }      from '@angular/core';
import { 
  FormBuilder, FormControl, 
  FormGroup, Validators }         from '@angular/forms';
import { Router }                 from '@angular/router';
import { AuthenticationService }  from '../services/authentication.service';
import { UserService }            from '../services/user.service';
import { ILoginForm }             from '../../shared/interfaces';

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
    private auth: AuthenticationService,
    private us: UserService ) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.auth.logout(); // just to be safe
  }

  onSubmit(): void {
    const formData: ILoginForm = {
      email: this.user.value.email,
      password: this.user.value.password
    };

    this.error = '';

    this.login(formData);
  }

  private login(formData: ILoginForm): void {
    this.auth.login(formData)
      .subscribe(
        result => {
          if (!result) {
            this.error = 'Login failed, try again';
            return;
          }

          this.us.getMovies()
            .subscribe(succ => succ, err => err);

          this.router.navigate(['/login/success']);
        },
        err => {
          this.error = err;
        });
  }
}