import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { getCurrentElementName } from '../../../reducers/formBuilder/formBuilder.selectors';
import { StylesSections } from 'src/app/utils/enums';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
  
export class FormStylesComponent implements OnInit{

  public currentElement$: Observable<string | undefined>;
  private destroy$: Subject<void> = new Subject();
  public index = 0;
  public isOpenGeneralSection: boolean = true;
  public isOpenElementSection: boolean = false;
  public accordionSections(): Array<string> {
    const keys = Object.keys(StylesSections);
    return keys.slice(keys.length / 2);
  }

  constructor(private store: Store) { }

  ngOnInit(): void {
    const a = document.getElementById('accordion-header-0');
    console.log(a);
    this.currentElement$ = this.store
      .pipe(
        select(getCurrentElementName),
        takeUntil(this.destroy$))
    this.currentElement$.subscribe(val => {
      if (val) {
        this.isOpenElementSection = true;
        this.isOpenGeneralSection = false;
      } else {
        this.isOpenElementSection = false;
        this.isOpenGeneralSection = true;
      }
    });
  }

  onToggle(event: Event) {
    this.isOpenGeneralSection = !this.isOpenGeneralSection;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
