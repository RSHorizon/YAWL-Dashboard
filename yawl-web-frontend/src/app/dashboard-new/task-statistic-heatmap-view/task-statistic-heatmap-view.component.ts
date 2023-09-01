import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormatUtils} from "../../common/util/format-util";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {FormControl, FormGroup} from "@angular/forms";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {StatisticUtils} from "../../common/util/statistic-utils";
@Component({
  selector: 'app-task-statistic-heatmap-view',
  templateUrl: './task-statistic-heatmap-view.component.html',
  styleUrls: ['./task-statistic-heatmap-view.component.css']
})
export class TaskStatisticHeatmapViewComponent implements OnInit, OnChanges {
  @Input("specificationDataContainer") specificationDataContainer!: SpecificationDataContainer;
  @Input("specificTaskStatistic") specificTaskStatistic!: string;
  statisticSelection = new FormControl('avgCompletionTime');
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
    end: new FormControl<Date | null>(new Date(Date.now())),
  });
  formatUtils = new FormatUtils();

  // Config
  loaded = false;
  fineness = 'month';
  casesInRange = 0;
  statisticTicks: { year: number, month: number }[] = [];

  // Heat Map
  heatMapData: {name: string, series: {name: string, value: number}[]}[] = [];
  max: any = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateOnlyStatisticData();
  }

  ngOnInit(): void {
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processHeatMapData();
    this.processCasesInRange();
    this.loaded = true;
  }

  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processCasesInRange();
    this.processHeatMapData();
  }

  updateOnlyStatisticData(): void{
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processCasesInRange();
  }

  processHeatMapData(): void{
    this.heatMapData = [];
    this.max = 0;
    let taskStatisticMap: Map<string, TaskStatistic[]> = new Map();
    this.specificationDataContainer?.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      if(!taskStatisticMap.has(taskStatistic.minimalOrder)){
        taskStatisticMap.set(taskStatistic.minimalOrder, []);
      }
      taskStatisticMap.get(taskStatistic.minimalOrder)!.push(taskStatistic);
    });

    taskStatisticMap.forEach((taskStatistics, label) => {
      let heatMapElement: {name: string, series: {name: string, value: number, extra: {statistic: TaskStatistic, statisticSelection: string}}[]} = {
        name: label,
        series: []
      };
      let counter = 1;
      taskStatistics.forEach(taskStatistic => {
        let value = 0;
        switch(this.statisticSelection.value){
          case("avgCompletionTime"):
            value = taskStatistic.avgCompletionTime;
            (value > this.max)? this.max = value : 'nothing' ;
            break;
          case("avgQueueTime"):
            value = taskStatistic.avgQueueTime;
            (value > this.max)? this.max = value : 'nothing' ;
            break;
          case("avgTimeToReach"):
            value = taskStatistic.avgTimeToReach;
            (value > this.max)? this.max = value : 'nothing' ;
            break;
          case("cost"):
            value = (taskStatistic.avgCompletionTime / (1000*60*60)) * taskStatistic.costResourceHour;
            (value > this.max)? this.max = value : 'nothing' ;
            break;
          case("avgInstancesPerCase"):
            value = taskStatistic.avgInstancesPerCase;
            (value > this.max)? this.max = value : 'nothing' ;
            break;
        }
        heatMapElement.series.push({
          name: "" + counter++,
          value: value,
          extra: {
            statistic: taskStatistic,
            statisticSelection: this.statisticSelection.value!
          }
        })
      })
      this.heatMapData.push(heatMapElement);
    });
    this.heatMapData.sort((a, b) => {
        return this.compare(a.name, b.name, true);
    });
  }

  processCasesInRange(): void {
    this.casesInRange = 0;
    this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        this.casesInRange++;
      }
    })
  }

  heatMapTooltipText(data: any){
    let taskStatistic : TaskStatistic = data.cell.extra.statistic;
    let valueString = "";
    if(data.cell.extra.statisticSelection === 'cost' || data.cell.extra.statisticSelection === 'avgInstancesPerCase'){
      valueString = data.cell.value.toFixed(2);
    }else{
      valueString = new FormatUtils().applyPastTimeFormatForTimestampWithDays(data.cell.value)
    }
    return taskStatistic.name + "<br>" + valueString;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
