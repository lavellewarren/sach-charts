import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

let rawData = [
    [
        [1500, 2300, 2500, 2000, null, null, null, null],
        [null, null, null, 2000, null, null, null, 2100],
        [null, null, null, 2300, null, null, null, null],
        [null, null, null, 2300, null, null, null, 1800],
        [null, null, null, 2300, null, null, null, 1200]
    ], [
        [1200, 1300, 2000, 2300, null, null, null, null],
        [null, null, null, 2300, null, null, null, 2700],
        [null, null, null, 2500, null, null, null, null],
        [null, null, null, 2500, null, null, null, 1800],
        [null, null, null, 2500, null, null, null, 2000]
    ], [
        [1800, 1300, 2000, 2500, null, null, null, null],
        [null, null, null, 2500, null, null, null, 2300],
        [null, null, null, 2200, null, null, null, null],
        [null, null, null, 2200, null, null, null, 3000],
        [null, null, null, 2200, null, null, null, 1500]
    ],
];

let yearStart = [2010, 2020, 2030];

let seriesMetaData : Array<Highcharts.SeriesLineOptions> = [
    {
        type: "line",
        name: 'Issuer Historic',
        dashStyle: 'Solid'
    }, {
        type: 'line',
        name: 'Issuer Projection',
        dashStyle: 'Dash'
    }, {
        type: 'line',
        name: 'Oil & Gas Median',
        color: '#4098ef',
        marker: {
            enabled: true,
            width: 50,
            height: 50,
            radius: 6,
            symbol: 'circle'
        },
        dashStyle: 'Solid'
    }, {
        type: 'line',
        name: '2\'C Gas Production Benchmark',
        dashStyle: 'Dash'
    }, {
        type: 'line',
        name: '4\'C Gas Production Benchmark',
        dashStyle: 'Dash'
    }
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {
    Highcharts: typeof Highcharts = Highcharts;
    updateFlag = false;
    active_id : number = 0;
    initChart(type: number) {
        this.active_id = type;
        this.chartOptions.series = seriesMetaData.map((one, idx) => {
            return {...one, data: rawData[type][idx].slice(), pointStart: yearStart[type]};
        });
        this.updateFlag = true;
    }
    
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
        tooltip: {
            borderColor: '#dbdde1',
            useHTML: true,
            formatter: function() {
                return '<div style="color:#767c86;line-height:1.5;">' + this.point.x + '</div>'
                +'<div style="color:#555759;line-height:1.5;">' + this.series.name + '</div>'
                +'<div style="color:#555759;font-weight:900;line-height:1.5;">' + this.point.y + 'tCO2eq/$M' + '</div>'
                +'<div style="color:#555759;line-height:1.5;">Historical Avg Decarbonization Rate</div>'
                +'<div style="color:#555759;line-height:1.5;">-1.5%</div>'
            }
        },
        plotOptions: {
            series: {
                label: {
                    enabled: false
                },
                connectNulls: true,
                marker: {
                    enabled: false
                }
            }
        },
        series: []
    };

    constructor() {
        this.initChart(0);
    }
}
