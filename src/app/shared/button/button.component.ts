import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IFieldStyles } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
 
  @Input() componentStyles: IFieldStyles;
  @Input() componentText: string | undefined;

}
