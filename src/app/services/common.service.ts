import { Injectable } from "@angular/core"; 
import * as uuid from 'uuid';
import { IFormBuilderState, IFormFieldData, IGeneralStylesData } from '../reducers/reducers.interfaces';

@Injectable()
export class CommonService {
  private id: string;

  generateId(): string {
    return this.id = uuid.v4();
  }

  saveToLocalStorage(dataName: string, data: IFormBuilderState): void {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(dataName, serializedData);
  }

  loadFromLocalStorage(dataName:string): IFormBuilderState | undefined{
    const data = localStorage.getItem(dataName);
    return data === null ? undefined : JSON.parse(data); 
  }

  removeFromLocalStorage(dataName: string):void {
    localStorage.removeItem(dataName);
  }

  inputStylesFactory(item: IFormFieldData) {
    return ({
      'width.px': item.inputWidth,
      'height.px': item.inputHeight,
      'border': item.inputBorderStyle,
      'font-size.px': item.inputFontSize,
      'font-weight': item.inputFontWeight,
      'color': item.inputColor,
    }) 
  }

  buttonStylesFactory(item: IFormFieldData) {
    return ({
      'width.px': item.buttonWidth,
      'height.px': item.buttonHeight,
      'font-size.px': item.buttonFontSize,
      'font-weight': item.buttonFontWeight,
      'color': item.buttonColor,
      'background-color': item.buttonBackgroundColor,
    }) 
  }

  textareaStylesFactory(item: IFormFieldData) {
    return ({
      'width.px': item.textareaWidth,
      'height.px': item.textareaHeight,
      'border': item.textareaBorderStyle,
      'font-size.px': item.textareaFontSize,
      'font-weight': item.textareaFontWeight,
      'color': item.textareaColor,
    }) 
  }

  selectStylesFactory(item: IFormFieldData) {
    return ({
      'width.px': item.selectWidth,
      'height.px': item.selectHeight,
      'border': item.selectBorderStyle,
      'font-size.px': item.selectFontSize,
      'font-weight': item.selectFontWeight,
      'color': item.selectColor,
    }) 
  }

  checkboxStylesFactory(item: IFormFieldData) {
    return ({
      'width.px': item.checkboxWidth,
      'height.px': item.checkboxHeight,
    }) 
  }

  generalStylesFactory(item: IGeneralStylesData) {
    return ({
      'border-color': item.formGeneralBorderColor,
      'font-size.px': item.formGeneralFontSize,
      'font-weight': item.formGeneralFontWeight,
      'color': item.formGeneralColor,
      'background-color': item.formGeneralBcgColor,
    }) 
  }
}