import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
  <div class="container">
    <ng-content></ng-content>
  </div>`,
  styles: [`
  .container {
    padding: 0 50px;
  }`]
})
export class ContainerComponent {

}
