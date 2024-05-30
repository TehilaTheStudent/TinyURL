import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "../components/admin-components/admin-dashboard/admin-dashboard.component";
import { AdminHomeComponent } from "../components/admin-components/admin-home/admin-home.component";
import { ViewAllUsersComponent } from "../components/admin-components/view-all-users/view-all-users.component";
import { ViewAllLinksComponent } from "../components/admin-components/view-all-links/view-all-links.component";
import { ViewLinkComponent } from "../components/charts-components/view-link/view-link.component";
import { ViewUserComponent } from "../components/charts-components/view-user/view-user.component";


const routes: Route[] = [
    {
        path: '', component: AdminDashboardComponent, children: [
            { path: 'home', component: AdminHomeComponent },
            {path:'',redirectTo:'home', pathMatch:'full'},
            {path:'users',component:ViewAllUsersComponent},
            {path:'links',component:ViewAllLinksComponent},
            {path:'link/:id',component:ViewLinkComponent},
            {path:"user/:id",component:ViewUserComponent}
        ]
    }
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}