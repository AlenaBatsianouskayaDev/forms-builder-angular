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
  selector: 'app-form-setup-select',
  templateUrl: './form-setup-select.component.html',
  styleUrls: ['./form-setup-select.component.scss']
})
export class FormSetupSelectComponent implements OnInit {

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
      selectLabel: [this.initialSetup.selectLabel],
      selectWidth: [this.initialSetup.selectWidth],
      selectHeight: [this.initialSetup.selectHeight],
      selectRequired: [this.initialSetup.selectRequired],
      selectBorderStyle: [this.initialSetup.selectBorderStyle],
      selectFontSize: [this.initialSetup. selectFontSize],
      selectFontWeight: [this.initialSetup.selectFontWeight],
      selectColor: [this.initialSetup.selectColor],
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
