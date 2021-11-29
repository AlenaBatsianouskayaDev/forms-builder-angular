import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  inputProps = ['Name', 'Login'];

  constructor() { }

  ngOnInit(): void {
  }

   onSubmit(f: NgForm) {
     console.log('REGISTRATION')
  }
}
