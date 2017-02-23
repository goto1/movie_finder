import { Component, OnInit }  from '@angular/core';
import {
  FormBuilder, FormControl, 
  FormGroup, Validators }     from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: [ '../form-styles.sass' ]
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeated: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public onSubmit(): void {
    console.log(this.user.value);
  }

  public passwordMatching(): boolean {
    if (this.user.value.password.length > 0 && this.user.value.passwordRepeated.length > 0) {
      return this.user.value.password === this.user.value.passwordRepeated;
    }
    
    return true;
  }
}