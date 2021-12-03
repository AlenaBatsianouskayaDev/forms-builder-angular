import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducers";

const getFeature = createFeatureSelector<AuthState>('auth');

export const getUsername = createSelector(
  getFeature, state => state.username);

export const getToken = createSelector(
  getFeature, state => state.token);

export const getError = createSelector(
  getFeature, state => state.error);
  
export const isAuth = createSelector(
  getToken, token => !!token);

export const isLoading = createSelector(
  getFeature, state => state.isLoading);

