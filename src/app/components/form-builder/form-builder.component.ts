import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';

import { IFormFieldData } from '../../reducers/reducers.interfaces';
import * as formBuilderActions from 'src/app/reducers/formBuilder/formBuilder.actions';
import { FieldElements } from 'src/app/utils/enums';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
  
export class FormBuilderComponent {

  private getDragElements(): string[] {
    const keys = Object.keys(FieldElements);
    return keys.slice(keys.length / 2);
  }
  public dragElements: string[] = this.getDragElements();
  public droppedElements: IFormFieldData[] = [];
  private prevCurrentElementId: string | undefined;
  private currentElementId: string;
  private toDeleteElementId: string;
  private btnDeleteElAttr: string = '[name="btnDelete"]';
  private btnEditElAttr: string = '[name="btnEdit"]';
  private queryIdElAttr: string = '.fieldElement';

   constructor(
    private readonly store$: Store,
    public commonService: CommonService
   ) { }
  
  public drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if (event.container.id === 'droppedElements') {
        this.store$.dispatch(formBuilderActions.changeFieldsOrder(
        { prevIndex: event.previousIndex, currentIndex: event.currentIndex }
        ));
      }
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.store$.dispatch(formBuilderActions.addFormField(
        { name: this.dragElements[event.previousIndex] } 
      ))
      }     
  }
  
  public deleteElement (event: Event): void {
    if (!(event.target as Element).closest(this.btnDeleteElAttr)) {
      return;
    }
      this.toDeleteElementId = (event.target as Element).closest(this.queryIdElAttr)!.id; 
      this.store$.dispatch(formBuilderActions.deleteFormField({ id: this.toDeleteElementId }));
  }
  
  public setActiveElement(event: Event): void {
    if (!(event.target as Element).closest(this.btnEditElAttr)) {
      return;
    }
    this.currentElementId = (event.target as Element).closest(this.queryIdElAttr)!.id;
    if (this.prevCurrentElementId !== this.currentElementId) {
      this.store$.dispatch(
        formBuilderActions.setCurrentField({ id: this.currentElementId })
      );
    }
  }

 }
