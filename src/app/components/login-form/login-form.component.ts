import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";

import { loginRequest } from 'src/app/reducers/auth/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
  
export class LoginFormComponent implements OnInit {
  
  public loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) { }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
       username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public loginUser(): void {
    this.store$.dispatch(loginRequest(
      this.loginForm.value
    ));
  }
}
