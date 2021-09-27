import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularResizeEventModule } from 'angular-resize-event';
import { HighchartsChartModule } from 'highcharts-angular';
import bulletChart from 'highcharts/modules/bullet';
import * as Highcharts from 'highcharts';
bulletChart(Highcharts);



import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BulletChartComponent } from './bullet-chart/bullet-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    AreaChartComponent,
    PageNotFoundComponent,
    LineChartComponent,
    BulletChartComponent,
  ],
  imports: [
    HighchartsChartModule,
    BrowserModule,
    AngularResizeEventModule,
    RouterModule.forRoot([
      {path: 'pie-chart', component: PieChartComponent},
      {path: 'area-chart', component: AreaChartComponent},
      {path: 'line-chart', component: LineChartComponent},
      {path: 'bullet-chart', component: BulletChartComponent},
      {path: '', redirectTo: '/area-chart', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
