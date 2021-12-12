import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <a [routerLink]="['form-builder']" class="logo" alt="logo">FormBuilder</a>`,
  styles: [`
    .logo {
      font-size: 24px;
      font-weight: 500;
      color: #151515;
    }`]
})
export class LogoComponent { }

