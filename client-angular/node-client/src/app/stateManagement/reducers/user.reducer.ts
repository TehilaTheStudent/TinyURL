import { createReducer, on } from "@ngrx/store";
import { IError } from "../../models/error.interface";
import { LinkModel } from "../../models/link.model";
import { UserModel } from "../../models/user.model";
import * as userActions from '../actions/user.actions'


export interface IUserState {
    currentUser: UserModel | null,
    currentUserLinks: LinkModel[],
    error: IError | null,
    loading: boolean
}

const initialState: IUserState = {
    currentUser: null,
    currentUserLinks: [],
    error: null,
    loading: false
}

export const userReducer = createReducer(
    initialState,
    on(userActions.clearErrorAction, (state, action) => {
        return { ...state, error: null }
    }),
    on(userActions.clearStateAction, (state, action) => {
        return { currentUser: null, currentUserLinks: [], error: null, loading: false }
    }),
    on(userActions.getCurrentUserActions.getCurrentUserSuccess, (state, action) => {
        return { ...state, currentUser: action.user, error: null, loading: false }
    }),
    on(userActions.getCurrentUserActions.getCurrentUserFailure, (state, action) => {
        return { ...state, error: {...action.error,failedAction:'userActions.getCurrentUserActions'}, loading: false }
    }),
    on(userActions.getCurrentUserLinksActions.getCurrentUserLinksSuccess, (state, action) => {
        return { ...state, currentUserLinks: action.links, error: null, loading: false }
    }),
    on(userActions.getCurrentUserLinksActions.getCurrentUserLinksFailure, (state, action) => {
        return { ...state, error:{... action.error,failedAction:'userActions.getCurrentUserLinksActions'}, loading: false }
    }),
    on(userActions.getCurrentUserActions.getCurrentUserFromServer, (state, action) => {
        return { ...state, error: null, loading: true }
    }),
    on(userActions.getCurrentUserLinksActions.getCurrentUserLinksFromServer, (state, action) => {
        return { ...state, error: null, loading: true }
    })

)