import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";

import { getUsername, isAuth } from 'src/app/reducers/auth/auth.selectors';
import { logoutRequest } from 'src/app/reducers/auth/auth.actions';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})
export class AuthNavComponent {
  username$: Observable<string>;
  isAuth$: Observable<boolean>;

  constructor(public store$: Store) {
    this.username$ = this.store$.select(getUsername);
    this.isAuth$ = this.store$.select(isAuth);
  }

  logoutUser() {
    this.store$.dispatch(logoutRequest());
  }
}
