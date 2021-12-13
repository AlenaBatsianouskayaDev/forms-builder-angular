import { Component } from '@angular/core';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
export class FormStylesComponent {

  // TODD: to delete this array, when will be connect with choose element
  items = ['Input', 'Textarea', 'Button', 'Select', 'Checkbox'];
  expandedIndex = 0;

}
