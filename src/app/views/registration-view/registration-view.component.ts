import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-view',
  template: `
  <div class="regisrationView">
    <app-registration-form></app-registration-form>
  </div>`,
  styles: [`
  .regisrationView {
    height: 100vh;
    padding: 130px 0 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }`]
})
export class RegistrationViewComponent {

}
