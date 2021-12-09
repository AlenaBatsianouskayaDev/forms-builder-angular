import { createAction, props } from '@ngrx/store';

export const formSetupChange = createAction(
  '[FORMBUILDER] formSetupChange',
  props<{
    placeholderText: string,
    width: string,
    height: string,
    required: string,
    borderStyle: string,
    fontSize: string,
    fontWeight: string,
    color: string,
  }>()
);
