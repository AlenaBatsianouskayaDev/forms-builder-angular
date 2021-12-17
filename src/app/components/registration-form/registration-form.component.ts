import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";

import { registerRequest } from './../../reducers/auth/auth.actions';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
  
export class RegistrationFormComponent implements OnInit {
  
  public registrationForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: [''],
      password: [''],
    })
  }

  registerUser(): void {
    this.store$.dispatch(registerRequest(
      this.registrationForm.value
    ))
  }
}
