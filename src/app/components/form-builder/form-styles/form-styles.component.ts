
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, tap } from 'rxjs/operators';

import { getCurrentElementName } from '../../../reducers/formBuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
  
export class FormStylesComponent implements OnInit{

  public currentElement$: Observable<string | undefined>;
  private destroy$: Subject<void> = new Subject();
  public index = 0;
  public accordionSections: string[] = ['General Styles', 'Field Styles']
  // public set fetchOpenSection(value: boolean) {
  //   this.isOpenGeneralSection = value
  // }
  public isOpenGeneralSection: boolean = true;
  public isOpenElementSection: boolean = false;
  public isOpenSection: boolean;
  constructor(private store: Store) { }

  
  ngOnInit(): void {
    this.currentElement$ = this.store.select(getCurrentElementName)
      // .pipe(
      //   tap(res => this.fetchOpenSection = !!res)
      // )
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

  getExpanded(section: string, element:any): boolean {
      return section === 'General Styles' && !element
  }

  onToggle(event: Event) {
    this.isOpenGeneralSection = !this.isOpenGeneralSection;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
