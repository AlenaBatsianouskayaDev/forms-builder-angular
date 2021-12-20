import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addFormFieldStyles } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getCurrentElementStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IFormFieldData } from 'src/app/reducers/reducers.interfaces';
import { INITIAL_STYLES } from 'src/app/utils/data';
import { FontWeight, BorderStyles } from 'src/app/utils/enums'

@Component({
  selector: 'app-form-setup-input',
  templateUrl: './form-setup-input.component.html',
  styleUrls: ['./form-setup-input.component.scss']
})
  
export class FormSetupInputComponent implements OnInit {

  public formElementsStyles: FormGroup;
  private initialSetup: IFormFieldData;
  private destroy$: Subject<void> = new Subject();
  public fontWeight(): Array<string> {
    const keys = Object.keys(FontWeight);
    return keys.slice(keys.length / 2);
  }
  public borderStyles(): Array<string> {
    const keys = Object.keys(BorderStyles);
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
      inputFieldText: [this.initialSetup.inputFieldText],
      inputLabel: [this.initialSetup.inputLabel],
      inputPlaceholder: [this.initialSetup.inputPlaceholder],
      inputWidth: [this.initialSetup.inputWidth],
      inputHeight: [this.initialSetup.inputHeight],
      inputRequired: [this.initialSetup.inputRequired],
      inputBorderStyle: [this.initialSetup.inputBorderStyle],
      inputFontSize: [this.initialSetup.inputFontSize],
      inputFontWeight: [this.initialSetup.inputFontWeight],
      inputColor: [this.initialSetup.inputColor],
    })

    this.formElementsStyles.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.store$.dispatch(addFormFieldStyles(value));
      });    
  }
 
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
