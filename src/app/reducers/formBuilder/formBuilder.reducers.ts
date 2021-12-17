import { createReducer, on } from "@ngrx/store";

import { CommonService } from "src/app/services/common.service";
import * as formBuilderActions from "./formBuilder.actions";
import { IFormElement, IGeneralStylesData } from '../interfaces';
import { INITIAL_STYLES, INITIAL_GENERAL_STYLES } from "src/app/utils/data";

export interface FormBuilderState {
  generalStyles: IGeneralStylesData,
  components: IFormElement[],
}

export const initialFormBuilderState: FormBuilderState = {
  generalStyles: INITIAL_GENERAL_STYLES,
  components: [],
}

export const formBuilderReducers = createReducer(
  initialFormBuilderState,
  on(formBuilderActions.addFormElement, (state, {name}) => {
    let commonService = new CommonService( );
    return ({
      generalStyles: {...state.generalStyles},
      components: [...state.components,
        {...INITIAL_STYLES,
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
    return ({ generalStyles: {...state.generalStyles}, components: [...copyStateComponents] })
  }
  ),

  on(formBuilderActions.addElementStyles, (state, payload) => {
    const copyStateComponents = [...state.components];
    const currentElementIndex = copyStateComponents.findIndex(item => item.isCurrentElement === true);
    
    if (currentElementIndex !== -1) {
      copyStateComponents[currentElementIndex] = {
        ...copyStateComponents[currentElementIndex],
        ...payload,
      }
    }
    return ({ generalStyles: {...state.generalStyles}, components: [...copyStateComponents] })
  }
  ),

  on(formBuilderActions.changeElementsOrder, (state, { prevIndex, currentIndex }) => {
    const copyStateComponents = [...state.components];
    [copyStateComponents[prevIndex], copyStateComponents[currentIndex]] = [copyStateComponents[currentIndex], copyStateComponents[prevIndex]];
    return ({ generalStyles: {...state.generalStyles}, components: [...copyStateComponents] })
  }
  ),

  on(formBuilderActions.deleteElement, (state, { id }) => {
    const copyStateComponents = [...state.components];
    const filteredComponents = copyStateComponents.filter(item => item.id !== id);
    return ({
      generalStyles: {...state.generalStyles}, components: [...filteredComponents],
    })
  }
  ),

  on(formBuilderActions.addGeneralStyles, (state, payload) => {
    return ({
      generalStyles: {...state.generalStyles, ...payload},
      components: [...state.components]
    })
  }
  ),
)