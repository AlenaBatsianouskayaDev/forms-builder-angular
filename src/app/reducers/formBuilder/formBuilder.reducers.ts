import { createReducer, on } from "@ngrx/store";

import { CommonService } from "src/app/services/common.service";
import * as formBuilderActions from "./formBuilder.actions";
import { IFormElement } from './../interfaces';
import { initialStyles } from "src/app/data/constants";

export interface FormBuilderState {
  components: IFormElement[],
}

export const initialFormBuilderState: FormBuilderState = {
  components: [],
}

export const formBuilderReducers = createReducer(
  initialFormBuilderState,
  on(formBuilderActions.addFormElement, (state, {name}) => {
    let commonService = new CommonService( );
    return ({
      components: [ {
      ...initialStyles,
      name: name,
      id: commonService.generateId(),
      }, ...state.components]
    })
  }
  ),

  // on(formBuilderActions.setCurrentElement, (state, {id}) => {
  //   const currentElement = state.components.filter(item => item.id === id);
  //   console.log(currentElement);
  //   return ({
  //     components: [...state.components, {
  //     ...currentElement,
  //     isCurrentElement: true
  //       }]
  //   });
  // }
  // ),

  // on(formBuilderActions.addElementStyles, (state, payload) => ({
  //   components: [...state.components, {
  //   ...initialStyles,
  //   ...payload
  //   }]
  // })
  // ),

  
)