import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, tap, exhaustMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getFormElement } from "./formBuilder.selectors";

import { IGeneralStylesData } from './../interfaces';
import * as formBuilderActions from './formBuilder.actions';

@Injectable()
export class FormBuilderEffects {

  constructor(
    private actions$: Actions,
    private _router: Router,
    private store: Store,
  ) { }  
  
  saveGeneralStyles$ = createEffect(
    () => this.actions$.pipe(
      ofType(formBuilderActions.addGeneralStyles),
      map((data: IGeneralStylesData) => {
        const serializedData = JSON.stringify(data);
        localStorage.setItem('generalStyles', serializedData)
       })
    ),
      { dispatch: false }
  );
  
  addElementStyles$ = createEffect(
    () => this.actions$.pipe(
      ofType(formBuilderActions.addElementStyles),
      map(action => {
        this.store.select(getFormElement).subscribe(val => {
          const serializedData = JSON.stringify(val);
          localStorage.setItem('formElement', serializedData)
        }
          )
       })
    ),
      { dispatch: false }
  );
}