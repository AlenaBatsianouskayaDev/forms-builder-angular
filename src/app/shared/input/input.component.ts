import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
  
export class InputComponent implements OnInit {

  @Input() prop: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
