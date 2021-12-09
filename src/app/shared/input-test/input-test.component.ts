import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTestComponent),
    multi: true,
  }]
})
export class InputTestComponent implements OnInit, ControlValueAccessor {

  startControl: FormControl = new FormControl;
  onChange: any;
  onTouch: any;

  constructor() { }

  ngOnInit(): void {
    this.startControl.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
    })
  }

  writeValue(value:string) {
    this.startControl.setValue(value)
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
