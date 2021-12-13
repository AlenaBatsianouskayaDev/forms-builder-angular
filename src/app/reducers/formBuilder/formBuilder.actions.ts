import { createAction, props } from '@ngrx/store';
import { IElementStyles, IElementData } from '../interfaces';

export const addElementStyles = createAction(
  '[FORMBUILDER] addStylesToElement',
  props< IElementStyles >()
);

export const addFormElement = createAction(
  '[FORMBUILDER] addFormElement',
  props<{ name: string }>()
)

export const setCurrentElement = createAction(
  '[FORMBUILDER] setCurrentElement',
  props<{ id: string }>()
)