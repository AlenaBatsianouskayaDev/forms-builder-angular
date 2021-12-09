import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  USER_PROVIDED_META_REDUCERS
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { AuthState, initialAuthState, authReducers } from './auth/auth.reducers';
import { FormBuilderState, initialFormBuilderState, formBuilderReducers } from './formBuilder/formBuilder.reducers';


export interface AppState {
  router?: RouterReducerState,
  auth: AuthState,
  formBuilder: FormBuilderState,
}

export const initialAppState: AppState = {
  auth: initialAuthState,
  formBuilder: initialFormBuilderState,
}

export function getInitialState(): AppState{
  return initialAppState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  auth: authReducers,
  formBuilder: formBuilderReducers,
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];