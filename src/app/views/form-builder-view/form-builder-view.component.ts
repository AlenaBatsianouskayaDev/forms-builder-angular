import { Component } from '@angular/core';

@Component({
  selector: 'app-form-builder-view',
  template: `
  <div class="FormBuilderView">
    <app-form-styles></app-form-styles>
    <app-form-display></app-form-display>
  </div>`,
  styles: [`
  .FormBuilderView {
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }`]
})
  
export class FormBuilderViewComponent {

}
