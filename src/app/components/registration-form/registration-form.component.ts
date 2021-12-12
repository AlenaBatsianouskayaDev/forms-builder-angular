import { Component } from '@angular/core';
import { User } from '../../models/user.models';
import { Store } from "@ngrx/store";

import { registerRequest } from './../../reducers/auth/auth.actions';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  
  registerUserData: User = new User('','');
  
  constructor(private store$: Store) { }

  registerUser() {
   this.store$.dispatch(registerRequest(this.registerUserData))
  }
}
