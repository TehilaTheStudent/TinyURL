import { Component, OnInit } from "@angular/core";
import { ICombinedStates } from "../../../stateManagement/reducers/reducer-index";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { IError } from "../../../models/error.interface";
import { UserModel } from "../../../models/user.model";
import * as adminSelectors from '../../../stateManagement/selectors/admin.selector'
import * as adminActions from '../../../stateManagement/actions/admin.actions'

@Component({
    selector: 'view-all-users-component',
    templateUrl: './view-all-users.component.html'
})
export class ViewAllUsersComponent implements OnInit {
    constructor(
        private store: Store<ICombinedStates>
    ) { }
    fetched:boolean=false
    ngOnInit(): void {
        this.adminLoadingObservable=this.store.pipe(select(store=>store.adminState.loading))
        this.adminErrorObservable = this.store.select(adminSelectors.errorSelector)
        this.users = this.store.select(adminSelectors.usersSelector)
        this.store.select(adminSelectors.usersSelector).subscribe(users => {
            if (users.length == 0&&!this.fetched) {
                this.fetched=true
                this.store.dispatch(adminActions.getAllUsersActions.getAllUsersFromServer())
            }
        })
    }
    
    users!: Observable<UserModel[]>
    adminErrorObservable?: Observable<IError | null>
    adminLoadingObservable?:Observable<boolean>
}