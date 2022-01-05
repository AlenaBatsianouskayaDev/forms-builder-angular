import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IFieldStyles } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true,
  }]
})

export class TextareaComponent implements OnInit, ControlValueAccessor {
  @Input() componentRequired: string | undefined;
  @Input() componentFieldStyles: IFieldStyles;
  @Input() componentLabelStyles: IFieldStyles;
  @Input() componentLabelText: string | undefined;
  @Input() componentTextareaPlaceholder: string | undefined;
  @Input() componentTextareaStyles: IFieldStyles;

  public textareaControl = new FormControl();

  private onChange = (_: any): void => {}
  private onTouch = (_: any): void => {}
  
  ngOnInit(): void { 
    this.textareaControl.valueChanges.subscribe((val) => {
      if(this.onChange) {
        this.onChange(val);
      }
    })
  }

  writeValue(value: string): void {
    this.textareaControl.setValue(value)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
