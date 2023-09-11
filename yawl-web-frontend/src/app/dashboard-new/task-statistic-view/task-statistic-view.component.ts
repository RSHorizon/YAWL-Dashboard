import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {FormControl, FormGroup} from "@angular/forms";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {Resource} from "../../yawl/resources/entities/resource.entity";
import {StatisticUtils} from "../../common/util/statistic-utils";
import {ChartConfiguration} from "chart.js";
import {TaskStatisticChartConfigurations} from "./task-statistic-chart-configurations";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-task-statistic-view',
  templateUrl: './task-statistic-view.component.html',
  styleUrls: ['./task-statistic-view.component.css']
})
export class TaskStatisticViewComponent implements OnInit, OnChanges {
  @Input("specificationDataContainer") specificationDataContainer!: SpecificationDataContainer;
  @Input("specificTaskStatistic") specificTaskStatistic!: string;
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
    end: new FormControl<Date | null>(new Date(Date.now())),
  });

  // Config
  loaded = false;
  fineness = 'month';
  casesInRange = 0;
  statisticTicks: { year: number, month: number }[] = [];

  // Specific statistics
  avgCompletionTimeOverPeriodsOptions = TaskStatisticChartConfigurations.avgCompletionTimeOverPeriodsOptions(this.fineness === 'month');
  avgCompletionTimeOverPeriodsData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  resourceAvgPerformanceOptions = TaskStatisticChartConfigurations.resourceAvgPerformanceOptions(this.fineness === 'month');
  resourceAvgPerformanceData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  resourcesProcessedInstancesOptions = TaskStatisticChartConfigurations.resourcesProcessedInstancesOptions(this.fineness === 'month');
  resourcesProcessedInstancesData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateOnlyStatisticData();
  }

  ngOnInit(): void {
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processCasesInRange();
    this.loaded = true;
  }

  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processCasesInRange();
  }

  updateOnlyStatisticData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processSpecificTaskStatistics();
    this.processCasesInRange();
  }

  processSpecificTaskStatistics(): void {
    if (this.specificTaskStatistic === '') {
      return;
    }
    let resourceMap: Map<String, Resource> = new Map<String, Resource>();
    this.specificationDataContainer.resources.forEach(resource => {
      resourceMap.set(resource.id, resource);
    })
    let allStarts: Map<number, {
      durations: number[],
      resources: Map<String, { resource: Resource, number: number, durations: number[] }>
    }> = new Map();
    let data: Map<number, Map<string, { resource: Resource, durations: number[] }>> = new Map();
    this.statisticTicks.forEach((tick) => {
      allStarts.set((this.fineness === 'month') ? tick.month : tick.year, {durations: [], resources: new Map()});
      data.set((this.fineness === 'month') ? tick.month : tick.year, new Map());
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let startDate = new Date(caseStatistic.start);
        let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(),
          startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0)
          .getTime();
        let figures = allStarts.get(yearMonthID)!;
        let resourceFigures = data.get(yearMonthID)!;
        caseStatistic.workitemDTOS.forEach(workitem => {
          if (workitem.taskid === this.specificTaskStatistic
            && !workitem.cancelled && workitem.status === 'Completed') {
            figures.durations.push(workitem.resourceTime);
            Object.entries(workitem.resources).forEach(entry => {
              if (entry[0] !== "system") {
                let isRelevant = false;
                for (let event of entry[1]) {
                  if (event === "Start" || event === "Complete") {
                    isRelevant = true;
                    break;
                  }
                }
                if (isRelevant) {
                  if (!resourceFigures.has(entry[0])) {
                    resourceFigures.set(entry[0], {resource: resourceMap.get(entry[0])!, durations: []});
                  }
                  resourceFigures.get(entry[0])!.durations.push(workitem.resourceTime);


                  if (!figures.resources.has(entry[0])) {
                    figures.resources.set(entry[0], {resource: resourceMap.get(entry[0])!, number: 0, durations: []});
                  }
                  let resourceEntry = figures.resources.get(entry[0])!;
                  figures.resources.set(entry[0],
                    {
                      resource: resourceEntry.resource,
                      number: resourceEntry.number + 1,
                      durations: [...resourceEntry.durations, workitem.resourceTime]
                    })
                }
              }
            })
          }
        })
      }
    })
    let taskStatistic: TaskStatistic = this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS
      .filter(taskStatistic => taskStatistic.taskid === this.specificTaskStatistic).at(0)!;

    let avgCompletionTimeOverPeriodsLabels: number[] = [];
    let avgCompletionTimeOverPeriods: number[] = [];
    let resourceAvgPerformanceLabels: string[] = [];
    let resourceAvgPerformance: number[] = [];
    let resourcesProcessedInstancesLabels: string[] = [];
    let resourcesProcessedInstances: number[] = [];
    let resourcePerformance: Map<string, { durations: number[] }> = new Map();
    data.forEach((resourceMap, tick) => {
      let allDurations: number[] = [];
      resourceMap.forEach((figures, resource) => {
        allDurations.push(...figures.durations);
        let label = figures.resource.firstname + " " + figures.resource.lastname;
        if (!resourcePerformance.has(label)) {
          resourcePerformance.set(label, {durations: []});
        }
        resourcePerformance.get(label)!.durations.push(...figures.durations);
      })
      const sum = allDurations.reduce((a, b) => a + b, 0);
      const avg = (sum / allDurations.length) || 0;
      avgCompletionTimeOverPeriodsLabels.push(tick);
      avgCompletionTimeOverPeriods.push(avg);
    })

    resourcePerformance.forEach((value, label) => {
      resourceAvgPerformanceLabels.push(label);
      resourcesProcessedInstancesLabels.push(label);
      resourceAvgPerformance.push(value.durations.reduce((a, b) => a + b) / value.durations.length || 0);
      resourcesProcessedInstances.push(value.durations.length);
    })

    this.avgCompletionTimeOverPeriodsData.labels = avgCompletionTimeOverPeriodsLabels;
    this.avgCompletionTimeOverPeriodsData.datasets = [];
    this.avgCompletionTimeOverPeriodsData.datasets.push({
      data: avgCompletionTimeOverPeriods,
      label: "Average completion time",
      backgroundColor: taskStatistic.color!
    })

    this.resourceAvgPerformanceData.labels = resourceAvgPerformanceLabels;
    this.resourceAvgPerformanceData.datasets = [];
    this.resourceAvgPerformanceData.datasets.push({
      data: resourceAvgPerformance,
      label: "Average completion time",
      backgroundColor: taskStatistic.color!
    })

    this.resourcesProcessedInstancesData.labels = resourcesProcessedInstancesLabels;
    this.resourcesProcessedInstancesData.datasets = [];
    this.resourcesProcessedInstancesData.datasets.push({
      data: resourcesProcessedInstances,
      label: "Instances",
      backgroundColor: taskStatistic.color!
    })

    console.log(this.avgCompletionTimeOverPeriodsData);

  }


  processCasesInRange(): void {
    this.casesInRange = 0;
    this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        this.casesInRange++;
      }
    })
  }

}
