import { createReducer, on } from "@ngrx/store";
import {formSetupChange} from "./formBuilder.actions";

export interface FormBuilderState {
  placeholderText: string,
  width: string,
  height: string,
  required: string,
  borderStyle: string,
  fontSize: string,
  fontWeight: string,
  color: string,
}

export const initialFormBuilderState: FormBuilderState = {
  placeholderText: '',
  width: '',
  height: '',
  required: '',
  borderStyle: '',
  fontSize: '',
  fontWeight: '',
  color: '',
}

export const formBuilderReducers = createReducer(
  initialFormBuilderState,
  on(formSetupChange, (state, { placeholderText, width, height, required, borderStyle, fontSize, fontWeight, color }) => ({
    ...state,
    placeholderText: placeholderText,
    width: width,
    height: height,
    required: required,
    borderStyle: borderStyle,
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
  })),
);