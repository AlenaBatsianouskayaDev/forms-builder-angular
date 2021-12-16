import { Injectable } from "@angular/core"; 
import * as uuid from 'uuid';
import { IFormElement, IGeneralStylesData } from './../reducers/interfaces';

@Injectable()
export class CommonService {
  private id: string;

  generateId() {
    return this.id = uuid.v4();
  }
}