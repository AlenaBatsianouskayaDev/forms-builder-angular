import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { getCurrentElementName } from '../../../reducers/formBuilder/formBuilder.selectors';
import { AccordionItems } from 'src/app/utils/enums';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
  
export class FormStylesComponent implements OnInit{
  
  
  public currentElement$: Observable<string | undefined>;
  public accordionItems(): string[] {
    const keys = Object.keys(AccordionItems);
    return keys.slice(keys.length / 2);
  }
  public initialExpandedGeneralItem: boolean = true;
  public initialExpandedElementsItem: boolean = false;

  set expandedGeneralItem(value: boolean) {
    this.initialExpandedGeneralItem = value
  }
  set expandedElementsItem(value: boolean) {
    this.initialExpandedElementsItem = value
  }

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.currentElement$ = this.store
    .pipe(
      select(getCurrentElementName),
      tap(res => {
        this.expandedGeneralItem = !res;
        this.expandedElementsItem = !!res;
      })
    )
  }
}
