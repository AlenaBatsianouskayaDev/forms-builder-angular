import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';


import * as authActions from './auth.actions';
import * as formBuilderActions from '../formBuilder/formBuilder.actions';
import { AuthService } from "src/app/services/auth.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { IRequestData, IFormBuilderState } from "../reducers.interfaces";

@Injectable()
export class AuthEffects {

  private dataFromStorage: IFormBuilderState | undefined;

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private store: Store,
  ) { }  
  
  registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.registerRequest),
      switchMap((data: IRequestData) =>
        this.authService.registerUser(data).pipe(
        map(({ username, token }) => {
          this.authService.onLoggedIn(token);
          return authActions.registerSuccess({ username, token });
        }), 
        catchError(error => of(authActions.registerError(error)))
      ))
    ))
  
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginRequest),
      switchMap((data: IRequestData) =>
        this.authService.loginUser(data).pipe(
        map(({ username, token }) => {
          this.authService.onLoggedIn(token);
          this.dataFromStorage = this.localStorageService.loadFromLocalStorage('formData');
          if (this.dataFromStorage) {
            this.store.dispatch(formBuilderActions.addFullFormData(this.dataFromStorage));
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
          this.authService.onLoggedOut();
          return authActions.logoutSuccess()
        }), 
        catchError(error => of(authActions.logoutError(error)))
    ))  
}