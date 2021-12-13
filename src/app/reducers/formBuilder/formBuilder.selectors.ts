import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormBuilderState } from "./formBuilder.reducers";

const getFeature = createFeatureSelector<FormBuilderState>('formBuilder');

export const getFormElement = createSelector(
  getFeature, (state: FormBuilderState) => state.components)
