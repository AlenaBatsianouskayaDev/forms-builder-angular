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
        const capitalizedStyle: string = this.capitalizeFirstLetter(style);
        const styleKey = this.addingPx(style);
        return (item.name === 'General styles') ?
          ({ ...acc, [styleKey]: item[`${style}`]}) :
          ({ ...acc, [styleKey]: item[`${item.name}${capitalizedStyle}`] })
      }, {})
  }

  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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