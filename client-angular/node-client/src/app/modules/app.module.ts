import { NgModule } from "@angular/core";
import { AppComponent } from "../components/app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../routing/app-routing.module";
import { LoginComponent } from "../components/login/login.component";
import { NotFoundComponent } from "../components/not-found/not-cound.component";
import { HomeComponent } from "../components/home/home.component";
import { AuthService } from "../services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {combinedReducers } from '../stateManagement/reducers/reducer-index'
import { UserEffects } from "../stateManagement/effects/user.effects";
import { AdminEffects } from "../stateManagement/effects/admin.effects";
import { UserService } from "../services/user.service";
import { AdminService } from "../services/admin.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyledComponentsModule } from "./styled-components.module";
 

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forRoot(combinedReducers),
        EffectsModule.forRoot([UserEffects, AdminEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: false, // Restrict extension to log-only mode in production
        }),
        StyledComponentsModule,
    ],
    exports: [],
    providers: [AuthService,UserService,AdminService, provideAnimationsAsync()],
    bootstrap: [AppComponent]
})
export class AppModule {

}