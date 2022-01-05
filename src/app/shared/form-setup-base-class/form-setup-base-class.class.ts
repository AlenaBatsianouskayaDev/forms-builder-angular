import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import { takeUntil } from 'rxjs/operators';

import { addFormFieldStyles } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getCurrentElementStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors'
import { IFormFieldData } from 'src/app/reducers/reducers.interfaces';
import { INITIAL_ELEMENTS_STYLES } from 'src/app/utils/data';
import { UnsubscriberBaseClass } from './../unsubscriber-base-class/unsubscriber-base-class.class';

@Injectable()
export abstract class FormSetupBaseClass extends UnsubscriberBaseClass implements OnInit {

  public formElementsStyles: FormGroup;
  public initialSetup: IFormFieldData;
  
  constructor(
    public fb: FormBuilder,
    public store$: Store,
  ) { 
    super()
  }

  ngOnInit(): void {
    this.store$.pipe(
      select(getCurrentElementStyles),
      takeUntil(this.destroy$))
      .subscribe(val => {
        if (val) {
          this.initialSetup = val;
        } else {
          this.initialSetup = INITIAL_ELEMENTS_STYLES;
        }
      })
    
    this.formElementsStyles = this.fb.group({
      fieldText: [this.initialSetup.fieldText],
      label: [this.initialSetup.label],
      text: [this.initialSetup.text],
      placeholder: [this.initialSetup.placeholder],
      width: [this.initialSetup.width],
      height: [this.initialSetup.height],
      required: [this.initialSetup.required],
      border: [this.initialSetup.border],
      fontSize: [this.initialSetup.fontSize],
      fontWeight: [this.initialSetup.fontWeight],
      color: [this.initialSetup.color],
      backgroundColor: [this.initialSetup.backgroundColor],
      options: [this.initialSetup.options],
    })

    this.formElementsStyles.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.store$.dispatch(addFormFieldStyles(value));
      }); 
  }
}
