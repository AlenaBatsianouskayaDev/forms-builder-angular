import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from "@ngrx/store";

import { FormSetupBaseClassComponent } from 'src/app/shared/form-setup-base-class/form-setup-base-class.component';
import { FontWeight, BorderStyles } from 'src/app/utils/enums'

@Component({
  selector: 'app-form-setup-input',
  templateUrl: './form-setup-input.component.html',
  styleUrls: ['./form-setup-input.component.scss']
})
  
export class FormSetupInputComponent extends FormSetupBaseClassComponent {

  public fontWeight(): string[] {
    const keys = Object.keys(FontWeight);
    return keys.slice(keys.length / 2);
  }
  public borderStyles(): string[] {
    const keys = Object.keys(BorderStyles);
    return keys.slice(keys.length / 2);
  }
  
  constructor(
    fb: FormBuilder, store$: Store
  ) { super(fb, store$) }
}
