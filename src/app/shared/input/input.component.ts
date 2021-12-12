import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { getFormStyles  } from 'src/app/reducers/formBuilder/formBuilder.selectors';
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
    this.store
      .pipe(
        select(getFormStyles),
        takeUntil(this.destroy$))
      .subscribe(({ inputLabel, inputPlaceholder, inputWidth, inputHeight, inputRequired, inputBorderStyle, inputFontSize, inputFontWeight, inputColor}) => {
        this.label = inputLabel;
        this.placeholder = inputPlaceholder;
        this.width = inputWidth+'px';
        this.height = inputHeight+'px';
        this.required = inputRequired;
        this.borderStyle = inputBorderStyle;
        this.fontSize = inputFontSize+'px';
        this.fontWeight = inputFontWeight;
        this.color = inputColor;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(console.log('unsubscribed'));
    this.destroy$.complete();
  }
  
}
