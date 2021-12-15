import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addElementStyles } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getCurrentElementStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IElementStyles } from 'src/app/reducers/interfaces';
import { INITIAL_STYLES,BORDER_STYLES, FONT_WEIGHT } from 'src/app/utils/data';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {

  public formGeneralStyles: FormGroup;
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
    
    this.formGeneralStyles = this.fb.group({
      formTitle: [this.initialSetup.formTitle],
      formGeneralFontSize: [this.initialSetup.formGeneralFontSize],
      formGeneralFontWeight: [this.initialSetup.formGeneralFontWeight],
      formGeneralColor: [this.initialSetup.formGeneralColor],
      formGeneralBkgColor: [this.initialSetup.formGeneralBcgColor],
      formGeneralBorderColor: [this.initialSetup.formGeneralBorderColor],
    })

    this.formGeneralStyles.valueChanges
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
