import { createReducer, on } from "@ngrx/store";
import { IError } from "../../models/error.interface";
import { UserModel } from "../../models/user.model";
import * as adminActions from '../actions/admin.actions'
import { LinkModel } from "../../models/link.model";

export interface IAdminState {
    users: UserModel[],
    links: LinkModel[],
    error: IError | null,
    loading: boolean
}

const initialState: IAdminState = {
    users: [],
    links: [],
    error: null,
    loading: false
}

export const adminReducer = createReducer(
    initialState,
    on(adminActions.clearErrorAction, (state, action) => {
        return { ...state, error: null }
    }),
    on(adminActions.clearStateAction, (state, action) => {
        return { users: [], links: [], error: null, loading: false }
    }),
    on(adminActions.getAllLinksActions.getAllLinksSuccess, (state, action) => {
        return { ...state, links: action.links, error: null, loading: false }
    }),
    on(adminActions.getAllUsersActions.getAllUsersSuccess, (state, action) => {
        return { ...state, users: action.users, error: null, loading: false }
    }),
    on(adminActions.getAllLinksActions.getAllLinksFailure, (state, action) => {
        return { ...state,loading: false,  error: { ...action.error, failedAction: 'adminActions.getAllLinksActions.' } }
    }),
    on(adminActions.getAllUsersActions.getAllUsersFailure, (state, action) => {

        return { ...state,  loading: false,error: { ...action.error, failedAction: 'adminActions.getAllLinksActions.' } }
    }),
    on(adminActions.getAllLinksActions.getAllLinksFromServer, (state, action) => {
        return { ...state, loading: true, error: null }
    }),
    on(adminActions.getAllUsersActions.getAllUsersFromServer, (state, action) => {
        return { ...state, loading: true, error: null }
    })
)

