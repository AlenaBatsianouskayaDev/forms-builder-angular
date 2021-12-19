import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IFormBuilderState } from "../reducers.interfaces";

const getFeature = createFeatureSelector<IFormBuilderState>('formBuilder');

export const getFormElement = createSelector(
  getFeature, (state: IFormBuilderState) => state.components)

export const getCurrentElementName = createSelector(
  getFormElement, (components) => {
    const currentElement = components.find(item => item.isCurrentElement === true);
    return currentElement?.name;
  }
)

export const getCurrentElementId = createSelector(
  getFormElement, (components) => {
    const currentElement = components.find(item => item.isCurrentElement === true);
    return currentElement?.id;
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
  getFeature, (state: IFormBuilderState) => state.generalStyles
)

export const getFullFormData = createSelector(
  getFeature, (state: IFormBuilderState) => state
)