import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormBuilderState } from "./formBuilder.reducers";

const getFeature = createFeatureSelector<FormBuilderState>('formBuilder');

export const getPlaceholderText = createSelector(
  getFeature, state => state.placeholderText);

export const getWidth = createSelector(
  getFeature, state => state.width);

export const getHeight = createSelector(
  getFeature, state => state.height);
  
export const isRequired = createSelector(
  getFeature, state => state.required);

export const getBorderStyle = createSelector(
  getFeature, state => state.borderStyle);

export const getFontSize = createSelector(
  getFeature, state => state.fontSize);

export const getFontWeight = createSelector(
  getFeature, state => state.fontWeight);
  
export const getColor = createSelector(
  getFeature, state => state.color);
  
    