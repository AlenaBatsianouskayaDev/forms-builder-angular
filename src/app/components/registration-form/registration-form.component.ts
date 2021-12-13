import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";

import { registerRequest } from './../../reducers/auth/auth.actions';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
  
export class RegistrationFormComponent {
  
  registrationForm: FormGroup;
  
  constructor(fb: FormBuilder, private store$: Store) {
     this.registrationForm = fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }

  registerUser() {
    this.store$.dispatch(registerRequest(
      this.registrationForm.value
    ))
  }
}
