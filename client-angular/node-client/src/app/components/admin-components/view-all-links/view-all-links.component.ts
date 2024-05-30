import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ICombinedStates } from "../../../stateManagement/reducers/reducer-index";
import { Observable } from "rxjs";
import { LinkModel } from "../../../models/link.model";
import { IError } from "../../../models/error.interface";

import * as adminActions from '../../../stateManagement/actions/admin.actions'
import * as adminSelectors from '../../../stateManagement/selectors/admin.selector'

@Component({
    selector: 'view-all-links-component',
    templateUrl: './view-all-links.component.html'
})
export class ViewAllLinksComponent implements OnInit {
    constructor(
        private store: Store<ICombinedStates>
    ) { }

    //TODO; deal with no data option (no users, no links)
    fetched:boolean=false
    ngOnInit(): void {
        this.adminLoadingObservable=this.store.pipe(select(store=>store.adminState.loading))
        this.adminErrorObservable = this.store.select(adminSelectors.errorSelector)
        this.links = this.store.select(adminSelectors.linksSelector)
        this.store.select(adminSelectors.linksSelector).subscribe(links => {
            if (links.length == 0&&!this.fetched) {
                this.fetched=true
                this.store.dispatch(adminActions.getAllLinksActions.getAllLinksFromServer())
            }
        })
    }

    links?: Observable<LinkModel[]>
    adminErrorObservable?: Observable<IError | null>
    adminLoadingObservable?:Observable<boolean>
}