import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addFormFieldStyles, addGeneralStylesData } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getCurrentElementStyles, getGeneralStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IGeneralStylesData } from 'src/app/reducers/reducers.interfaces';
import { INITIAL_STYLES,BORDER_STYLES, FONT_WEIGHT, INITIAL_GENERAL_STYLES } from 'src/app/utils/data';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {

  public formGeneralStyles: FormGroup;
  public borderStyles: string[] = BORDER_STYLES;
  public fontWeight: string[] = FONT_WEIGHT;
  private initialSetup: IGeneralStylesData;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) { }

  ngOnInit(): void {
    this.store$.pipe(
      select(getGeneralStyles),
      takeUntil(this.destroy$))
      .subscribe(val => {
        if (val) {
          this.initialSetup = val;
        } else {
          this.initialSetup = INITIAL_GENERAL_STYLES;
        }
      })
    
    this.formGeneralStyles = this.fb.group({
      formTitle: [this.initialSetup.formTitle],
      formGeneralFontSize: [this.initialSetup.formGeneralFontSize],
      formGeneralFontWeight: [this.initialSetup.formGeneralFontWeight],
      formGeneralColor: [this.initialSetup.formGeneralColor],
      formGeneralBcgColor: [this.initialSetup.formGeneralBcgColor],
      formGeneralBorderColor: [this.initialSetup.formGeneralBorderColor],
    })

    this.formGeneralStyles.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.store$.dispatch(addGeneralStylesData(value));
      });    
  }
 
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
