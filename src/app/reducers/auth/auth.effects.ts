import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, tap, exhaustMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from './../../models/user.models';
import * as authActions from './auth.actions';
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private _router: Router) { }  
  
  registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.registerRequest),
      exhaustMap((data: User) => this.authService.registerUser(data).pipe(
        map(({ username, token }) => {
          localStorage.setItem('token', token);
          this._router.navigate(['form-builder']);
          return authActions.registerSuccess({ username, token })
        }),
        catchError(error => of(authActions.registerError(error)))
      ))
    ))
  
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginRequest),
      exhaustMap((data: User) => this.authService.loginUser(data).pipe(
        map(({ username, token }) => {
          localStorage.setItem('token', token);
          console.log('catch login')
          this._router.navigate(['form-builder']);
          return authActions.loginSuccess({ username, token })
        }),
        catchError(error => of(authActions.loginError(error)))
      ))
    ))
  
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logoutRequest),
        map(action => {
          localStorage.removeItem('token');
          console.log('catch logout');
          this._router.navigate(['/']);
          return authActions.logoutSuccess()
        }),
        catchError(error => of(authActions.logoutError(error)))
      ))
  
}