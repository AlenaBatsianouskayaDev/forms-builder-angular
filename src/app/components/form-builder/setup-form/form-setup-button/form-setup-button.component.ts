import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from "@ngrx/store";

import { FormSetupBaseClassComponent } from './../../../../shared/form-setup-common-class/form-setup-common-class.component';
import { FontWeight } from 'src/app/utils/enums'

@Component({
  selector: 'app-form-setup-button',
  templateUrl: './form-setup-button.component.html',
  styleUrls: ['./form-setup-button.component.scss']
})
export class FormSetupButtonComponent extends FormSetupBaseClassComponent {

  public fontWeight(): string[] {
    const keys = Object.keys(FontWeight);
    return keys.slice(keys.length / 2);
  }

  constructor(
    fb: FormBuilder, store$: Store
  ) { super(fb, store$) }
}
