import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "../reducers/user.reducer";


const featureSelector=createFeatureSelector<IUserState>('userState')

export const currentUserSelector=createSelector(
    featureSelector,
    (state=>{return state.currentUser})
)

export const linksSelector=createSelector(
    featureSelector,
    (state=>{return state.currentUserLinks})
)

export const errorSelector=createSelector(
    featureSelector,
    (state=>{return state.error})
)

export const loadingSelector=createSelector(
    featureSelector,
    (state=>{return state.loading})
)