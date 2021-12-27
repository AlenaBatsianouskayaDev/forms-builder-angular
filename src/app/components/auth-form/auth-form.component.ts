import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { registerRequest } from '../../reducers/auth/auth.actions';
import { loginRequest } from 'src/app/reducers/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
  
export class AuthFormComponent implements OnInit {
  
  public authForm: FormGroup;
  public currentUrl: string;

  constructor(
    private fb: FormBuilder,
    private store$: Store,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
        
    this.authForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  public registerUser(): void {
    this.store$.dispatch(registerRequest(
      this.authForm.value
    ))
  }
   
  public loginUser(): void {
    this.store$.dispatch(loginRequest(
      this.authForm.value
    ));
  }
}
