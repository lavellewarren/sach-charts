import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {

    chart: {
      type: 'area'
    },
    title: {
        text: 'UK & Ireland Electricity Production & Demand Projection (Per Fuel Type)',
        align: 'left'
    },
    xAxis: {
        tickmarkPlacement: 'on',
        title: {
            text: ''
        },
        min: 2020,
        lineWidth: 1,
        lineColor: "#aaa",
        tickWidth: 0
    },
    yAxis: {
      title: {
          text: 'MWh(1,000s)'
      },
      min: 0,
      lineWidth: 1,
      lineColor: "#aaa"
  },
  legend: {
        symbolRadius: 0
    },
    tooltip: {
        split: false,
        valueSuffix: ' millions'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        },
        line: {
            pointStart: 2020,
            lineWidth: 3
        },
        area: {
            pointStart: 2020,
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        type: 'area',
        name: 'Wind',
        data: [0.3, 0.32, 0.34, 0.3, 0.2, 0.15, 0.1]
    }, {
        type: 'area',
        name: 'Coal',
        data: [0.2, 0.1, 0, null, null, null, null]
    }, {
        type: 'area',
        name: 'Gas',
        data: [1.1, 1, 0.5, 0.2, 0, null, null]
    }, {
        type: 'area',
        name: 'Hydro',
        data: [0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4]
    }, {
        type: 'area',
        name: 'Nuclear',
        data: [0.8, 0.7, 0.7, 0.6, 0.6, 0.6, 0.6]
    }, {
        type: 'area',
        name: 'Oil',
        data: [0.05, 0.05, 0.02, 0, null, null, null]
    }, {
        type: 'area',
        name: 'Solar',
        data: [0.2, 0.3, 0.4, 0.9, 1.3, 1.7, 2.1]
    }, {
        type: 'area',
        name: 'Bio',
        data: [1, 1.2, 1.4, 2.4, 3.8, 4.6, 5.4]
    }, {
        type: 'area',
        name: 'Waste',
        data: [1, 1.2, 1, 1.2, 1, 1.2, 1.2]
    }, {
        type: 'line',
        name: 'Region Electricity',
        data: [3.5, 3.6, 4, 5.5, 6.5, 7.7, 8.3]
    }]
  };
}
