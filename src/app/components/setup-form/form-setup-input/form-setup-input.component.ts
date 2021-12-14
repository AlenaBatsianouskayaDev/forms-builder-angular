import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addElementStyles } from './../../../reducers/formBuilder/formBuilder.actions';
import { BORDER_STYLES, FONT_WEIGHT } from './../../../utils/data';

@Component({
  selector: 'app-form-setup-input',
  templateUrl: './form-setup-input.component.html',
  styleUrls: ['./form-setup-input.component.scss']
})
  
export class FormSetupInputComponent implements OnInit {

  formElementsStyles: FormGroup;
  public borderStyles: string[] = BORDER_STYLES;
  public fontWeight: string[] = FONT_WEIGHT;

  private destroy$: Subject<void> = new Subject();

  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) { }

  ngOnInit(): void {
    this.formElementsStyles = this.fb.group({
      label: [''],
      placeholder: [''],
      width: [''],
      height: [''],
      required: [''],
      borderStyle: [''],
      fontSize: [''],
      fontWeight: [''],
      color: [''],
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
