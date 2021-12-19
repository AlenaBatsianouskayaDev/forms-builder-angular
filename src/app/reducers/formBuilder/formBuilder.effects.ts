import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { interval } from 'rxjs';
import { map, debounce } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as formBuilderActions from './formBuilder.actions';
import * as formBuilderSelectors from './formBuilder.selectors';
import { CommonService } from "src/app/services/common.service";


@Injectable()
export class FormBuilderEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private commonService: CommonService,
  ) { }  
  
  saveFormFieldData$ = createEffect(
    () => this.actions$.pipe(
      ofType(formBuilderActions.addFormFieldStyles,
        formBuilderActions.addGeneralStylesData,
        formBuilderActions.addFormField),
      map(action => {
        this.store.select(formBuilderSelectors.getFullFormData)
          .subscribe(val => {
            debounce(() => interval(1000)),
          this.commonService.saveToLocalStorage('formData', val)
      })})
    ), { dispatch: false }
  );
}