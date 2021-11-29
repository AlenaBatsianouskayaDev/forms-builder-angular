import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  inputProps = ['Login'];
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log('LOGIN')
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
  }

}
