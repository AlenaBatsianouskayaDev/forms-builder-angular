import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormBuilderState } from "./formBuilder.reducers";

const getFeature = createFeatureSelector<FormBuilderState>('formBuilder');

export const getPlaceholderText = createSelector(
  getFeature, (state: FormBuilderState) => state.placeholderText);

export const getWidth = createSelector(
  getFeature, (state: FormBuilderState) => state.width);

export const getHeight = createSelector(
  getFeature, (state: FormBuilderState) => state.height);
  
export const isRequired = createSelector(
  getFeature, (state: FormBuilderState) => state.required);

export const getBorderStyle = createSelector(
  getFeature, (state: FormBuilderState) => state.borderStyle);

export const getFontSize = createSelector(
  getFeature, (state: FormBuilderState) => state.fontSize);

export const getFontWeight = createSelector(
  getFeature, (state: FormBuilderState) => state.fontWeight);
  
export const getColor = createSelector(
  getFeature, (state: FormBuilderState) => state.color);

export const getStyles = createSelector(
  getFeature, (state: FormBuilderState) => state)

  
    