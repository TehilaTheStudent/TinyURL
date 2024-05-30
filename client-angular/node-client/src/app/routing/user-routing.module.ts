import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "../components/admin-components/admin-dashboard/admin-dashboard.component";
import { UserDashboardComponent } from "../components/user-components/user-dashboard/user-dashboard.component";
import { ViewUserLinksComponent } from "../components/user-components/view-user-links/view-user-links.component";
import { UserHomeComponent } from "../components/user-components/user-home/user-home.component";
import { ViewLinkComponent } from "../components/charts-components/view-link/view-link.component";

const routes:Route[]=[
    {path:'',component:UserDashboardComponent,children:[
        {path:'links',component:ViewUserLinksComponent},
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:UserHomeComponent},
        {path:'link/:id',component:ViewLinkComponent}
    ]}   
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class UserRoutingModule{}