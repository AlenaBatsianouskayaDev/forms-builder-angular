import { assertNotNull } from "@angular/compiler/src/output/output_ast";
import { createReducer, on } from "@ngrx/store";
import { registerRequest, registerSuccess, registerError, loginRequest, loginSuccess, loginError, logoutRequest, logoutSuccess, logoutError } from "./auth.actions";

export interface AuthState {
  username: string,
  token: string,
  isLoading: boolean,
  error: string,
}

export const initialAuthState: AuthState = {
  username: '',
  token: '',
  isLoading: false,
  error: '',
}

export const authReducers = createReducer(
  initialAuthState,
  on(registerRequest, state => ({ ...state, isLoading: true })),
  on(loginRequest, state => ({ ...state, isLoading: true })),
  on(logoutRequest, state => ({ ...state, isLoading: true })),

  on(registerSuccess, (state, {username, token}) => ({ ...state, username, token, isLoading: false, error: '' })),
  on(loginSuccess, (state, {username, token}) => ({ ...state, username, token, isLoading: false, error: '' })),

  on(logoutSuccess, (state) => ({ ...state, username: '', token: '', isLoading: false })),
  
  on(registerError, (state, { error }) => ({ ...state, error })),
  on(loginError, (state, { error }) => ({ ...state, error })),
  on(logoutError, (state, {error}) => ({...state, error}))
);