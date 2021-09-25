import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bullet-chart',
  templateUrl: './bullet-chart.component.html',
  styleUrls: ['./bullet-chart.component.css']
})
export class BulletChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions1: Highcharts.Options = {
    chart: {
      inverted: false,
      type: 'bullet',
      width: 200,
      height: 200,
      marginLeft: 100,
      marginRight: 80
    },
    legend: {
        enabled: false
    },
    title: {
  		  text: '2030',
        align: 'left',
        verticalAlign: 'top',
        y: 40,
        style: {
          fontSize: '16px',
          fontWeight: '600'
        }  
    },
    credits: {
        enabled: false
    },
    xAxis: {
        visible: false,
    },
    yAxis: {
        tickInterval: 2,
        plotBands: [{
          from: 0,
          to: 5,
          color: '#fff'
        }],
        title: {
          text: ''
        },
        labels: {
          formatter: function() {
            return this.value + '°C';
          }
        },
        gridLineWidth: 0,
        max: 6,
        min: 0
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, '#b04d25'],
              [0.4, '#ee723d'],
              [0.5, '#ffffff'],
              [0.6, '#6fb8f3'],
              [1, '#26649f']
          ]
        },
        events: {
          afterAnimate: function() {
            var chart = this.chart;
            var dataMax = this.dataMax ? this.dataMax : 6;
            var dataMin = this.dataMin ? this.dataMin : 0;
            if (dataMin == 0 || dataMax == 0) return;

            var px = 130;
            var py = 45 + (chart.chartHeight - 54) * (dataMax - dataMin) / dataMax;
            var label = chart.renderer.text("> " + dataMin + '°C', px, py)
              .css({
                fontSize: '16px',
                color: '#333',
                fontWeight: '900'
              })
              .add();
          }
        }
      },
      bullet: {
        targetOptions: {
          width: '33px',
          color: '#575d65',
          borderColor: '#dbdde1',
          borderWidth: 1,
          height: 5
        }
      }
    },
    tooltip: {
      enabled: false
    },
    series: [{
      type: 'bullet',
      data: [{
        y: 6,
        target: 3.3
      }]
    }]
  };
  chartOptions2: Highcharts.Options = {
    chart: {
      inverted: false,
      type: 'bullet',
      width: 200,
      height: 200,
      marginLeft: 100,
      marginRight: 80
    },
    legend: {
        enabled: false
    },
    title: {
  		  text: '2040',
        align: 'left',
        verticalAlign: 'top',
        y: 40,
        style: {
          fontSize: '16px',
          fontWeight: '600'
        }  
    },
    credits: {
        enabled: false
    },
    xAxis: {
        visible: false,
    },
    yAxis: {
        tickInterval: 2,
        plotBands: [{
          from: 0,
          to: 5,
          color: '#fff'
        }],
        title: {
          text: ''
        },
        labels: {
          formatter: function() {
            return this.value + '°C';
          }
        },
        gridLineWidth: 0,
        max: 6,
        min: 0
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, '#b04d25'],
              [0.4, '#ee723d'],
              [0.5, '#ffffff'],
              [0.6, '#6fb8f3'],
              [1, '#26649f']
          ]
        },
        events: {
          afterAnimate: function() {
            var chart = this.chart;
            var dataMax = this.dataMax ? this.dataMax : 6;
            var dataMin = this.dataMin ? this.dataMin : 0;
            if (dataMin == 0 || dataMax == 0) return;

            var px = 130;
            var py = 45 + (chart.chartHeight - 54) * (dataMax - dataMin) / dataMax;
            var label = chart.renderer.text(dataMin + '°C', px, py)
              .css({
                fontSize: '16px',
                color: '#333',
                fontWeight: '900'
              })
              .add();
          }
        }
      },
      bullet: {
        targetOptions: {
          width: '33px',
          color: '#575d65',
          borderColor: '#dbdde1',
          borderWidth: 1,
          height: 5
        }
      }
    },
    tooltip: {
      enabled: false,
    },
    series: [{
      type: 'bullet',
      data: [{
        y: 6,
        value: 2.5,
        target: 2.5
      }]
    }]
  };
  chartOptions3: Highcharts.Options = {
    chart: {
      inverted: false,
      type: 'bullet',
      width: 200,
      height: 200,
      marginLeft: 100,
      marginRight: 80
    },
    legend: {
        enabled: false
    },
    title: {
  		  text: '2050',
        align: 'left',
        verticalAlign: 'top',
        y: 40,
        style: {
          fontSize: '16px',
          fontWeight: '600'
        }  
    },
    credits: {
        enabled: false
    },
    xAxis: {
        visible: false,
    },
    yAxis: {
        tickInterval: 2,
        plotBands: [{
          from: 0,
          to: 5,
          color: '#fff'
        }],
        title: {
          text: ''
        },
        labels: {
          formatter: function() {
            return this.value + '°C';
          }
        },
        gridLineWidth: 0,
        max: 6,
        min: 0
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, '#b04d25'],
              [0.4, '#ee723d'],
              [0.5, '#ffffff'],
              [0.6, '#6fb8f3'],
              [1, '#26649f']
          ]
        },
        events: {
          afterAnimate: function() {
            var chart = this.chart;
            var dataMax = this.dataMax ? this.dataMax : 6;
            var dataMin = this.dataMin ? this.dataMin : 0;
            if (dataMin == 0 || dataMax == 0) return;

            var px = 130;
            var py = 45 + (chart.chartHeight - 54) * (dataMax - dataMin) / dataMax;
            var label = chart.renderer.text("< -" + dataMin + '°C', px, py)
              .css({
                fontSize: '16px',
                color: '#333',
                fontWeight: '900'
              })
              .add();
          }
        }
      },
      bullet: {
        targetOptions: {
          width: '33px',
          color: '#575d65',
          borderColor: '#dbdde1',
          borderWidth: 1,
          height: 5
        }
      }
    },
    tooltip: {
      enabled: false
    },
    series: [{
      type: 'bullet',
      data: [{
        y: 6,
        target: 1.8
      }]
    }]
  };
}
