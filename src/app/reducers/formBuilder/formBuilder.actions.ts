import { createAction, props } from '@ngrx/store';
import { IElementStyles, IElementData, IGeneralStylesData } from '../interfaces';

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

export const changeElementsOrder = createAction(
  '[FORMBUILDER] changeElementsOrder',
  props<{ prevIndex: number, currentIndex: number }>()
)

export const deleteElement = createAction(
  '[FORMBUILDER] deleteElement',
  props<{ id: string }>()
)

export const addGeneralStyles = createAction(
  '[FORMBUILDER] addGeneralStyles',
  props< IGeneralStylesData >()
)