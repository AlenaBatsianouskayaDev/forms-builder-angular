import { createAction } from '@ngrx/store';

export const registerRequest = createAction('[AUTH] registerRequest');
export const registerSuccess = createAction('[AUTH] registerSuccess');
export const registerError = createAction('[AUTH] registerError');

export const loginRequest = createAction('[AUTH] loginRequest');
export const loginSuccess = createAction('[AUTH] loginSuccess');
export const loginError = createAction('[AUTH] loginError');

export const logoutRequest = createAction('[AUTH] logoutRequest');
export const logoutSuccess = createAction('[AUTH] logoutSuccess');
export const logoutError = createAction('[AUTH] logoutError');

export const getCurrentUserRequest = createAction('[AUTH] getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('[AUTH] getCurrentUserSuccess');
export const getCurrentUserError = createAction('[AUTH] getCurrentUserError');
