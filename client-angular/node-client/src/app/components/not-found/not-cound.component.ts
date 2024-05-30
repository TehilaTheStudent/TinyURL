import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'not-found-component',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit(): void {
        setTimeout(() => {
            this.router.navigate(['/home']);
        }, 3000);
    }

}