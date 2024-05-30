import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ChartsService } from "../../../services/charts.service";
import { Chart ,registerables} from "chart.js";

@Component({
    selector: 'view-link-component',
    templateUrl: './view-link.component.html',
    styleUrl:'view-link.component.css'
})
export class ViewLinkComponent implements OnInit {
    constructor( 
        private activatedRoute: ActivatedRoute,
        private chartsService: ChartsService
    ) { }
    linkId: string | null = null
    pieChart: any
    ngOnInit(): void {
        Chart.register(...registerables)

        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (paramMap.has("id")) {
                this.linkId = paramMap.get('id')
            }
        })
        if (this.linkId != null) {
            this.chartsService.getChartByLinkId(this.linkId).subscribe(
                (response => {
                    if (response.data)
                        this.createChart(response.data)
                }),
                (error => {
                    debugger
                })
            )

        }
    }

    createChart(data: any) {
        this.pieChart = new Chart("pieChart", {
            type: 'pie', //this denotes tha type of chart
            data: data,
            options: {
                aspectRatio: 2
            }
        });


    }

}