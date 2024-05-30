import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { ChartsService } from "../../../services/charts.service";
@Component({
    selector: 'admin-home-component',
    templateUrl: './admin-home.component.html',
    styleUrl: 'admin-home.component.css' 
})
export class AdminHomeComponent implements OnInit {
    constructor(
        private chartService: ChartsService
    ) { }
    lineChart: any
    ngOnInit(): void {
        Chart.register(...registerables)
        this.chartService.getChartsForUsers().subscribe(response=>{
            this.createChart(response.data)
        },error=>{
            debugger
        })

    }
    createChart(data: any) {
        this.lineChart = new Chart("lineChart", {
            type: 'line', //this denotes tha type of chart
            data: data,
            options: {
                aspectRatio: 2
            }
        });


    }

}