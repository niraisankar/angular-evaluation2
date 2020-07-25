import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Map-app';
  private chart: am4charts.PieChart;
  private chart2: am4charts.PieChart;

  constructor(private zone: NgZone) {}

  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): any {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.PieChart);
      const chart2 = am4core.create('chartdiv2', am4charts.PieChart);
      const title1 = chart.titles.create();
      title1.text = 'COMMERCIAL DAMAGE';
      title1.fontSize = 12;
      title1.align = 'center';
      const title2 = chart2.titles.create();
      title2.align = 'center';
      title2.text = 'PUBLIC FACILITIES DAMAGE';
      title2.fontSize = 12;
      chart.data = [{
        value: 42.9
        } , {
        value: 25.8
        }, {
        value: 17.2
        }, {
        value: 14.2
        }
      ];
      chart2.data = [{
        value: 9.1
        } , {
        value: 90.9
        }
      ];

      this.chart = chart;
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'value';
      pieSeries.labels.template.disabled = false;
      pieSeries.ticks.template.disabled = true;
      pieSeries.alignLabels = false;
      pieSeries.labels.template.text = '{value.percent.formatNumber(\'#.0\')}%';
      pieSeries.labels.template.radius = am4core.percent(-40);
      pieSeries.labels.template.fill = am4core.color('white');
      this.chart2 = chart2;
      const pieSeries2 = chart2.series.push(new am4charts.PieSeries());
      pieSeries2.dataFields.value = 'value';
      pieSeries2.labels.template.disabled = false;
      pieSeries2.ticks.template.disabled = true;
      pieSeries2.alignLabels = false;
      pieSeries2.labels.template.text = '{value.percent.formatNumber(\'#.0\')}%';
      pieSeries2.labels.template.radius = am4core.percent(-40);
      pieSeries2.labels.template.fill = am4core.color('white');
    });
  }
}

