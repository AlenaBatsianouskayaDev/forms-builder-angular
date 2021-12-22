import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addFormFieldStyles } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getCurrentElementStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IFormFieldData } from 'src/app/reducers/reducers.interfaces';
import { INITIAL_STYLES } from 'src/app/utils/data';
import { FontWeight } from 'src/app/utils/enums'

@Component({
  selector: 'app-form-setup-button',
  templateUrl: './form-setup-button.component.html',
  styleUrls: ['./form-setup-button.component.scss']
})
export class FormSetupButtonComponent implements OnInit {

  public formElementsStyles: FormGroup;
  private initialSetup: IFormFieldData;
  private destroy$: Subject<void> = new Subject();
  public fontWeight(): string[] {
    const keys = Object.keys(FontWeight);
    return keys.slice(keys.length / 2);
  }

  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) { }

  ngOnInit(): void {
    this.store$.pipe(
      select(getCurrentElementStyles),
      takeUntil(this.destroy$))
      .subscribe(val => {
        if (val) {
          this.initialSetup = val;
        } else {
          this.initialSetup = INITIAL_STYLES;
        }
      })
    
    this.formElementsStyles = this.fb.group({
      buttonText: [this.initialSetup.buttonText],
      buttonWidth: [this.initialSetup.buttonWidth],
      buttonHeight: [this.initialSetup.buttonHeight],
      buttonFontSize: [this.initialSetup.buttonFontSize],
      buttonFontWeight: [this.initialSetup.buttonFontWeight],
      buttonColor: [this.initialSetup.buttonColor],
      buttonBackgroundColor: [this.initialSetup.buttonBackgroundColor]
    })
    
    this.formElementsStyles.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.store$.dispatch(addFormFieldStyles(value));
      });    
  }
 
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
