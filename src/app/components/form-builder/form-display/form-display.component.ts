
import { OnInit, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Subject, Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { IFormFieldData, IGeneralStylesData } from '../../../reducers/reducers.interfaces';
import {  COLORS } from '../../../utils/data';
// import { Elements } from '../../utils/enums';
import * as formBuilderActions from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getFormElement, getCurrentElementId, getGeneralStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors';
import { FieldElements } from 'src/app/utils/enums';
import { GENERAL } from '../../../utils/data';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.scss'],
})

export class FormDisplayComponent implements OnInit {

  public droppedElements: IFormFieldData[] = [];
  public colors = COLORS;
  private destroy$: Subject<void> = new Subject();
  public shownElements$: Observable<IFormFieldData[]>;
  public generalStyles$: Observable<IGeneralStylesData>;
  private prevCurrentElementId: string | undefined;
  private currentElementId: string;
  private toDeleteElementId: string;
  private getDragElements(): Array<string> {
    const keys = Object.keys(FieldElements);
    return keys.slice(keys.length / 2);
  }
  public dragElements = this.getDragElements();
  public general = GENERAL;

  constructor(private readonly store$: Store) { }
   
  ngOnInit(): void {
    this.shownElements$ = this.store$
      .pipe(
        select(getFormElement),
        takeUntil(this.destroy$))
    
    this.generalStyles$ = this.store$
      .pipe(
        select(getGeneralStyles),
        takeUntil(this.destroy$))

    this.store$.pipe(
        select(getCurrentElementId),
        takeUntil(this.destroy$))
      .subscribe(val => {
        this.prevCurrentElementId = val;
      })
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  drop(event: CdkDragDrop<any>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if (event.container.id === 'cdk-drop-list-1') {
        this.store$.dispatch(formBuilderActions.changeFieldsOrder(
        {prevIndex: event.previousIndex, currentIndex: event.currentIndex}
      ));
      }
    }
    else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.store$.dispatch(formBuilderActions.addFormField(
        { name: this.dragElements[event.previousIndex] }
      ));
    }
  }

   deleteElement(event: any) {
    if (!event.target.closest('[name="btnDelete"]')) {
      return;
    }
    this.toDeleteElementId = event.target.closest('div').id; 
      this.store$.dispatch(formBuilderActions.deleteFormField({ id: this.toDeleteElementId }));
   }
  
  setActiveElement(event: any) { 
    if (event.target.tagName === 'LABEL' ||
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA' ||
      event.target.tagName === 'SELECT' ||
      event.target.tagName === 'BUTTON' ) {
      this.currentElementId = event.target.closest('div').id;  
    } else {
      this.currentElementId = event.target.id;
    }
    if (this.prevCurrentElementId !== this.currentElementId) {
      this.store$.dispatch(
      formBuilderActions.setCurrentField({ id: this.currentElementId })
    );
    }    
  }

 
    
}