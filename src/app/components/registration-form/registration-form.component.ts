import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../services/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  
  registerUserData: User = new User('','');
  
  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
       res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['form-builder']);
        },
        err=>console.log(err),
      )
  }
}
