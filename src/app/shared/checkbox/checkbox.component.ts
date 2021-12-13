import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
}

@Component({
  selector: 'app-checkbox',
  template: `<mat-checkbox class="example-margin">Check me!</mat-checkbox>`,
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent  {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
  };

}
