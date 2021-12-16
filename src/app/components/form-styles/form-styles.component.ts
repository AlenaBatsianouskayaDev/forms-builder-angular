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
  public index = 0;
  public accordionSections: string[] = ['General Styles', 'Element Styles']

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
