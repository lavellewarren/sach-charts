import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {

    title: {
      text: 'Issuer Level Alignment Projection',
      align: 'left'
    },
    yAxis: {
        title: {
            text: 'Gas Production (BCF)'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            },
            pointStart: 2015,
            connectNulls: true,
            marker: {
                enabled: false
            }
        },
        // showLegend: true
    },

    series: [{
        type: 'line',
        name: 'Issuer Historic',
        data: [1500, 2300, 2500, 2000, null, null, null, null]
    }, {
        type: 'line',
        name: 'Issuer Projection',
        dashStyle: 'Dash',
        data: [null, null, null, 2000, null, null, null, 2100]
    }, {
        type: 'line',
        name: '2\'C Gas Production Benchmark',
        dashStyle: 'Dash',
        data: [null, null, null, 2000, null, null, null, 1800]
    }, {
        type: 'line',
        name: '4\'C Gas Production Benchmark',
        dashStyle: 'Dash',
        data: [null, null, null, 2000, null, null, null, 1200]
    }]


  };
}
