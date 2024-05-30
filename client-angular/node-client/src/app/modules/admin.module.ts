import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "../components/admin-components/admin-dashboard/admin-dashboard.component";
import { AdminRoutingModule } from "../routing/admin-routing.module";
import { AdminHomeComponent } from "../components/admin-components/admin-home/admin-home.component";
import { ViewAllUsersComponent } from "../components/admin-components/view-all-users/view-all-users.component";
import {  ViewAllLinksComponent } from "../components/admin-components/view-all-links/view-all-links.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { adminReducer } from "../stateManagement/reducers/admin.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AdminEffects } from "../stateManagement/effects/admin.effects";
import { AdminService } from "../services/admin.service";
import { StyledComponentsModule } from "./styled-components.module";
import { AdminOrUserModule } from "./adminOrUser.module";
import { StandaloneComponentsModule } from "./standalone-components.module.ts";

 
@NgModule({
    declarations:[
        AdminDashboardComponent,
        AdminHomeComponent,
        ViewAllUsersComponent,
        ViewAllLinksComponent,
    ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        HttpClientModule,
        // StoreModule.forFeature("adminState",adminReducer),
        // EffectsModule.forFeature(AdminEffects),
        StyledComponentsModule, 
        AdminOrUserModule,
        StandaloneComponentsModule
    ],
    providers:[AdminService],
    exports:[]
})
export class AdminModule{}