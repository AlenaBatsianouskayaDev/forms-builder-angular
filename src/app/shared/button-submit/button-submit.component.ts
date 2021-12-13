import { Component } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  template: `
  <button type="button" class="btnSubmit"aria-label="button submit" mat-flat-button color="customColor">
    Submit
  </button>`,
  styles: [`
  .btnSubmit {
    display: block;
    min-width: 100px;
  }

  .mat-customColor {
    color: rgb(15, 120, 168);
    background-color: rgba(15, 120, 168, 0.1);
  }`]
})
  
export class ButtonSubmitComponent {

}
