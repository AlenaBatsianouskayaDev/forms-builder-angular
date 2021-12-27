import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from "@ngrx/store";

import { FormSetupBaseClassComponent } from 'src/app/shared/form-setup-base-class/form-setup-base-class.component';

@Component({
  selector: 'app-form-setup-checkbox',
  templateUrl: './form-setup-checkbox.component.html',
  styleUrls: ['./form-setup-checkbox.component.scss']
})
export class FormSetupCheckboxComponent extends FormSetupBaseClassComponent {
  
  constructor(
    fb: FormBuilder, store$: Store
  ) { super(fb, store$) }
}
