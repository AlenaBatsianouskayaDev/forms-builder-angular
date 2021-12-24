import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addGeneralStylesData } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getGeneralStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IGeneralStylesData } from 'src/app/reducers/reducers.interfaces';
import { INITIAL_GENERAL_STYLES } from 'src/app/utils/data';
import { FontWeight } from 'src/app/utils/enums'

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {

  public formGeneralStyles: FormGroup;
  private initialSetup: IGeneralStylesData;
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
      title: [this.initialSetup.title],
      fontSize: [this.initialSetup.fontSize],
      fontWeight: [this.initialSetup.fontWeight],
      color: [this.initialSetup.color],
      backgroundColor: [this.initialSetup.backgroundColor],
      borderColor: [this.initialSetup.borderColor],
    })

    this.formGeneralStyles.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.store$.dispatch(addGeneralStylesData(value));
      });    
  }
 
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
