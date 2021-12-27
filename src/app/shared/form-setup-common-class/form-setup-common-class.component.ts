import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addFormFieldStyles } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getCurrentElementStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IFormFieldData } from 'src/app/reducers/reducers.interfaces';
import { INITIAL_STYLES } from 'src/app/utils/data';

@Component({
  selector: 'app-form-setup-common-class',
  templateUrl: './form-setup-common-class.component.html',
  styleUrls: ['./form-setup-common-class.component.scss']
})
  
export class FormSetupBaseClassComponent implements OnInit {

  public formElementsStyles: FormGroup;
  private initialSetup: IFormFieldData;
  private destroy$: Subject<void> = new Subject();
  
  constructor(
    protected fb: FormBuilder,
    protected store$: Store
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
      inputBorder: [this.initialSetup.inputBorder],
      inputFontSize: [this.initialSetup.inputFontSize],
      inputFontWeight: [this.initialSetup.inputFontWeight],
      inputColor: [this.initialSetup.inputColor],

      selectFieldText: [this.initialSetup.selectFieldText],
      selectLabel: [this.initialSetup.selectLabel],
      selectWidth: [this.initialSetup.selectWidth],
      selectHeight: [this.initialSetup.selectHeight],
      selectRequired: [this.initialSetup.selectRequired],
      selectBorder: [this.initialSetup.selectBorder],
      selectFontSize: [this.initialSetup. selectFontSize],
      selectFontWeight: [this.initialSetup.selectFontWeight],
      selectColor: [this.initialSetup.selectColor],

      buttonText: [this.initialSetup.buttonText],
      buttonWidth: [this.initialSetup.buttonWidth],
      buttonHeight: [this.initialSetup.buttonHeight],
      buttonFontSize: [this.initialSetup.buttonFontSize],
      buttonFontWeight: [this.initialSetup.buttonFontWeight],
      buttonColor: [this.initialSetup.buttonColor],
      buttonBackgroundColor: [this.initialSetup.buttonBackgroundColor],
    
      checkboxFieldText: [this.initialSetup.checkboxFieldText],
      checkboxLabel: [this.initialSetup.checkboxLabel],
      checkboxRequired: [this.initialSetup.checkboxRequired],

      textareaFieldText: [this.initialSetup.textareaFieldText],
      textareaLabel: [this.initialSetup.textareaLabel],
      textareaPlaceholder: [this.initialSetup.textareaPlaceholder],
      textareaWidth: [this.initialSetup.textareaWidth],
      textareaHeight: [this.initialSetup.textareaHeight],
      textareaRequired: [this.initialSetup.textareaRequired],
      textareaBorder: [this.initialSetup.textareaBorder],
      textareaFontSize: [this.initialSetup.textareaFontSize],
      textareaFontWeight: [this.initialSetup.textareaFontWeight],
      textareaColor: [this.initialSetup.textareaColor],
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