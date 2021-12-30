import { Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';

import { IFormFieldData, IGeneralStylesData } from '../../../reducers/reducers.interfaces';
import { getFormElement, getGeneralStyles } from 'src/app/reducers/formBuilder/formBuilder.selectors';
import { CommonService } from 'src/app/services/common.service';
import { COLORS, STYLES_TYPES_FOR_ELEMENTS } from '../../../utils/data';
import * as formBuilderActions from 'src/app/reducers/formBuilder/formBuilder.actions';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.scss'],
})

export class FormDisplayComponent implements OnInit {

  public colors = COLORS;
  public formFieldStyles = STYLES_TYPES_FOR_ELEMENTS.MAT_FORM_FIELD_STYLES;
  public inputStyles = STYLES_TYPES_FOR_ELEMENTS.INPUT_STYLES;
  public textareaStyles = STYLES_TYPES_FOR_ELEMENTS.TEXTAREA_STYLES;
  public matLabelStyles = STYLES_TYPES_FOR_ELEMENTS.MAT_LABEL_STYLES;
  public matSelectStyles = STYLES_TYPES_FOR_ELEMENTS.MAT_SELECT_STYLES;
  public matOptionStyles = STYLES_TYPES_FOR_ELEMENTS.MAT_OPTION_STYLES;
  public checkboxStyles = STYLES_TYPES_FOR_ELEMENTS.CHECKBOX_STYLES;
  public buttonStyles = STYLES_TYPES_FOR_ELEMENTS.BUTTON_STYLES;
  public formGeneralStyles = STYLES_TYPES_FOR_ELEMENTS.FORM_GENERAL_STYLES;
  public titleGeneralStyles = STYLES_TYPES_FOR_ELEMENTS.TITLE_GENERAL_STYLES;
  public shownElements$: Observable<IFormFieldData[]>;
  public generalStyles$: Observable<IGeneralStylesData>;
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
   
  ngOnInit(): void {
    this.shownElements$ = this.store$.select(getFormElement);
    this.generalStyles$ = this.store$.select(getGeneralStyles);
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
