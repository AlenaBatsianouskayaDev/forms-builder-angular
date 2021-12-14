import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormBuilderState } from "./formBuilder.reducers";

const getFeature = createFeatureSelector<FormBuilderState>('formBuilder');

export const getFormElement = createSelector(
  getFeature, (state: FormBuilderState) => state.components)

// export const getCurrentElementId = createSelector(
//   getFeature, (state: FormBuilderState) => {
//     const a = state.components.find(item => { item.isCurrentElement === true; return item.id })
//     return a
//   }
// ) //TODO: to add selector for checking chosen element