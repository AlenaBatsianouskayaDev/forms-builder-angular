import { Injectable } from '@angular/core';
import { IFormBuilderState } from '../reducers/reducers.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

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
