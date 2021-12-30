import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IAuthState } from "../reducers.interfaces";

const getFeature = createFeatureSelector<IAuthState>('auth');

export const getUsername = createSelector(
  getFeature, (state) => state.username
);

export const getToken = createSelector(
  getFeature, (state: IAuthState) => state.token
);

export const isAuth = createSelector(
  getToken, token => !!token
);

export const getError = createSelector(
  getFeature, (state: IAuthState) => state.error
);

export const isLoading = createSelector(
  getFeature, (state: IAuthState) => state.isLoading
);
