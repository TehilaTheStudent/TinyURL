import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Chart, registerables } from "chart.js";
import { ChartsService } from "../../../services/charts.service";

@Component({
    selector: 'view-user-component',
    templateUrl: 'view-user.component.html',
    styleUrl:'view-user.component.css'
})
export class ViewUserComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private chartsService: ChartsService
    ) { }
    barChart: any
    ngOnInit(): void {
        Chart.register(...registerables)
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (paramMap.has('id')) {
                this.userId = paramMap.get('id')
            }
            if (this.userId == null) {
                //this is user
                this.chartsService.getCHartsByUserIdFromToken().subscribe(
                    (response => {
                        this.createChart(response.data)
                    }),
                    (error => {
                        debugger
                    })
                )
            }
            else {
                //this is adnin
                this.chartsService.getCHartsByUserIdFromUserId(this.userId).subscribe(
                    response => {
                        this.createChart(response.data)
                    },
                    error => {
                        debugger
                    }
                )
            }
        })
    }
    userId?: string | null


    createChart(data: any) {
        this.barChart = new Chart('barChart', {
            type: 'bar',
            data: data,
            options: {
                aspectRatio: 2
            }
        })
    }

}

