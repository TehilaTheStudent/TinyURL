import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";
import { IError } from "../../models/error.interface";
import { LinkModel } from "../../models/link.model";


export const getCurrentUserActions=createActionGroup({
    source:'getCurrentUserActions source',
    events:{
        getCurrentUserFromServer:emptyProps(),
        getCurrentUserSuccess:props<{user:UserModel}>(),
        getCurrentUserFailure:props<{error:IError}>()
    }
})


export const getCurrentUserLinksActions=createActionGroup({
    source:'getCurrentUserLinksActions source',
    events:{
        getCurrentUserLinksFromServer:emptyProps(),
        getCurrentUserLinksSuccess:props<{links:LinkModel[]}>(),
        getCurrentUserLinksFailure:props<{error:IError}>()
    }
})

export const clearErrorAction=createAction(
    'clearErrorAction type'
)

export const clearStateAction=createAction(
    'clearStateAction type'
)