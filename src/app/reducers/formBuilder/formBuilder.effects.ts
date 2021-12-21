import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as formBuilderActions from './formBuilder.actions';
import * as formBuilderSelectors from './formBuilder.selectors';
import { LocalStorageService } from "src/app/services/local-storage.service";


@Injectable()
export class FormBuilderEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private localStorageService: LocalStorageService,
  ) { }  
  
  saveFormFieldData$ = createEffect(
    () => this.actions$.pipe(
      ofType(formBuilderActions.addFormFieldStyles,
        formBuilderActions.addGeneralStylesData,
        formBuilderActions.addFormField),
      map(action => {
        this.store.select(formBuilderSelectors.getFullFormData)
          .subscribe(val => {
            this.localStorageService.saveToLocalStorage('formData', val) 
          })})
    ), { dispatch: false }
  );
}