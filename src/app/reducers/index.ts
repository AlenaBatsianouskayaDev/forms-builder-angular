import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  USER_PROVIDED_META_REDUCERS
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userNode, UserState,userReducer } from './auth/user.reducer';

export interface State {
  [userNode]: UserState;
}

export const reducers: ActionReducerMap<State> = {
  [userNode]: userReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
