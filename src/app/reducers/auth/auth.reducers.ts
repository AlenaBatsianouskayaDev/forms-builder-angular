import { createReducer, on } from "@ngrx/store";

import * as authActions from "./auth.actions";
import { IAuthState } from '../reducers.interfaces';


export const initialAuthState: IAuthState  = {
  username: '',
  token: '',
  isLoading: false,
  error: '',
}

export const authReducers = createReducer(
  initialAuthState,
  on(authActions.registerRequest, state => ({
    ...state, isLoading: true
  })),
  on(authActions.loginRequest, state => ({
    ...state, isLoading: true
  })),
  on(authActions.logoutRequest, state => ({
    ...state, isLoading: true
  })),

  on(authActions.registerSuccess, (state, { username, token }) => ({
    ...state, username, token, isLoading: false, error: ''
  })),
  on(authActions.loginSuccess, (state, { username, token }) => ({
    ...state, username, token, isLoading: false, error: ''
  })),

  on(authActions.logoutSuccess, (state) => ({
    ...state, username: '', token: '', isLoading: false
  })),
  
  on(authActions.registerError, (state, { error }) => ({
    ...state, error
  })),
  on(authActions.loginError, (state, { error }) => ({
    ...state, error
  })),
  on(authActions.logoutError, (state, { error }) => ({
    ...state, error
  }))
);