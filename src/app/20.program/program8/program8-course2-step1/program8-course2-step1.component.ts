import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'program8-course2-step1',
  templateUrl: './program8-course2-step1.component.html',
  styleUrls: ['./program8-course2-step1.component.scss'],
})
export class Program8Course2Step1Component implements OnInit {

  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['1주차', '8주차'],
    datasets: [
      {
        data: [ 18, 8 ], label: '점수', backgroundColor: '#47b578',
        borderRadius: 5,
      },
    ],
  };
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        },
      },
    },
  };

  panicAttackChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차'],
    datasets: [
      {
        data: [ 18, 12, 8, 12, 6, 10, 6, 4 ], label: '점수', backgroundColor: '#47b578',
        borderRadius: 5,
      },
    ],
  };

  constructor() { }

  ngOnInit() {}

}
