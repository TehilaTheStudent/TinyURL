import { Injectable } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from '../actions/user.actions'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class UserEffects {
    constructor(
        private userService: UserService,
        private actions: Actions
    ) { }

    getCurrentUserEffect = createEffect(
        () => {
            return this.actions.pipe(
                ofType(userActions.getCurrentUserActions.getCurrentUserFromServer),
                mergeMap(
                    () => {
                        return this.userService.getUserByToken().pipe(
                            map(userFromServer => {
                                return userActions.getCurrentUserActions.getCurrentUserSuccess({ user: userFromServer })
                            }),
                            catchError(errorFromServer => {
                                return of(userActions.getCurrentUserActions.getCurrentUserFailure({ error: errorFromServer }))
                            })
                        )
                    }
                )
            )
        }
    )

    getCurrentUserLinksEffect = createEffect(
        () => {
            return this.actions.pipe(
                ofType(userActions.getCurrentUserLinksActions.getCurrentUserLinksFromServer),
                mergeMap(
                    () => {
                        return this.userService.getUserLinks().pipe(
                            map(linksFromServer => {
                                return userActions.getCurrentUserLinksActions.getCurrentUserLinksSuccess({ links: linksFromServer })
                            }),
                            catchError(errorFromServer => {
                                return of(userActions.getCurrentUserLinksActions.getCurrentUserLinksFailure({ error: errorFromServer }))
                            })
                        )
                    }
                )
            )
        }
    )
}