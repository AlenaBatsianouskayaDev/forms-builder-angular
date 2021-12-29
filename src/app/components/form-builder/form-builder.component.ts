import {
  AfterViewInit,
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef} from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { TemplatePortal, CdkPortalOutlet } from '@angular/cdk/portal';

import { IFormFieldData } from '../../reducers/reducers.interfaces';
import * as formBuilderActions from 'src/app/reducers/formBuilder/formBuilder.actions';
import { FieldElements } from 'src/app/utils/enums';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
  
export class FormBuilderComponent implements AfterViewInit{

  @ViewChild('stylesPortalContent') stylesPortalContent: TemplateRef<unknown>;
  @ViewChild('displayPortalContent') displayPortalContent: TemplateRef<unknown>;
  @ViewChild('elementsPortalContent') elementsPortalContent: TemplateRef<unknown>;

  private getDragElements(): string[] {
    const keys = Object.keys(FieldElements);
    return keys.slice(keys.length / 2);
  }
  public dragElements: string[] = this.getDragElements();
  public droppedElements: IFormFieldData[] = [];

  public stylesPortal: TemplatePortal;
  public displayPortal: TemplatePortal;
  public elementsPortal: TemplatePortal;

  constructor(
    private readonly store$: Store,
    public commonService: CommonService,
    private _viewContainerRef: ViewContainerRef,
  ) { }

  ngAfterViewInit() {
    this.stylesPortal = new TemplatePortal(this.stylesPortalContent, this._viewContainerRef);
    this.displayPortal = new TemplatePortal(this.displayPortalContent, this._viewContainerRef);
    this.elementsPortal = new TemplatePortal(this.elementsPortalContent, this._viewContainerRef);
  }
  
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
  
  
 }
