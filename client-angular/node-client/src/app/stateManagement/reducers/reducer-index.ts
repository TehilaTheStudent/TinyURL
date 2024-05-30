import { ActionReducerMap } from "@ngrx/store";
import { IAdminState, adminReducer } from "./admin.reducer";
import { IUserState, userReducer } from "./user.reducer";

export interface ICombinedStates{
userState:IUserState,
adminState:IAdminState,
}

export const combinedReducers:ActionReducerMap<ICombinedStates>={
    userState:userReducer,
    adminState:adminReducer
}