import { createAction, props } from '@ngrx/store';

import { IRequestData, IAccessData, IErrorData } from '../reducers.interfaces';


export const registerRequest = createAction(
  '[AUTH] registerRequest',
  props<IRequestData>()
);
export const registerSuccess = createAction(
  '[AUTH] registerSuccess',
  props<IAccessData>()
);
export const registerError = createAction(
  '[AUTH] registerError',
  props<IErrorData>()
);

export const loginRequest = createAction(
  '[AUTH] loginRequest',
  props<IRequestData>()
);
export const loginSuccess = createAction(
  '[AUTH] loginSuccess',
  props<IAccessData>()
);
export const loginError = createAction(
  '[AUTH] loginError',
  props<IErrorData>()
);

export const logoutRequest = createAction(
  '[AUTH] logoutRequest'
);
export const logoutSuccess = createAction(
  '[AUTH] logoutSuccess'
);
export const logoutError = createAction(
  '[AUTH] logoutError',
  props<IErrorData>()
);