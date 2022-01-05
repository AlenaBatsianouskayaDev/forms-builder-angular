import { Component, Input, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IFieldStyles } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }]
})

export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() componentRequired: string | undefined;
  @Input() componentFieldStyles: IFieldStyles;
  @Input() componentLabelStyles: IFieldStyles;
  @Input() componentLabelText: string | undefined;
  @Input() componentInputPlaceholder: string | undefined;
  @Input() componentInputStyles: IFieldStyles;

  public inputControl = new FormControl();

  private onChange = (_: any): void => {}
  private onTouch = (_: any): void => {}

  ngOnInit(): void { 
    this.inputControl.valueChanges.subscribe((val) => {
      if(this.onChange) {
        this.onChange(val);
      }
    })
  }

  public writeValue(value: string): void {
    this.inputControl.setValue(value)
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
