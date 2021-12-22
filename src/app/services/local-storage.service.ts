import { Injectable } from '@angular/core';
import { IFormBuilderState } from '../reducers/reducers.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveToLocalStorage(dataName: string, data: IFormBuilderState): void {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(dataName, serializedData);
  }

  public loadFromLocalStorage(dataName:string): IFormBuilderState | undefined{
    const data = localStorage.getItem(dataName);
    return data === null ? undefined : JSON.parse(data); 
  }

  public removeFromLocalStorage(dataName: string):void {
    localStorage.removeItem(dataName);
  }
}
