import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addElementStyles } from './../../../reducers/formBuilder/formBuilder.actions';

@Component({
  selector: 'app-form-setup-button',
  templateUrl: './form-setup-button.component.html',
  styleUrls: ['./form-setup-button.component.scss']
})
export class FormSetupButtonComponent implements OnInit {

  formElementsStyles: FormGroup;
  public borderStyles: string[] = ['solid', 'dotted', 'insent', 'double', 'groove', 'none'];
  public fontWeight: string[] = ['normal', 'bold', 'lighter'];

  private destroy$: Subject<void> = new Subject();

  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) { }

  ngOnInit(): void {
    this.formElementsStyles = this.fb.group({
      buttonText: [''],
      buttonWidth: [''],
      buttonHeight: [''],
      fontSize: [''],
      fontWeight: [''],
      color: [''],
      backgroundColor: ['']
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
