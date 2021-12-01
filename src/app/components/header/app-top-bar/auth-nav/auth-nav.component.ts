import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../services/auth.service';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})
export class AuthNavComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }


}
