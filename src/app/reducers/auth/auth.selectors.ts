import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducers";

const getFeature = createFeatureSelector<AuthState>('auth');

export const getUsername = createSelector(
  getFeature, (state: AuthState) => state.username);

export const getToken = createSelector(
  getFeature, (state: AuthState) => state.token);

export const getError = createSelector(
  getFeature, (state: AuthState) => state.error);
  
export const isAuth = createSelector(
  getToken, token => !!token);

export const isLoading = createSelector(
  getFeature, (state: AuthState) => state.isLoading);

