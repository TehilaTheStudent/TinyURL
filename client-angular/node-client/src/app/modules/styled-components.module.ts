import { NgModule } from "@angular/core";
import { ErrorComponent } from "../components/styled-components/error/error.component";
import { CommonModule } from "@angular/common";
import { ProgressSpinnerComponent } from "../components/styled-components/progress-spinner/progress-spinner.component";
import { DividedListComponent } from "../components/styled-components/divided-list/divided-list.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
    declarations: [ErrorComponent],
    imports: [
        MatGridListModule,
        CommonModule,
        ProgressSpinnerComponent,
        DividedListComponent,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatGridListModule,
        ErrorComponent,
        ProgressSpinnerComponent,
        DividedListComponent,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule
    ],
    providers: []
})
export class StyledComponentsModule {

}