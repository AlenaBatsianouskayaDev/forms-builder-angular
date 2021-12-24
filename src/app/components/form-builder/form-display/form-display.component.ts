import { OnInit, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Subject, Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { IFormFieldData, IGeneralStylesData } from '../../../reducers/reducers.interfaces';
import * as DATA from '../../../utils/data';
import * as formBuilderActions from 'src/app/reducers/formBuilder/formBuilder.actions';
import { getFormElement, getCurrentElementId, getGeneralStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors';
import { FieldElements } from 'src/app/utils/enums';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.scss'],
})

export class FormDisplayComponent implements OnInit {

  public colors = DATA.COLORS;
  public formFieldStyles = DATA.MAT_FORM_FIELD_STYLES;
  public inputStyles = DATA.INPUT_STYLES;
  public textareaStyles = DATA.TEXTAREA_STYLES;
  public matLabelStyles = DATA.MAT_LABEL_STYLES;
  public matSelectStyles = DATA.MAT_SELECT_STYLES;
  public matOptionStyles = DATA.MAT_OPTION_STYLES;
  public checkboxStyles = DATA.CHECKBOX_STYLES;
  public buttonStyles = DATA.BUTTON_STYLES;
  public formGeneralStyles = DATA.FORM_GENERAL_STYLES;
  public titleGeneralStyles = DATA.TITLE_GENERAL_STYLES;

  public droppedElements: IFormFieldData[] = [];
  public shownElements$: Observable<IFormFieldData[]>;
  public generalStyles$: Observable<IGeneralStylesData>;
   
  private prevCurrentElementId: string | undefined;
  private currentElementId: string;
  private toDeleteElementId: string;
  
  private getDragElements(): string[] {
    const keys = Object.keys(FieldElements);
    return keys.slice(keys.length / 2);
  }
  public dragElements: string[] = this.getDragElements();
  private destroy$: Subject<void> = new Subject();
  private btnDeleteElAttr: string = '[name="btnDelete"]';
  private btnEditElAttr: string = '[name="btnEdit"]';
  private queryIdElAttr: string = '.fieldElement';

  constructor(
    private readonly store$: Store,
    public commonService: CommonService
  ) { }
   
  ngOnInit(): void {
    this.shownElements$ = this.store$.select(getFormElement);
    this.generalStyles$ = this.store$.select(getGeneralStyles);

    this.store$.pipe(
        select(getCurrentElementId),
        takeUntil(this.destroy$))
      .subscribe(val => {
        this.prevCurrentElementId = val;
      })
  }
  
  private ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if (event.container.id === 'cdk-drop-list-1') {
        this.store$.dispatch(formBuilderActions.changeFieldsOrder(
        { prevIndex: event.previousIndex, currentIndex: event.currentIndex }
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