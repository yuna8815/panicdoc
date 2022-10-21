import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'smd-weekly-score-chart',
  templateUrl: './smd-weekly-score-chart.component.html',
  styleUrls: ['./smd-weekly-score-chart.component.scss'],
})
export class SmdWeeklyScoreChartComponent implements OnInit {

  @Input() stepSize = 1;
  @Input('labels') set setLabels(labels: string[]) {
    this.lineChartData.datasets[0].label = labels[0];
    this.lineChartData.datasets[1].label = labels[1];
    this.lineChartData.datasets[2].label = labels[2];
  }
  @Input('yStep') set setYStep(val: number) {
    this.lineChartOptions.scales.y['suggestedMax'] = val * 8;
    this.lineChartOptions.scales.y.ticks['stepSize'] = val;
  }
  @Input('xLabels') set setXLabels(labels: string[]) {
    this.lineChartData.labels = labels;
  }

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        data: [ 7, 6, 6, 6, 5, 5, 5 ],
        label: '불안함',
        fill: false,
        borderColor: '#FF456B',
        pointBackgroundColor: 'white',
        pointBorderColor: '#FF456B',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      {
        data: [ 6, 5, 4, 4.5, 4, 4, 7, 3 ],
        label: '우울함',
        fill: false,
        borderColor: '#FFDF95',
        pointBackgroundColor: 'white',
        pointBorderColor: '#FFDF95',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      {
        data: [ 5, 5, 4, 3, 2, 4, 2 ],
        label: '통제력 상실에 대한 걱정',
        fill: false,
        borderColor: '#8066D6',
        pointBackgroundColor: 'white',
        pointBorderColor: '#8066D6',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 8,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        grid: {
          display: false
        },
      },
    },

    responsive: false,

  };
  plugins = [
  ];

  constructor() {
  }

  ngOnInit() {}

}
