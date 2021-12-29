import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormElementsComponent {
  
  @Input() elementsList: string[] = [];

}


