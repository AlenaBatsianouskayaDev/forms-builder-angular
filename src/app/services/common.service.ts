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

  public stylesFactory(item: IGeneralStylesData | IFormFieldData, styles: string[]): IFieldStyles {
    return [...styles]
      .reduce((acc, style: string): IFieldStyles => {
        const styleKey = this.addingPx(style);
        return ({ ...acc, [styleKey]: item[`${style}`]}) 
      }, {})
  }

  private addingPx(style: string): string {
    if (style === 'height' ||
        style === 'width' ||
      style === 'fontSize') {
      return `${style}.px`;
    }
    return style;
  }
}
