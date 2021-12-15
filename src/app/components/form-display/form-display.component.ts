import { OnInit, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Subject, Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { IElementData, IFormElement } from './../../reducers/interfaces';
import { INITIAL_ELEMENTS, COLORS } from '../../utils/data';
// import { Elements } from '../../utils/enums';
import { addFormElement, setCurrentElement, changeElementsOrder } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getFormElement, getCurrentElementId } from 'src/app/reducers/formBuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.scss'],
})

export class FormDisplayComponent implements OnInit {

  public dragElements: string[] = INITIAL_ELEMENTS;
  public droppedElements: IElementData[] = [];
  public colors = COLORS;
  private destroy$: Subject<void> = new Subject();
  public shownElements$: Observable<IFormElement[]>;
  public prevCurrentElementId: string | undefined;
  public currentElementId: string;

  constructor(private readonly store$: Store) { }
   
  ngOnInit(): void {
    this.shownElements$ = this.store$
      .pipe(
        select(getFormElement),
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
        this.store$.dispatch(changeElementsOrder(
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
      this.store$.dispatch(addFormElement(
        {name: this.dragElements[event.previousIndex]}
      ));
    }
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
      setCurrentElement({ id: this.currentElementId })
    );
    }    
  }
}