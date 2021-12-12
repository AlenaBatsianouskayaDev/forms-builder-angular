import { createAction, props } from '@ngrx/store';
import { AuthService } from "src/app/services/auth.service";

export const formSetupInputChange = createAction(
  '[FORMBUILDER] formSetupInputChange',
  props<{
    label: string,
    placeholder: string,
    width: string,
    height: string,
    required: boolean,
    borderStyle: string,
    fontSize: string,
    fontWeight: string,
    color: string,
  }>()
);

export const formSetupSelectChange = createAction(
  '[FORMBUILDER] formSetupSelectChange',
  props<{
    label: string,
    placeholder: string,
    width: string,
    height: string,
    required: boolean,
    borderStyle: string,
    fontSize: string,
    fontWeight: string,
    color: string,
  }>()
);

export const formSetupTextareaChange = createAction(
  '[FORMBUILDER] formSetupTextareaChange',
  props<{
    label: string,
    placeholder: string,
    width: string,
    height: string,
    required: boolean,
    borderStyle: string,
    fontSize: string,
    fontWeight: string,
    color: string,
  }>()
);

export const formSetupCheckboxChange = createAction(
  '[FORMBUILDER] formSetupCheckboxChange',
  props<{
    label: string,
    placeholder: string,
    width: string,
    height: string,
    required: boolean,
    borderStyle: string,
    fontSize: string,
    fontWeight: string,
    color: string,
  }>()
);

export const formSetupButtonChange = createAction(
  '[FORMBUILDER] formSetupButtonChange',
  props<{
    label: string,
    placeholder: string,
    width: string,
    height: string,
    required: boolean,
    borderStyle: string,
    fontSize: string,
    fontWeight: string,
    color: string,
  }>()
);

export const addElementToForm = createAction(
  '[FORMBUILDER] addElementToForm',
  props<{
    name: string,
    id: string,
  }>()
)