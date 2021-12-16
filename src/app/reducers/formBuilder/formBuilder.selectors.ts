import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormBuilderState } from "./formBuilder.reducers";

const getFeature = createFeatureSelector<FormBuilderState>('formBuilder');

export const getFormElement = createSelector(
  getFeature, (state: FormBuilderState) => state.components)

export const getCurrentElementName = createSelector(
  getFormElement, (components) => {
    const currentElement = components.find(item => item.isCurrentElement === true);
    if (!currentElement) {
      return;
    }
    return currentElement.name;
  }
)

export const getCurrentElementId = createSelector(
  getFormElement, (components) => {
    const currentElement = components.find(item => item.isCurrentElement === true);
    if (!currentElement) {
      return ;
    }
    return currentElement.id;
  }
)

export const getCurrentElementStyles = createSelector(
  getFormElement, (components) => {
    const currentElement = components.find(item => item.isCurrentElement === true);
    if (!currentElement) {
      return;
    }
    return currentElement;
  }
)

export const getGeneralStyles = createSelector(
  getFeature, (state: FormBuilderState) => state.generalStyles
)