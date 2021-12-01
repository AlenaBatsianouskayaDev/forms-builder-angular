import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userNode, UserState } from "./user.reducer";

const selectUserFeature = createFeatureSelector<UserState>(userNode);

export const selectUser = createSelector(selectUserFeature, (state:UserState): string => state.user)
