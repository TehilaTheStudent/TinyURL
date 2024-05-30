import { Component, Input } from "@angular/core";
import { IError } from "../../../models/error.interface";

@Component({
    selector: 'error-component',
    templateUrl: './error.component.html'
})
export class ErrorComponent {
    @Input()
    error!: IError | null
}