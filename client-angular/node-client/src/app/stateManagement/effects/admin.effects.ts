import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AdminService } from "../../services/admin.service";
import * as adminActions from '../actions/admin.actions'
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class AdminEffects {
    constructor(
        private actions: Actions,
        private adminServie: AdminService
    ) { }

    getAllUsersEffect = createEffect(
        () => {
            return this.actions.pipe(
                ofType(adminActions.getAllUsersActions.getAllUsersFromServer),
                mergeMap(
                    () => {
                        return this.adminServie.getAllUsers().pipe(
                            map(usersFromServer => {
                                return adminActions.getAllUsersActions.getAllUsersSuccess({ users: usersFromServer })
                            }),
                            catchError(errorFromServer => {
                                return of(adminActions.getAllUsersActions.getAllUsersFailure({ error: errorFromServer }))
                            })
                        )
                    }
                )
            )
        }
    )

    getAllLinksEffect = createEffect(
        () => {
            return this.actions.pipe(
                ofType(adminActions.getAllLinksActions.getAllLinksFromServer),
                mergeMap(
                    () => {
                        return this.adminServie.getAllLinks().pipe(
                            map(linksFromServer => {
                                return adminActions.getAllLinksActions.getAllLinksSuccess({ links: linksFromServer })
                            }),
                            catchError(errorFromServer => {
                                return of(adminActions.getAllLinksActions.getAllLinksFailure({ error: errorFromServer }))
                            })
                        )
                    }
                )
            )
        }
    )
}