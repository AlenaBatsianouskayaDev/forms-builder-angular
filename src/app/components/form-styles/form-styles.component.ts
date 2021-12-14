import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { getCurrentElementName } from './../../reducers/formBuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
export class FormStylesComponent implements OnInit{

  public currentElement$: Observable<string | undefined>;
  private destroy$: Subject<void> = new Subject();
  // TODO: to delete this array, when will be connect with choose element
  items = ['Input', 'Textarea', 'Button', 'Select', 'Checkbox'];
  expandedIndex = 0;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.currentElement$ = this.store
      .pipe(
        select(getCurrentElementName),
        takeUntil(this.destroy$))
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
