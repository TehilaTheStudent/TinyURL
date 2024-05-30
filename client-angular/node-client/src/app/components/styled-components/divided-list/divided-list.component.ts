import { Component, ElementRef, Input, ViewChild, } from "@angular/core";
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LinkModel } from "../../../models/link.model";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { MatCardModule } from '@angular/material/card';
import { StyledComponentsModule } from "../../../modules/styled-components.module";
import { StandaloneComponentsModule } from "../../../modules/standalone-components.module.ts";

@Component({
    selector: 'divided-list-component',
    templateUrl: './divided-list.component.html',
    styleUrl: './divided-list.component.css',
    standalone: true,
    imports: [ 
        StandaloneComponentsModule,
        MatListModule,
        MatDividerModule,
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        ClipboardModule,
        MatCardModule,
        // StyledComponentsModule
    ],
})
export class DividedListComponent {
    constructor(
        private clipBoard: Clipboard,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }
    @Input()
    linkInput!: LinkModel[] | null


    @Input()
    routeInput: string = ''

    @ViewChild('copy')
    reactiveButton!: ElementRef

    onCopyLink(link: string, matIcon: MatIcon) {
        matIcon._elementRef.nativeElement.innerHTML = "check "
        this.clipBoard.copy(link);
        setTimeout(() => {
            matIcon._elementRef.nativeElement.innerHTML = "content_copy "
        }, 1000);
    }
    onGoToLink(linkId: string, event: Event) {
        if (event.target == event.currentTarget) {
            this.router.navigate([this.routeInput,linkId])  
        }
    }
}