import { Component, Input, OnInit, forwardRef,ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IFieldStyles } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() componentStyles: IFieldStyles;
  @Input() componentRequired: string | undefined;
  @Input() componentLabel: string | undefined;

  public checkboxControl = new FormControl()

  private onChange = (_: any): void => {}
  private onTouch = (_: any): void => {}

  ngOnInit(): void {
    this.checkboxControl.valueChanges.subscribe((val) => {
      if(this.onChange) {
        this.onChange(val);
      }
    })
  }

  writeValue(checked: boolean): void {
    this.checkboxControl.setValue(checked)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
