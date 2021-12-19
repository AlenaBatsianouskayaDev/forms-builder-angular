import { ActionReducerMap, MetaReducer} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {  routerReducer } from '@ngrx/router-store';

import { initialAuthState, authReducers } from './auth/auth.reducers';
import { initialFormBuilderState, formBuilderReducers } from './formBuilder/formBuilder.reducers';
import { IAppState } from './reducers.interfaces';


export const initialAppState: IAppState = {
  auth: initialAuthState,
  formBuilder: initialFormBuilderState,
}

export function getInitialState(): IAppState{
  return initialAppState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  auth: authReducers,
  formBuilder: formBuilderReducers,
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];