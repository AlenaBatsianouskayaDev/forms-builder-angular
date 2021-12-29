import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { getCurrentElementName } from '../../../reducers/formBuilder/formBuilder.selectors';
import { AccordionControls } from 'src/app/utils/enums';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
  
export class FormStylesComponent implements OnInit{
     
  public currentElement$: Observable<string | undefined>;
  
  public accordionControls = AccordionControls;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.currentElement$ = this.store.select(getCurrentElementName)
  };
}
