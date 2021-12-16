import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, tap, exhaustMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { User } from './../../models/user.models';
import * as authActions from './auth.actions';
import * as formBuilderActions from './../formBuilder/formBuilder.actions';
import { AuthService } from "src/app/services/auth.service";
import { addGeneralStyles, addElementStyles } from "../formBuilder/formBuilder.actions";
import { IGeneralStylesData } from "../interfaces";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private _router: Router,
    private store: Store) { }  
  
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
          this._router.navigate(['form-builder']);
          const generalStyles = localStorage.getItem('generalStyles');
          if (generalStyles) {
            const serialazedGeneralStyles = JSON.parse(generalStyles);
            this.store.dispatch(addGeneralStyles(serialazedGeneralStyles))
          }
          const elementsStyles = localStorage.getItem('formElement');
          if (elementsStyles) {
            const serialazedelementsStyles = JSON.parse(elementsStyles);
            this.store.dispatch(addGeneralStyles(serialazedelementsStyles))
          }
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
          this._router.navigate(['/']);
          return authActions.logoutSuccess()
        }), 
        catchError(error => of(authActions.logoutError(error)))
    ))  
}