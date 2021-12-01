import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../services/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  
  registerUserData: User = new User('','');
  
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err=>console.log(err),
      )
  }
  //  onSubmit(f: NgForm) {
  //    console.log('REGISTRATION')
  // }
}
