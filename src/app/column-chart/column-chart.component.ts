import {
	Component
} from '@angular/core';
import * as Highcharts from 'highcharts';
interface ExtendedRenderer extends Highcharts.SVGRenderer {
	path(path?: any): Highcharts.SVGElement;
}

let rawData: [number, number, number] = [4.5, 3.3, 1.5];

@Component({
	selector: 'app-column-chart',
	templateUrl: './column-chart.component.html',
	styleUrls: ['./column-chart.component.css']
})

export class ColumnChartComponent {
	Highcharts: typeof Highcharts = Highcharts;
	chartOptions1: Highcharts.Options = {
		chart: {
			backgroundColor: 'transparent',
			type: 'column',
			width: 240,
			height: 200,
			marginLeft: 90,
			marginRight: 90,
			marginTop: 0,
			marginBottom: 0,
			spacing: [0],
			events: {
				load: function() {
				}
			}
		},
		title: undefined,
		subtitle: undefined,
		caption: undefined,
		plotOptions: {
			series: {
				dataGrouping: {
					enabled: false
				},
				borderWidth: 0,
				events: {
					afterAnimate: function() {
						let ren = this.chart.renderer as ExtendedRenderer;
						let textStyle1 = {fontSize: '14px', color: '#888e96'};
						let textStyle2 = {fontSize: '12px', color: '#757c86'};
						let textStyle3 = {fontSize: '15px', color: '#42474c', fontWeight: '700'};
						let lineStyle1 = {'stroke-width': 0.5, fill: undefined, stroke: '#b1b5bc', zIndex: 10};
						let lineStyle2 = {'stroke-width': 0.5, fill: undefined, stroke: '#2a3cec', dashstyle: 'dash', zIndex: 10};
						let lineStyle3 = {'stroke-width': 1, fill: undefined, stroke: '#767d86', zIndex: 10};

						ren.text("Year 2030", 20, 50).css(textStyle1).add();
						ren.text("3.3°C", 55, 97).css(textStyle2).add();
						ren.text("2°C", 64, 128).css(textStyle2).add();
						ren.text("Paris", 56, 152).css(textStyle2).add();
						ren.text("Agreement", 25, 168).css(textStyle2).add();
						ren.path(['M', 135, 135, 'L', 55, 135]).attr(lineStyle1).add();
						ren.path(['M', 97, 155, 'L', 97, 167]).attr(lineStyle3).add();
						ren.path(['M', 97, 167, 'L', 95, 164]).attr(lineStyle3).add();
						ren.path(['M', 97, 167, 'L', 100, 164]).attr(lineStyle3).add();

						let py = 43 + 17 * (5 - rawData[0]) / 0.5;
						ren.text(rawData[0] + "°C", 155, py).css(textStyle3).add();
						ren.text("Misaligned", 155, py + 20).css(textStyle2).add();
						ren.path(['M', 155, py + 25, 'L', 215, py + 25]).attr(lineStyle2).add();
					}
				}
			},
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled: false
		},
		xAxis: {
			lineWidth: 0,
			labels: {
				enabled: false,
			},
			tickWidth: 0,
		},
		yAxis: {
			min: 0,
			max: 5,
			floor: 0,
			ceiling: 5,
			gridLineWidth: 0,
			title: {
				text: ''
			},
			labels: {
				enabled: false,
			},
			plotLines: [{
				color: 'transparent',
				width: 2,
				zIndex: 10,
				value: 0.76
			}]
		},
		series: [{
			type: 'column',
			color: '#f1f2f4',
			pointPlacement: 0,
			linkedTo: 'main',
			data: [5],
			grouping: false,
			name: 'back'
		}, {
			type: 'column',
			grouping: false,
			color: {
				linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
				stops: [
					[0, '#b54e25'],
					[0.33, '#eb5c2b'],
					[0.66, '#f3ab88'],
					[1, '#f9dbcc']
				]
			},
			name: '2016',
			id: 'main',
			dataSorting: {
				enabled: true,
				matchByName: true
			},
			data: [rawData[0]]
		}],
		credits: {
			enabled: false
		}
	};
	chartOptions2: Highcharts.Options = {
		chart: {
			backgroundColor: 'transparent',
			type: 'column',
			width: 240,
			height: 200,
			marginLeft: 90,
			marginRight: 90,
			marginTop: 0,
			marginBottom: 0,
			spacing: [0]
		},
		title: undefined,
		subtitle: undefined,
		caption: undefined,
		plotOptions: {
			series: {
				dataGrouping: {
					enabled: false
				},
				borderWidth: 0,
				events: {
					afterAnimate: function() {
						let ren = this.chart.renderer as ExtendedRenderer;
						let textStyle1 = {fontSize: '14px', color: '#888e96'};
						let textStyle2 = {fontSize: '12px', color: '#757c86'};
						let textStyle3 = {fontSize: '15px', color: '#42474c', fontWeight: '700'};
						let lineStyle1 = {'stroke-width': 0.5, fill: undefined, stroke: '#b1b5bc', zIndex: 10};
						let lineStyle2 = {'stroke-width': 0.5, fill: undefined, stroke: '#2a3cec', dashstyle: 'dash', zIndex: 10};
						let lineStyle3 = {'stroke-width': 1, fill: undefined, stroke: '#767d86', zIndex: 10};

						ren.text("Year 2040", 20, 50).css(textStyle1).add();
						ren.text("3.3°C", 55, 97).css(textStyle2).add();
						ren.text("2°C", 64, 128).css(textStyle2).add();
						ren.text("Paris", 56, 152).css(textStyle2).add();
						ren.text("Agreement", 25, 168).css(textStyle2).add();
						ren.path(['M', 135, 135, 'L', 55, 135]).attr(lineStyle1).add();
						ren.path(['M', 97, 155, 'L', 97, 167]).attr(lineStyle3).add();
						ren.path(['M', 97, 167, 'L', 95, 164]).attr(lineStyle3).add();
						ren.path(['M', 97, 167, 'L', 100, 164]).attr(lineStyle3).add();

						let py = 43 + 17 * (5 - rawData[1]) / 0.5;
						ren.text("Above " + rawData[1] + "°C", 155, py).css(textStyle3).add();
						ren.text("Misaligned", 155, py + 20).css(textStyle2).add();
						ren.path(['M', 155, py + 25, 'L', 215, py + 25]).attr(lineStyle2).add();
					}
				}
			},
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled: false
		},
		xAxis: {
			lineWidth: 0,
			labels: {
				enabled: false,
			},
			tickWidth: 0,
		},
		yAxis: {
			min: 0,
			max: 5,
			floor: 0,
			ceiling: 5,
			gridLineWidth: 0,
			title: {
				text: ''
			},
			labels: {
				enabled: false,
			},
			plotLines: [{
				color: 'transparent',
				width: 2,
				zIndex: 10,
				value: 0.76
			}]
		},
		series: [{
			type: 'column',
			color: '#f1f2f4',
			pointPlacement: 0,
			linkedTo: 'main',
			data: [5],
			grouping: false,
			name: 'back'
		}, {
			type: 'column',
			grouping: false,
			color: {
				linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
				stops: [
					[0, '#b54e25'],
					[0.33, '#eb5c2b'],
					[0.66, '#f3ab88'],
					[1, '#f9dbcc']
				]
			},
			name: '2016',
			id: 'main',
			dataSorting: {
				enabled: true,
				matchByName: true
			},
			data: [rawData[1]]
		}],
		credits: {
			enabled: false
		}
	};
	chartOptions3: Highcharts.Options = {
		chart: {
			backgroundColor: 'transparent',
			type: 'column',
			width: 240,
			height: 200,
			marginLeft: 90,
			marginRight: 90,
			marginTop: 0,
			marginBottom: 0,
			spacing: [0]
		},
		title: undefined,
		subtitle: undefined,
		caption: undefined,
		plotOptions: {
			series: {
				dataGrouping: {
					enabled: false
				},
				borderWidth: 0,
				events: {
					afterAnimate: function() {
						let ren = this.chart.renderer as ExtendedRenderer;
						let textStyle1 = {fontSize: '14px', color: '#888e96'};
						let textStyle2 = {fontSize: '12px', color: '#757c86'};
						let textStyle3 = {fontSize: '15px', color: '#42474c', fontWeight: '700'};
						let lineStyle1 = {'stroke-width': 0.5, fill: undefined, stroke: '#b1b5bc', zIndex: 10};
						let lineStyle2 = {'stroke-width': 0.5, fill: undefined, stroke: '#2a3cec', dashstyle: 'dash', zIndex: 10};
						let lineStyle3 = {'stroke-width': 1, fill: undefined, stroke: '#767d86', zIndex: 10};

						ren.text("Year 2050", 20, 50).css(textStyle1).add();
						ren.text("3.3°C", 55, 97).css(textStyle2).add();
						ren.text("2°C", 64, 128).css(textStyle2).add();
						ren.text("Paris", 56, 152).css(textStyle2).add();
						ren.text("Agreement", 25, 168).css(textStyle2).add();
						ren.path(['M', 135, 135, 'L', 55, 135]).attr(lineStyle1).add();
						ren.path(['M', 97, 155, 'L', 97, 167]).attr(lineStyle3).add();
						ren.path(['M', 97, 167, 'L', 95, 164]).attr(lineStyle3).add();
						ren.path(['M', 97, 167, 'L', 100, 164]).attr(lineStyle3).add();

						let py = 43 + 17 * (5 - rawData[2]) / 0.5;
						ren.text("Below " + rawData[2] + "°C", 155, py).css(textStyle3).add();
						ren.text(rawData[2] + "° Aligned", 155, py + 20).css(textStyle2).add();
						ren.path(['M', 155, py + 25, 'L', 223, py + 25]).attr(lineStyle2).add();
					}
				}
			},
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled: false
		},
		xAxis: {
			lineWidth: 0,
			labels: {
				enabled: false,
			},
			tickWidth: 0,
		},
		yAxis: {
			min: 0,
			max: 5,
			floor: 0,
			ceiling: 5,
			gridLineWidth: 0,
			title: {
				text: ''
			},
			labels: {
				enabled: false,
			},
			plotLines: [{
				color: 'transparent',
				width: 2,
				zIndex: 10,
				value: 0.76
			}]
		},
		series: [{
			type: 'column',
			color: '#f1f2f4',
			pointPlacement: 0,
			linkedTo: 'main',
			data: [5],
			grouping: false,
			name: 'back'
		}, {
			type: 'column',
			grouping: false,
			color: {
				linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
				stops: [
					[0, '#b54e25'],
					[0.33, '#eb5c2b'],
					[0.66, '#f3ab88'],
					[1, '#f9dbcc']
				]
			},
			name: '2016',
			id: 'main',
			dataSorting: {
				enabled: true,
				matchByName: true
			},
			data: [rawData[2]]
		}],
		credits: {
			enabled: false
		}
	};
}
