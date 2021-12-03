import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <a [routerLink]="['form-builder']" class="logo" alt="logo">FormBuilder</a>`,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
