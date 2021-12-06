import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { Store } from "@ngrx/store";

import { loginRequest } from 'src/app/reducers/auth/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
  
export class LoginFormComponent implements OnInit {
  
  loginUserData: User = new User('','');
  
  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.store$.dispatch(loginRequest(this.loginUserData))
  }
}
