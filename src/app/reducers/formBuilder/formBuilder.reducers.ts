import { createReducer, on } from "@ngrx/store";
import { CommonService } from "src/app/services/common.service";
import * as formBuilderActions from "./formBuilder.actions";
import { IFormBuilderState } from '../reducers.interfaces';
import { INITIAL_ELEMENTS_STYLES, INITIAL_GENERAL_STYLES } from "src/app/utils/data";


export const initialFormBuilderState: IFormBuilderState = {
  generalStyles: INITIAL_GENERAL_STYLES,
  components: [],
}

export const formBuilderReducers = createReducer(
  initialFormBuilderState,
  on(formBuilderActions.addFormField, (state, {name}) => {
    const commonService = new CommonService( );
    return ({
      ...state,
      components: [...state.components,
        { name,
          ...INITIAL_ELEMENTS_STYLES,
          id: commonService.generateId(),
        }]
    })
  }),

  on(formBuilderActions.addFormFieldStyles, (state, payload) => {
    const copyStateComponents = [...state.components];
    const currentElementIndex = copyStateComponents.findIndex(
      item => item.isCurrentElement === true);
    if (currentElementIndex !== -1) {
      copyStateComponents[currentElementIndex] = {
        ...copyStateComponents[currentElementIndex],
        ...payload,
      }
    }
    return ({
      ...state,
      components: [...copyStateComponents]
    })
  }),

  on(formBuilderActions.addGeneralStylesData, (state, payload) => {
    return ({
      ...state,
      generalStyles: {...state.generalStyles, ...payload},
    })
  }),

  on(formBuilderActions.setCurrentField, (state, { id }) => {
    const copyStateComponents = [...state.components];

    const currentElementIndex = copyStateComponents.findIndex(
      item => item.isCurrentElement === true);

    if (currentElementIndex !== -1) {
      copyStateComponents[currentElementIndex] = {
        ...copyStateComponents[currentElementIndex],
        isCurrentElement: false
      }
    }

    const currentIndex = copyStateComponents.findIndex(
      item => item.id === id)
    
    if (currentIndex !== -1) {
      copyStateComponents[currentIndex] = {
        ...copyStateComponents[currentIndex],
        isCurrentElement: true
      }
    }
    return ({
      generalStyles: { ...state.generalStyles },
      components: [...copyStateComponents]
    })
  }),

  on(formBuilderActions.changeFieldsOrder, (state, { prevIndex, currentIndex }) => {
    const copyStateComponents = [...state.components];
    [copyStateComponents[prevIndex], copyStateComponents[currentIndex]] =
      [copyStateComponents[currentIndex], copyStateComponents[prevIndex]];
    return ({
      ...state,
      components: [...copyStateComponents]
    })
  }),

  on(formBuilderActions.deleteFormField, (state, { id }) => {
    const copyStateComponents = [...state.components];
    const filteredComponents = copyStateComponents.filter(
      item => item.id !== id);
    return ({
      ...state,
      components: [...filteredComponents]
    })
  }),

  on(formBuilderActions.addFullFormData, (state, { generalStyles, components }) => ({
    ...state,
    generalStyles: { ...generalStyles },
    components: [...components] 
  })
  )
)
