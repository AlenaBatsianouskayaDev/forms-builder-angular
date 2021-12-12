import { Component } from '@angular/core';

@Component({
  selector: 'app-login-view',
  template: `
  <div class="loginView">
    <app-login-form></app-login-form>
  </div>`,
  styles: [`
  .loginView {
    height: 100vh;
    padding: 130px 0 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }`]
})
export class LoginViewComponent {

}
