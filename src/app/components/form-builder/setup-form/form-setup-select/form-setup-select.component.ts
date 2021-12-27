import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from "@ngrx/store";

import { FormSetupBaseClassComponent } from './../../../../shared/form-setup-common-class/form-setup-common-class.component';
import { FontWeight, BorderStyles } from 'src/app/utils/enums'

@Component({
  selector: 'app-form-setup-select',
  templateUrl: './form-setup-select.component.html',
  styleUrls: ['./form-setup-select.component.scss']
})
export class FormSetupSelectComponent extends FormSetupBaseClassComponent {

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

