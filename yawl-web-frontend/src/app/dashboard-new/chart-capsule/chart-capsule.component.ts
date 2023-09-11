import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  ChartTypeRegistry,
  Colors,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  TimeScale,
  Tooltip
} from "chart.js";
import 'chartjs-adapter-date-fns';

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-chart-capsule',
  templateUrl: './chart-capsule.component.html',
  styleUrls: ['./chart-capsule.component.css']
})
export class ChartCapsuleComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('canvasElement') canvasElement!: any;

  @Input('type') type: keyof ChartTypeRegistry | undefined;
  @Input('datasets') datasets: any | undefined;
  @Input('labels') labels: any | undefined;
  @Input('options') options: any | undefined;

  chart: Chart<any, any, any> | undefined;

  constructor() {
    Chart.register(Colors, TimeScale, BubbleController, LinearScale, PointElement, Tooltip,
      CategoryScale, BarController, BarElement, Legend, RadarController, RadialLinearScale, LineElement, Filler, LineController);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.chart === undefined) {
      this.tryInstantiateChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart === undefined) {
      //this.tryInstantiateChart();
    } else {
      this.tryUpdateChart();
    }
  }

  tryInstantiateChart(): void {
    if (this.canvasElement !== undefined && this.type !== undefined && this.datasets !== undefined && this.options !== undefined) {
      this.chart = new Chart(this.canvasElement.nativeElement, {
        type: this.type,
        data: {datasets: this.datasets, labels: this.labels},
        options: this.options
      })
    }
  }

  tryUpdateChart(): void {
    if (this.canvasElement !== undefined && this.chart !== undefined && this.type !== undefined && this.datasets !== undefined && this.options !== undefined) {
      this.chart.config.data = {labels: this.labels, datasets: this.datasets}
      this.chart.config.options = this.options;
      this.chart.update();
    }
  }


}
