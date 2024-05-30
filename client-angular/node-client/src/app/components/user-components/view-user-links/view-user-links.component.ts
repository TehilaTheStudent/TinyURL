import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ICombinedStates } from "../../../stateManagement/reducers/reducer-index";
import { Observable } from "rxjs";
import { IError } from "../../../models/error.interface";
import { LinkModel } from "../../../models/link.model";
import * as userActions from '../../../stateManagement/actions/user.actions'
import * as userSelectors from '../../../stateManagement/selectors/user.selector'
@Component({
    selector: 'view-user-links-component',
    templateUrl: './view-user-links.component.html'
})
export class ViewUserLinksComponent implements OnInit {
    constructor(
        private store: Store<ICombinedStates>
    ) { }
    fetched:boolean=false
    ngOnInit(): void {
        this.userLoadingObservable=this.store.pipe(select(store=>store.userState.loading))
        this.userErrorObservable = this.store.pipe(select(store=>store.userState.error))
        this.links = this.store.select(userSelectors.linksSelector)
        this.store.select(userSelectors.linksSelector).subscribe(links => {
            if (links.length == 0&&!this.fetched) {
                this.fetched=true
                this.store.dispatch(userActions.getCurrentUserLinksActions.getCurrentUserLinksFromServer())
            }
        })
    }

    links?: Observable<LinkModel[]>
    userErrorObservable?: Observable<IError | null>
    userLoadingObservable?:Observable<boolean>

}