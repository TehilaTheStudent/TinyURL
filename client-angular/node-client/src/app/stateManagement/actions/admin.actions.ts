import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";
import { IError } from "../../models/error.interface";
import { LinkModel } from "../../models/link.model";


export const getAllUsersActions=createActionGroup({
    source:'getUsersActions Source',
    events:{
        getAllUsersFromServer:emptyProps(),
        getAllUsersSuccess:props<{users:UserModel[]}>(),
        getAllUsersFailure:props<{error:IError}>()
    }
})

export const getAllLinksActions=createActionGroup({
    source:'getAllLinksActions Source',
    events:{
        getAllLinksFromServer:emptyProps(),
        getAllLinksSuccess:props<{links:LinkModel[]}>(),
        getAllLinksFailure:props<{error:IError}>()
    }
})


export const clearErrorAction=createAction(
    'clearErrorAction type'
)

export const clearStateAction=createAction(
    'clearStateAction type'
)