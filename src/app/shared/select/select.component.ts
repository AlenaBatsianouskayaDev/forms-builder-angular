import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IFieldStyles } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
  }]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() componentRequired: string | undefined;
  @Input() componentFieldStyles: IFieldStyles;
  @Input() componentLabelStyles: IFieldStyles;
  @Input() componentLabelText: string | undefined;
  @Input() componentSelectStyles: IFieldStyles;
  @Input() componentOptionsStyles: IFieldStyles;
  @Input() values: string[] | undefined;

  public selectControl = new FormControl();
  
  private onChange = (_: any): void => {}
  private onTouch = (_: any): void => {}
  
  ngOnInit(): void { 
    this.selectControl.valueChanges.subscribe((val) => {
      if(this.onChange) {
        this.onChange(val);
      }
    })
  }

  public writeValue(value: string): void {
    this.selectControl.setValue(value)
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
