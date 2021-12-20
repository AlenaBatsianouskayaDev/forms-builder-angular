import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from "@ngrx/store";

import { logoutRequest } from 'src/app/reducers/auth/auth.actions';
import { getUsername, isAuth } from 'src/app/reducers/auth/auth.selectors';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})

export class AuthNavComponent implements OnInit {

  public username$: Observable<string>;
  public isAuth$: Observable<boolean>;
  
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.username$ = this.store$.select(getUsername);
    this.isAuth$ = this.store$.select(isAuth);
  }

  logoutUser():void {
    this.store$.dispatch(logoutRequest());
  }
}
