import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { getPlaceholderText, getColor, getStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors';
import { Store, select} from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
  
export class InputComponent implements OnInit {
  placeholder: string;
  width: string;
  height: string;
  required: string;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  private readonly destroy$ = new Subject();

  constructor(private readonly store: Store) {
    
  }

  ngOnInit(): void {
    this.store
      .pipe(
        select(getStyles),
        takeUntil(this.destroy$))
      .subscribe(({ placeholderText, width, height, required, borderStyle, fontSize, fontWeight, color }) => {
        this.placeholder = placeholderText;
        this.width = width+'px';
        this.height = height+'px';
        this.required = required;
        this.borderStyle = borderStyle;
        this.fontSize = fontSize+'px';
        this.fontWeight = fontWeight;
        this.color = color;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(console.log('unsubscribed'));
    this.destroy$.complete();
  }
  
}
