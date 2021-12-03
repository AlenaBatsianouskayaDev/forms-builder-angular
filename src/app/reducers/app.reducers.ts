import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  USER_PROVIDED_META_REDUCERS
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterReducerState } from '@ngrx/router-store';
import { AuthState, initialAuthState } from './auth/auth.reducers'

import { routerReducer } from "@ngrx/router-store";
import { authReducers } from "./auth/auth.reducers";


export interface AppState {
  router?: RouterReducerState,
  auth: AuthState,
}

export const initialAppState: AppState = {
  auth : initialAuthState,
}

export function getInitialState(): AppState{
  return initialAppState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  auth: authReducers,
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];