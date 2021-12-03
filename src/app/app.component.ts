import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <app-container>
      <app-top-bar></app-top-bar>
    </app-container>
  </header>

  <main>
    <app-container>
      <router-outlet></router-outlet>
    </app-container>
  </main>`,
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  title = 'form-builder';
}
