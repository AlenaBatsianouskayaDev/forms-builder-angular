import { Injectable } from "@angular/core"; 
import * as uuid from 'uuid';
import { IFormFieldData, IGeneralStylesData } from '../reducers/reducers.interfaces';

@Injectable()
export class CommonService {
  private id: string;

  public generateId(): string {
    return this.id = uuid.v4();
  }

  inputHeightFactory(item: IFormFieldData) {
    return ({
      'height.px': item.inputHeight
    })
  }

  inputStylesFactory(item: IFormFieldData) {
    return ({
      'width.px': item.inputWidth,
      'border': item.inputBorderStyle,
      'font-size.px': item.inputFontSize,
      'font-weight': item.inputFontWeight,
      'color': item.inputColor,
    })
  } 

   textareaHeightFactory(item: IFormFieldData) {
    return ({
      'height.px': item.textareaHeight
    })
  }

  textareaStylesFactory(item: IFormFieldData) {
    return ({
      'color': item.textareaColor,
      'width.px': item.textareaWidth,
      'border': item.textareaBorderStyle,
      'font-size.px': item.textareaFontSize,
      'font-weight': item.textareaFontWeight
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

  selectColorFactory(item: IFormFieldData) {
    return ({
      'color': item.selectColor,
    }) 
  }

  selectColorHeightFactory(item: IFormFieldData) {
    return ({
      'height.px': item.selectHeight,
      'color': item.selectColor,
    }) 
  }

  selectStylesFactory(item: IFormFieldData) {
    return ({
      'width.px': item.selectWidth,
      'border': item.selectBorderStyle,
      'font-size.px': item.selectFontSize,
      'font-weight': item.selectFontWeight,
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
      'font-weight': item.formGeneralFontWeight,
      'color': item.formGeneralColor,
      'background-color': item.formGeneralBcgColor,
    }) 
  }

  generalFontSizeColorFactory(item: IGeneralStylesData) {
    return ({
      'font-size.px': item.formGeneralFontSize,
      'color': item.formGeneralColor,
    }) 
  }
}