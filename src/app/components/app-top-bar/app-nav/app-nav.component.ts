import { Component } from '@angular/core';

@Component({
  selector: 'app-app-nav',
  template: `
  <nav class="appNav">
    <ul class="appNav__list">
      <li class="appNav__item">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" class="appNav__link" mat-button aria-label="Follow to Home">Home</a></li>
      <li class="appNav__item">
        <a routerLink="/form-builder" routerLinkActive="activeLink" class="appNav__link" mat-button aria-label="Follow to Create Form">Create Form</a></li>
    </ul>
  </nav>`,
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

}
