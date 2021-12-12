import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";

import { loginRequest } from 'src/app/reducers/auth/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
  
export class LoginFormComponent {
  
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  
  constructor(fb: FormBuilder, private store$: Store) {
    this.loginForm = fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }

  loginUser() {
    this.store$.dispatch(loginRequest(this.loginForm.value));
  }
}
