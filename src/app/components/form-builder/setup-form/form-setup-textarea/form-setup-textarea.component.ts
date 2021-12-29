import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from "@ngrx/store";

import { FormSetupBaseClass } from 'src/app/shared/form-setup-base-class/form-setup-base-class.class';
import { FontWeight, BorderStyles } from 'src/app/utils/enums'

@Component({
  selector: 'app-form-setup-textarea',
  templateUrl: './form-setup-textarea.component.html',
  styleUrls: ['./form-setup-textarea.component.scss']
})
export class FormSetupTextareaComponent extends FormSetupBaseClass {

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
