import { Component, OnInit }  from '@angular/core';
import { 
  FormBuilder, FormControl, 
  FormGroup, Validators }     from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: [ '../form-styles.sass' ]
})
export class LoginComponent implements OnInit { 
  public user: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    console.log(this.user.value);
  }
}