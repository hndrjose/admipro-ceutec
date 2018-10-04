import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input('ChartLabels') doughnutChartLabels: string[] = [];
  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';

  // public doughnutChartLabels2: string[] = ['Con Frijoles', 'Con Natilla', 'Con tocino'];
  // public doughnutChartData2: number[] = [24, 30, 46];
  // public doughnutChartType2: string = 'doughnut';

  // public doughnutChartLabels2: string[] = ['Si', 'No'];
  // public doughnutChartData2: number[] = [95, 5];
  // public doughnutChartType2: string = 'doughnut';

  // public doughnutChartLabels3: string[] = ['No', 'Si'];
  // public doughnutChartData3: number[] = [85, 15];
  // public doughnutChartType3: string = 'doughnut';

  constructor() { }


  ngOnInit() {
  }

}
