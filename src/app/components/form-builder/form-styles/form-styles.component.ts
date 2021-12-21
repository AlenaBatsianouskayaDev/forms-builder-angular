import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

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
  set generalSection(value: boolean) {
    this.isOpenGeneralSection = value
  }
  set elementsSection(value: boolean) {
    this.isOpenElementSection = value
  }
  public accordionSections(): Array<string> {
    const keys = Object.keys(StylesSections);
    return keys.slice(keys.length / 2);
  }

  constructor(private store: Store) { }

  ngOnInit(): void {
    
    this.currentElement$ = this.store
      .pipe(
        select(getCurrentElementName),
        tap(res => {
          this.generalSection = !res;
          this.elementsSection = !!res;
        }),
        takeUntil(this.destroy$))
  };

  onToggle(event: Event) {
    this.generalSection = !this.generalSection;
    this.elementsSection = !!this.elementsSection;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
