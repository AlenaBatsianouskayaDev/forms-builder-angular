import { Component } from '@angular/core';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
export class FormStylesComponent {

  // удалить этот массив, сюда будет передаваться выбранный тип элемента из стора и ренднрится соответсвующая форма для стилизации
  items = ['Input', 'Textarea', 'Button', 'Select', 'Checkbox'];
  expandedIndex = 0;

}
