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
      components: [...state.components,
        {...initialStyles,
        id: commonService.generateId(),
        name}]
    })
  }
  ),

  on(formBuilderActions.setCurrentElement, (state, { id }) => {
    const copyStateComponents = [...state.components];

    const currentElementIndex = copyStateComponents.findIndex(item => item.isCurrentElement === true);

    if (currentElementIndex !== -1) {
      copyStateComponents[currentElementIndex] = {
        ...copyStateComponents[currentElementIndex],
        isCurrentElement: false
      }
    }

    const currentIndex = copyStateComponents.findIndex(item => item.id === id)
    
    if (currentIndex !== -1) {
      copyStateComponents[currentIndex] = {
        ...copyStateComponents[currentIndex],
        isCurrentElement: true
      }
    }
    return ({ components: [...copyStateComponents] })
  }
  ),
  


  // on(formBuilderActions.addElementStyles, (state, payload) => ({
  //   components: [...state.components, {
  //   ...initialStyles,
  //   ...payload
  //   }]
  // })
  // ),

  
)