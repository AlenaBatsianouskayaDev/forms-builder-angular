import { createAction, props } from '@ngrx/store';

export const registerRequest = createAction(
  '[AUTH] registerRequest',
  props<{username: string, password: string}>()
);
export const registerSuccess = createAction(
  '[AUTH] registerSuccess',
  props<{username: string, token: string}>()
);
export const registerError = createAction(
  '[AUTH] registerError',
  props<{error: string}>()
);

export const loginRequest = createAction(
  '[AUTH] loginRequest',
  props<{username: string, password: string}>()
);
export const loginSuccess = createAction(
  '[AUTH] loginSuccess',
  props<{username: string, token: string}>()
);
export const loginError = createAction(
  '[AUTH] loginError',
  props<{error: string}>()
);

export const logoutRequest = createAction(
  '[AUTH] logoutRequest'
);
export const logoutSuccess = createAction(
  '[AUTH] logoutSuccess'
);
export const logoutError = createAction(
  '[AUTH] logoutError',
  props<{error: string}>()
);