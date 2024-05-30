import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { ExpansionPanelComponent } from "../components/styled-components/expansion-panel/expansion-panel.component";
import { CommonModule } from "@angular/common";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { UsersTableComponent } from "../components/styled-components/users-table/users-table.component";
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [
        ExpansionPanelComponent,
        UsersTableComponent
    ],
    imports: [MatExpansionModule,
        CommonModule,
        ClipboardModule,
        MatIconModule,
        MatListModule,
        CdkTableModule,
        MatTableModule
    ],
    exports: [
        ExpansionPanelComponent
        , UsersTableComponent,
    ]
})
export class StandaloneComponentsModule { }