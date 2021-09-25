import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'UK & Ireland Electricity Production Per Fuel Type (as of Base Year)',
      align: 'center',
      verticalAlign: 'top',
      style: {
        fontSize: '20px',
        fontWeight: '600'
      }
      // y: 60
    },
    tooltip: {
      formatter: function() {
        return '<div style="display:flex;">'
                  + '<div style="width: 20px; height: 20px; background: ' + this.point.color + ';"></div>' 
                  + '<div style="margin-left: 15px;font-size:16px;">' +  this.point.name + '&nbsp;&nbsp;<b>' + this.point.percentage + '%</b></div>'
                  + '</div>';
      },
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        size: '100%'
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'pie',
      name: 'Electricity Production Rate',
      innerSize: '75%',
      data: [
        ['Bio', 10],
        ['Coal', 10],
        ['Gas', 35],
        ['Hydro', 5],
        ['Nuclear', 20],
        ['Oil', 1],
        ['Solar', 9],
        ['Waste', 5],
        ['Wind', 5]
      ]
    }]
  
  };
}
