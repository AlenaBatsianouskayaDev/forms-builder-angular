import { OnInit, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { from, Subject, fromEvent, pipe, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil, map, filter, find, tap  } from 'rxjs/operators';

import { IElementData, IFormElement } from './../../reducers/interfaces';
import { initialElements } from './../../data/constants';
import { Elements } from './../../data/enums';
import { addFormElement, setCurrentElement } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getFormElement } from 'src/app/reducers/formBuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.scss'],
})

export class FormDisplayComponent implements OnInit {

  public dragElements: string[] = initialElements;
  public droppedElements: IElementData [] = [];
  private destroy$: Subject<void> = new Subject();
  public shownElements$: Observable<IFormElement[]>;

  constructor(private readonly store$: Store) { }
   
  ngOnInit(): void {
    this.shownElements$ = this.store$
      .pipe(
        select(getFormElement),
        takeUntil(this.destroy$))
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container && event.previousContainer.id === 'cdk-drop-list-0') {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // } else if (event.previousContainer !== event.container && event.previousContainer.id === 'cdk-drop-list-0') {
      //   event.previousContainer.data.splice(event.currentIndex, 1); //добавить кнопку удаления, напрямую делитить из стора
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
    this.store$.dispatch(
      setCurrentElement({ id: event.currentTarget.id })
    );
  }
}