import { NgModule } from "@angular/core";
import { ViewLinkComponent } from "../components/charts-components/view-link/view-link.component";
import { CommonModule } from "@angular/common";
import { ChartsService } from "../services/charts.service";
import { ViewUserComponent } from "../components/charts-components/view-user/view-user.component";

@NgModule({
    declarations:[ViewLinkComponent,ViewUserComponent] ,
    exports:[ViewLinkComponent,ViewUserComponent],
    imports:[CommonModule],
    providers:[ChartsService]
})
export class AdminOrUserModule{

}