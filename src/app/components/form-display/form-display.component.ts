import { OnInit, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { from, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil, map } from 'rxjs/operators';

import { AuthService } from './../../services/auth.service'
import { addElementToForm } from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getFormStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.scss'],
})

//TODO: to split this component 
export class FormDisplayComponent implements OnInit {

  drugElements: string[] = ['input', 'textarea', 'select', 'button', 'checkbox']
  droppedElements: { name: string, id: string }[] = [];
  shownElements: { name: string, id: string }[] = [];
  
  label: string;
  placeholder: string;
  width: string;
  height: string;
  required: boolean;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  private readonly destroy$ = new Subject();
  
  constructor(private authService: AuthService, private readonly store$: Store) { }
   
  ngOnInit(): void {
    this.store$
      .pipe(
        select(getFormStyles),
        takeUntil(this.destroy$))
      .subscribe(({ inputLabel, inputPlaceholder, inputWidth, inputHeight, inputRequired, inputBorderStyle, inputFontSize, inputFontWeight, inputColor, components }) => {
        this.shownElements = components;
        this.label = inputLabel;
        this.placeholder = inputPlaceholder;
        this.width = inputWidth + 'px';
        this.height = inputHeight + 'px';
        this.required = inputRequired;
        this.borderStyle = inputBorderStyle;
        this.fontSize = inputFontSize + 'px';
        this.fontWeight = inputFontWeight;
        this.color = inputColor;
      })
  }
  
  ngOnDestroy() {
    this.destroy$.next(console.log('unsubscribed'));
    this.destroy$.complete();
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
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
      this.store$.dispatch(addElementToForm({ name: this.drugElements[event.previousIndex], id: this.authService.generateId() }));
    }
  }

  setActiveElement(event: any) {
    console.dir(event.currentTarget.id);
  }
}