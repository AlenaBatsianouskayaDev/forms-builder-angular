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
  selector: 'app-form-setup-textarea',
  templateUrl: './form-setup-textarea.component.html',
  styleUrls: ['./form-setup-textarea.component.scss']
})
export class FormSetupTextareaComponent implements OnInit {

  public formElementsStyles: FormGroup;
  private initialSetup: IFormFieldData;
  private destroy$: Subject<void> = new Subject();
  public fontWeight(): string[] {
    const keys = Object.keys(FontWeight);
    return keys.slice(keys.length / 2);
  }
  public borderStyles(): string[] {
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
