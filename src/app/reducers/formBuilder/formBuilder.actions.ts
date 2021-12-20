import { createAction, props } from '@ngrx/store';

import {
  IFormFieldData,
  IGeneralStylesData,
  IFormFieldName,
  IFormFieldId,
  IFormFieldOrder,
  IFormFieldForDelete,
  IFormBuilderState
} from '../reducers.interfaces';


export const addFormFieldStyles = createAction(
  '[FORMBUILDER] addFormFieldStyles',
  props< IFormFieldData >()
);

export const addGeneralStylesData = createAction(
  '[FORMBUILDER] addGeneralStylesData',
  props< IGeneralStylesData >()
)

export const addFormField = createAction(
  '[FORMBUILDER] addFormField',
  props< IFormFieldName >()
)

export const setCurrentField = createAction(
  '[FORMBUILDER] setCurrentField',
  props< IFormFieldId >()
)

export const changeFieldsOrder = createAction(
  '[FORMBUILDER] changeFieldsOrder',
  props< IFormFieldOrder >()
)

export const deleteFormField = createAction(
  '[FORMBUILDER] deleteFormField',
  props< IFormFieldForDelete >()
)

export const addFullFormData = createAction(
  '[FORMBUILDER] addFullFormData',
  props< IFormBuilderState >()
)




