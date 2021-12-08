import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit, ControlValueAccessor {

 
  startControl: FormControl = new FormControl;
  constructor() { }

  ngOnInit(): void {
    this.startControl.valueChanges.subscribe(value => console.log(value))
  }

}
