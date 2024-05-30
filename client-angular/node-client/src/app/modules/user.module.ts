import { NgModule } from "@angular/core";
import { UserDashboardComponent } from "../components/user-components/user-dashboard/user-dashboard.component";
import { UserRoutingModule } from "../routing/user-routing.module";
import { ViewUserLinksComponent } from "../components/user-components/view-user-links/view-user-links.component";
import { UserHomeComponent } from "../components/user-components/user-home/user-home.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "../stateManagement/reducers/user.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "../stateManagement/effects/user.effects";
import { UserService } from "../services/user.service";
import { StyledComponentsModule } from "./styled-components.module";
import { AdminOrUserModule } from "./adminOrUser.module";

@NgModule({
    declarations: [ 
        UserDashboardComponent,
        ViewUserLinksComponent,
        UserHomeComponent,
    ],
    providers: [UserService],
    imports: [ 
        CommonModule,
        UserRoutingModule,
        HttpClientModule,
        // StoreModule.forFeature("userState", userReducer),
        // EffectsModule.forFeature([UserEffects]),
        StyledComponentsModule,
        AdminOrUserModule
    ],
    exports: []
})
export class UserModule { }