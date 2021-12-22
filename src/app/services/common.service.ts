import { Injectable } from "@angular/core"; 
import * as uuid from 'uuid';
import { IFormFieldData, IGeneralStylesData } from '../reducers/reducers.interfaces';
import { IFieldStyles } from './../utils/interfaces';

@Injectable()
export class CommonService {
  private id: string;

  public generateId(): string {
    return this.id = uuid.v4();
  }

  public inputHeightFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'height.px': item.inputHeight
    })
  }

  public inputStylesFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'width.px': item.inputWidth,
      'border': item.inputBorderStyle,
      'font-size.px': item.inputFontSize,
      'font-weight': item.inputFontWeight,
      'color': item.inputColor,
    })
  } 

  public textareaHeightFactory(item: IFormFieldData):IFieldStyles {
    return ({
      'height.px': item.textareaHeight
    })
  }

  public textareaStylesFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'color': item.textareaColor,
      'width.px': item.textareaWidth,
      'border': item.textareaBorderStyle,
      'font-size.px': item.textareaFontSize,
      'font-weight': item.textareaFontWeight
    })
  } 

  public buttonStylesFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'width.px': item.buttonWidth,
      'height.px': item.buttonHeight,
      'font-size.px': item.buttonFontSize,
      'font-weight': item.buttonFontWeight,
      'color': item.buttonColor,
      'background-color': item.buttonBackgroundColor,
    }) 
  }

  public selectColorFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'color': item.selectColor,
    }) 
  }

  public selectColorHeightFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'height.px': item.selectHeight,
      'color': item.selectColor,
    }) 
  }

  public selectStylesFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'width.px': item.selectWidth,
      'border': item.selectBorderStyle,
      'font-size.px': item.selectFontSize,
      'font-weight': item.selectFontWeight,
    }) 
  }

  public checkboxStylesFactory(item: IFormFieldData): IFieldStyles {
    return ({
      'width.px': item.checkboxWidth,
      'height.px': item.checkboxHeight,
    }) 
  }

  public generalStylesFactory(item: IGeneralStylesData): IFieldStyles {
    return ({
      'border-color': item.formGeneralBorderColor,
      'font-weight': item.formGeneralFontWeight,
      'color': item.formGeneralColor,
      'background-color': item.formGeneralBcgColor,
    }) 
  }

  public generalFontSizeColorFactory(item: IGeneralStylesData): IFieldStyles {
    return ({
      'font-size.px': item.formGeneralFontSize,
      'color': item.formGeneralColor,
    }) 
  }
}