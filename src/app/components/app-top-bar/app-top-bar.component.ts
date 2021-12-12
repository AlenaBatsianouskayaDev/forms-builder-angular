import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
  <div class="appTopBar">
    <app-logo class="appTopBar__logo"></app-logo>
    <div class="appTopBar__nav">
        <app-app-nav></app-app-nav>
        <app-auth-nav></app-auth-nav>
    </div>
  </div>`,
  styleUrls: ['./app-top-bar.component.scss']
})
export class AppTopBarComponent {

}
