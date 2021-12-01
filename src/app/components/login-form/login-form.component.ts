import { Component, OnInit } from '@angular/core';
import { User } from './../../services/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
  
export class LoginFormComponent implements OnInit {
  
  loginUserData: User = new User('','');
  
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['form-builder']);
        },
        err => console.log(err),
      )
  
  }
}
