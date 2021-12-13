import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { getFormElement  } from 'src/app/reducers/formBuilder/formBuilder.selectors';
import { Store, select} from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
  
export class InputComponent implements OnInit {
  label: string;
  placeholder: string;
  width: string;
  height: string;
  required: boolean;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  color: string;

  private readonly destroy$ = new Subject();

  constructor(private readonly store: Store) {
    
  }

  ngOnInit(): void {
    // this.store
    //   .pipe(
    //     select(getFormStyles),
    //     takeUntil(this.destroy$))
    //   .subscribe((component) => {
    //     this.label = label;
    //     this.placeholder = placeholder;
    //     this.width = width+'px';
    //     this.height = height+'px';
    //     this.required = required;
    //     this.borderStyle = borderStyle;
    //     this.fontSize = fontSize+'px';
    //     this.fontWeight = fontWeight;
    //     this.color = color;
    //   });
  }

  ngOnDestroy() {
    // this.destroy$.next(console.log('unsubscribed'));
    // this.destroy$.complete();
  }
  
}
