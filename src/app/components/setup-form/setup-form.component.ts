import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NG_VALUE_ACCESSOR,ControlValueAccessor } from '@angular/forms';
import { Store } from "@ngrx/store";
import { formSetupChange } from './../../reducers/formBuilder/formBuilder.actions';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrls: ['./setup-form.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SetupFormComponent,
    multi: true,
  }]
})
export class SetupFormComponent implements ControlValueAccessor, OnInit {

  setupForm: FormGroup;
  placeholderText: FormControl;
  width: FormControl;
  height: FormControl;
  required: FormControl;
  borderStyle: FormControl;
  fontSize: FormControl;
  fontWeight: FormControl;
  color: FormControl;
  
  constructor(fb: FormBuilder, private store$: Store) {
    this.setupForm = fb.group({
      placeholderText: new FormControl('xcv'),
      width: new FormControl(''),
      height: new FormControl(''),
      required: new FormControl(''),
      borderStyle: new FormControl(''),
      fontSize: new FormControl(''),
      fontWeight: new FormControl(''),
      color: new FormControl(''),
    });
  }
 
  ngOnInit() {
    this.setupForm.valueChanges
      .subscribe(value => {
        this.store$.dispatch(formSetupChange(value));
        console.log(value);
      });
      
  }

  writeValue(value: any) {
    if(value) {
        this.setupForm.setValue(value);
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.setupForm.valueChanges.subscribe(fn);
    
  }

  registerOnTouched() {}
}
