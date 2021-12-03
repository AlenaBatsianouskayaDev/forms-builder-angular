import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, tap, exhaustMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from './../../models/user.models';
import { registerRequest, registerSuccess, registerError } from './auth.actions';
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private _router: Router) { }
  
  registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerRequest),
      exhaustMap((data: User) => this.authService.registerUser(data).pipe(
        map(({ username, token }) => {
          localStorage.setItem('token', token);
          this._router.navigate(['form-builder']);
          return registerSuccess({ username, token });
        
          // catchError(error => of(new registerError({error: error.message}))
        })
      )
      )
    ))
}