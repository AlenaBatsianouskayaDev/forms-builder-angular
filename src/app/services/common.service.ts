import { Injectable } from "@angular/core"; 
import * as uuid from 'uuid';
import { IFormBuilderState, IGeneralStylesData } from '../reducers/reducers.interfaces';

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
}