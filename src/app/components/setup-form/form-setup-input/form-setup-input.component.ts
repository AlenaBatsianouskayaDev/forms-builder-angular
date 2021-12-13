import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";
import { addElementStyles } from './../../../reducers/formBuilder/formBuilder.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-setup-input',
  templateUrl: './form-setup-input.component.html',
  styleUrls: ['./form-setup-input.component.scss']
})
  
export class FormSetupInputComponent implements OnInit {

  formSetupInput: FormGroup;
  label: FormControl;
  placeholderText: FormControl;
  width: FormControl;
  height: FormControl;
  required: FormControl;
  borderStyle: FormControl;
  fontSize: FormControl;
  fontWeight: FormControl;
  color: FormControl;
  private readonly destroy$ = new Subject();

  constructor(private fb: FormBuilder, private store$: Store) {
    this.formSetupInput = fb.group({
      label: new FormControl(''),
      placeholderText: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      required: new FormControl(''),
      borderStyle: new FormControl(''),
      fontSize: new FormControl(''),
      fontWeight: new FormControl(''),
      color: new FormControl(''),
    })
  }

  ngOnInit() {
    this.formSetupInput.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.store$.dispatch(addElementStyles(value));
      });    
  }
 
  ngOnDestroy() {
    this.destroy$.complete();
  }
}
