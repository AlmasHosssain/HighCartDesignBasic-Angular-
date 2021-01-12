import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-width-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  @Input() data : []
  constructor() { }
  chartOptions : {};
  Highcharts = Highcharts;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
    },
    title: {
        text: 'Result of Research Paper According To The Statistic Of Population'
    },
    subtitle: {
        text: 'Demo Result'
    },
    credits : {
      enabled : false
    },
    exporting : {
      enabled : true
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300);
  }

}
