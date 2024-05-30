import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'user-home-component',
  templateUrl: './user-home.component.html',
  styleUrl: 'user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  public lineChart: any;
  public barChart: any;
  public bubbleChart: any
  ngOnInit(): void {
    // Chart.register(...registerables)
    // this.createChart()
  }
  // createChart() {

  //   // this.barChart = new Chart("MyBarChart", {
  //   //   type: 'bar', //this denotes tha type of chart

  //   //   data: {// values on X-Axis
  //   //     labels: ['label1', 'label2', 'label3'],
  //   //     datasets: [
  //   //       {
  //   //         label: "datasets1-label",
  //   //         data: ['467', '576', '572', '79', '92',
  //   //           '574', '573', '576'],
  //   //         backgroundColor: 'blue'
  //   //       },
  //   //       {
  //   //         label: "datasets2-label",
  //   //         data: ['542', '542', '536', '327', '17',
  //   //           '0.00', '538', '541'],
  //   //         backgroundColor: 'limegreen'
  //   //       }
  //   //     ]
  //   //   },
  //   //   options: {
  //   //     aspectRatio: 2.5
  //   //   }

  //   // });


  //   this.lineChart = new Chart("MyLineChart", {
  //     type: 'line', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['label1', 2, 3, 4],//each dataset-data has label in lebels
  //       datasets: [
  //         {
  //           // label: "dataset-lavel",
  //           data: [1, 2, 3, 4],
  //           // backgroundColor: 'blue'
  //         },

  //       ]
  //     },
  //     options: {
  //       aspectRatio: 5
  //     }

  //   });

  //   const data5 = this.generateFakeData(200);

  //   this.bubbleChart = new Chart("MyBubbleChart", {
  //     type: 'bubble',
  //     options: {
  //       aspectRatio: 3,
  //       scales: {
  //         x: {
  //           max: 100,
  //           ticks: {
  //             callback: value => `${Number(value) / 100} m`
  //           }
  //         },
  //         y: {
  //           max: 100,
  //           ticks: {
  //             callback: value => `${Number(value) / 100} m`
  //           }
  //         }
  //       }
  //     },
  //     data: {
  //       labels: data5.map(x => x.year),
  //       datasets: [
  //         {
  //           label: 'dataset1',
  //           data: data5.filter(v => v.height > v.width && !(Math.abs(v.height - v.width) < 10)).map(row => ({
  //             x: row.width,
  //             y: row.height,
  //             r: row.count
  //           })),
  //           // backgroundColor:'lightblue'
  //         },
  //         {
  //           label: 'dataset2',
  //           data: data5.filter(v => v.height < v.width && !(Math.abs(v.height - v.width) < 10)).map(row => ({
  //             x: row.width,
  //             y: row.height,
  //             r: row.count
  //           })),
  //           // backgroundColor:'purple'
  //         }, {
  //           label: 'dataset3',
  //           data: data5.filter(v => Math.abs(v.height - v.width) < 10).map(row => ({
  //             x: row.width,
  //             y: row.height,
  //             r: row.count
  //           })),
  //           // backgroundColor:'orange'
  //         },
  //       ]
  //     }
  //   })

  // }
  // // Generate fake data
  // generateFakeData(numPoints: number) {
  //   const data = [];
  //   for (let i = 0; i < numPoints; i++) {
  //     data.push({
  //       year: `202${i % 10}`, // Fake years from 2020 to 2029
  //       width: Math.floor(Math.random() * 100), // Random width between 0 and 100
  //       height: Math.floor(Math.random() * 100), // Random height between 0 and 100
  //       count: Math.floor(Math.random() * 10) + 5 // Random count between 5 and 25
  //     });
  //   }
  //   return data;
  // }
}