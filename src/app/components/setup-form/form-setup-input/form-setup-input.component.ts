import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addElementStyles } from './../../../reducers/formBuilder/formBuilder.actions';
import { BORDER_STYLES, FONT_WEIGHT } from './../../../utils/data';
import { getCurrentElementStyles } from './../../../reducers/formBuilder/formBuilder.selectors'
import { IElementStyles } from './../../../reducers/interfaces';
import { INITIAL_STYLES } from './../../../utils/data';

@Component({
  selector: 'app-form-setup-input',
  templateUrl: './form-setup-input.component.html',
  styleUrls: ['./form-setup-input.component.scss']
})
  
export class FormSetupInputComponent implements OnInit {

  formElementsStyles: FormGroup;
  public borderStyles: string[] = BORDER_STYLES;
  public fontWeight: string[] = FONT_WEIGHT;
  private initialSetup: IElementStyles;
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
        this.store$.dispatch(addElementStyles(value));
      });    
  }
 
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
