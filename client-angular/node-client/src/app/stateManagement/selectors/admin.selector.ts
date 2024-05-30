import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAdminState } from "../reducers/admin.reducer";


const featureSelector = createFeatureSelector<IAdminState>('adminState')

export const linksSelector = createSelector(
    featureSelector,
    (state: IAdminState) => { return state.links }
)

export const usersSelector = createSelector(
    featureSelector,
    (state: IAdminState) => { return state.users }
)

export const errorSelector = createSelector(
    featureSelector,
    (state: IAdminState) => { return state.error }
)


export const errorSelectloadingSelector = createSelector(
    featureSelector,
    (state: IAdminState) => { return state.loading }
)