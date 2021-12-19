import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addFormFieldStyles } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getCurrentElementStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IFormFieldData } from 'src/app/reducers/reducers.interfaces';
import { INITIAL_STYLES,BORDER_STYLES, FONT_WEIGHT } from 'src/app/utils/data';

@Component({
  selector: 'app-form-setup-textarea',
  templateUrl: './form-setup-textarea.component.html',
  styleUrls: ['./form-setup-textarea.component.scss']
})
export class FormSetupTextareaComponent implements OnInit {

  public formElementsStyles: FormGroup;
  public borderStyles: string[] = BORDER_STYLES;
  public fontWeight: string[] = FONT_WEIGHT;
  private initialSetup: IFormFieldData;
  private destroy$: Subject<void> = new Subject();

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
      textareaBorderStyle: [this.initialSetup.textareaBorderStyle],
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
 
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
