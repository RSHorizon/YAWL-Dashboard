import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormatUtils} from "../../util/format-util";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSort} from "@angular/material/sort";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import * as d3 from "d3";
import {StatisticUtils} from "../../util/statistic-utils";
import {ChartConfiguration} from "chart.js";
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {TaskStatisticChartConfigurations} from "./task-statistic-chart-configurations";

@Component({
  selector: 'app-task-statistic-view',
  templateUrl: './task-statistic-view.component.html',
  styleUrls: ['./task-statistic-view.component.css']
})
export class TaskStatisticViewComponent implements OnInit, OnChanges {
  faCircleInfo=faCircleInfo
  @Input("specificationDataContainer")
  specificationDataContainer!: SpecificationDataContainer;
  @Input("specificTaskStatistic")
  specificTaskStatistic!: string;
  statisticSelection = new FormControl('avgCompletionTime');
  // @ts-ignore
  sort: MatSort;
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
    end: new FormControl<Date | null>(new Date(Date.now())),
  });

  // Config
  loaded = false;
  fineness = 'month';
  statisticResourceSelection = 'role';
  casesInRange = 0;
  statisticTicks: { year: number, month: number }[] = [];

  // Common
  specificationTimeLimit: number = 0;

  // Heat Map
  heatMapData: {name: string, series: {name: string, value: number}[]}[] = [];

  // Specific statistics
  avgCompletionTimeOverPeriodsOptions = TaskStatisticChartConfigurations.avgCompletionTimeOverPeriodsOptions(this.fineness === 'month');
  avgCompletionTimeOverPeriodsData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  participantAvgPerformanceOptions = TaskStatisticChartConfigurations.participantAvgPerformanceOptions(this.fineness === 'month');
  participantAvgPerformanceData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  participantsProcessedInstancesOptions = TaskStatisticChartConfigurations.participantsProcessedInstancesOptions(this.fineness === 'month');
  participantsProcessedInstancesData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  avgCompletionTimeOverPeriods: Object[] = [];
  participantAvgPerformance: Object[] = [];
  participantsProcessedInstances: Object[] = [];
  configuredCapabilities: Object[] = [];
  configuredRoles: Object[] = [];
  configuredPositions: Object[] = [];
  associatedCapabilities: Object[] = [];
  associatedRoles: Object[] = [];
  associatedPositions: Object[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateOnlyStatisticData();
    this.processCasesInRange();
  }

  ngOnInit(): void {
    this.specificationTimeLimit = <number>this.specificationDataContainer?.extensionSpecification.specificationTimeLimit;
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
    this.processSpecificTaskStatistics2();
  }

  processHeatMapData(): void{
    this.heatMapData = [];
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
            break;
          case("avgQueueTime"):
            value = taskStatistic.avgQueueTime;
            break;
          case("avgTimeToReach"):
            value = taskStatistic.avgTimeToReach;
            break;
          case("cost"):
            value = (taskStatistic.avgCompletionTime / (1000*60*60)) * taskStatistic.costResourceHour;
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

  processSpecificTaskStatistics2(): void{
    if(this.specificTaskStatistic === ''){
      return;
    }
    let participantMap: Map<String, Participant> = new Map<String, Participant>();
    this.specificationDataContainer.participants.forEach(participant => {
      participantMap.set(participant.id, participant);
    })
    let allStarts: Map<number, {durations: number[], participants: Map<String,{participant: Participant, number: number, durations: number[]}>}> = new Map();
    let data: Map<number, Map<string, {participant: Participant, durations: number[]}>> = new Map();
    this.statisticTicks.forEach((tick) => {
      allStarts.set((this.fineness === 'month')? tick.month : tick.year, {durations: [], participants: new Map()});
      data.set((this.fineness === 'month')? tick.month : tick.year, new Map());
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let startDate = new Date(caseStatistic.start);
        let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(),
          startDate.getMonth() + 1, 0).getTime() : new Date(startDate.getFullYear(), 1, 0)
          .getTime();
        let figures = allStarts.get(yearMonthID)!;
        let participantFigures = data.get(yearMonthID)!;
        caseStatistic.taskTimingDTOS.forEach(taskTiming => {
          if(taskTiming.taskid === this.specificTaskStatistic
            && !taskTiming.cancelled && taskTiming.status === 'Completed'){
            figures.durations.push(taskTiming.resourceTime);
            Object.entries(taskTiming.participants).forEach(entry => {
              if(entry[0] !== "system") {
                let isRelevant = false;
                for(let event of entry[1]){
                  if(event === "Start" || event === "Complete"){
                    isRelevant = true;
                    break;
                  }
                }
                if(isRelevant){
                  if(!participantFigures.has(entry[0])){
                    participantFigures.set(entry[0], {participant: participantMap.get(entry[0])!, durations: []});
                  }
                  participantFigures.get(entry[0])!.durations.push(taskTiming.resourceTime);


                  if(!figures.participants.has(entry[0])){
                    figures.participants.set(entry[0], {participant: participantMap.get(entry[0])!, number: 0, durations: []});
                  }
                  let participantEntry = figures.participants.get(entry[0])!;
                  figures.participants.set(entry[0],
                    {participant: participantEntry.participant,
                      number: participantEntry.number + 1,
                      durations: [...participantEntry.durations, taskTiming.resourceTime]})
                }
              }
            })
          }
        })
      }
    })
    let taskStatistic : TaskStatistic = this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS
      .filter(taskStatistic => taskStatistic.taskid === this.specificTaskStatistic).at(0)!;

    let avgCompletionTimeOverPeriodsLabels: number[] = [];
    let avgCompletionTimeOverPeriods: number[] = [];
    let participantAvgPerformanceLabels: string[] = [];
    let participantAvgPerformance: number[] = [];
    let participantsProcessedInstancesLabels: string[] = [];
    let participantsProcessedInstances: number[] = [];
    let participantPerformance: Map<string, {durations: number[]}> = new Map();
    data.forEach((participantMap, tick) => {
      let allDurations: number[] = [];
      participantMap.forEach((figures, participant) => {
        allDurations.push(...figures.durations);
        let label = figures.participant.firstname + " " + figures.participant.lastname;
        if(!participantPerformance.has(label)){
          participantPerformance.set(label, {durations: []});
        }
        participantPerformance.get(label)!.durations.push(...figures.durations);
      })
      const sum = allDurations.reduce((a, b) => a + b, 0);
      const avg = (sum / allDurations.length) || 0;
      avgCompletionTimeOverPeriodsLabels.push(tick);
      avgCompletionTimeOverPeriods.push(avg);
    })

    participantPerformance.forEach((value, label) => {
      participantAvgPerformanceLabels.push(label);
      participantsProcessedInstancesLabels.push(label);
      participantAvgPerformance.push(value.durations.reduce((a,b) => a + b) / value.durations.length || 0);
      participantsProcessedInstances.push(value.durations.length);
    })

    this.avgCompletionTimeOverPeriodsData.labels = avgCompletionTimeOverPeriodsLabels;
    this.avgCompletionTimeOverPeriodsData.datasets = [];
    this.avgCompletionTimeOverPeriodsData.datasets.push({
      data: avgCompletionTimeOverPeriods,
      label: "Average completion time",
      backgroundColor: taskStatistic.color!
    })

    this.participantAvgPerformanceData.labels = participantAvgPerformanceLabels;
    this.participantAvgPerformanceData.datasets = [];
    this.participantAvgPerformanceData.datasets.push({
      data: participantAvgPerformance,
      label: "Average completion time",
      backgroundColor: taskStatistic.color!
    })

    this.participantsProcessedInstancesData.labels = participantsProcessedInstancesLabels;
    this.participantsProcessedInstancesData.datasets = [];
    this.participantsProcessedInstancesData.datasets.push({
      data: participantsProcessedInstances,
      label: "Instances",
      backgroundColor: taskStatistic.color!
    })

    console.log(this.avgCompletionTimeOverPeriodsData);

  }


  processSpecificTaskStatistics(): void {
    if(this.specificTaskStatistic === ''){
      return;
    }
    let allStarts: Map<string, {durations: number[], participants: Map<String,{participant: Participant, number: number, durations: number[]}>}> = new Map();
    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + StatisticUtils.monthNames[tick.month];
      allStarts.set(yearMonthID, {durations: [], participants: new Map()});
    })

    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + StatisticUtils.monthNames[month];
        let figures = allStarts.get(yearMonthID)!;
        let participantMap: Map<String, Participant> = new Map<String, Participant>();
        this.specificationDataContainer.participants.forEach(participant => {
          participantMap.set(participant.id, participant);
        })
        caseStatistic.taskTimingDTOS.forEach(taskTiming => {
          if(taskTiming.taskid === this.specificTaskStatistic
            && !taskTiming.cancelled && taskTiming.status === 'Completed'){
            figures.durations.push(taskTiming.endTimestamp - taskTiming.startTimestamp);
            Object.entries(taskTiming.participants).forEach(entry => {
              if(entry[0] !== "system") {
                let isRelevant = false;
                for(let event of entry[1]){
                  if(event === "Start" || event === "Complete"){
                    isRelevant = true;
                    break;
                  }
                }
                if(isRelevant){
                  if(!figures.participants.has(entry[0])){
                    figures.participants.set(entry[0], {participant: participantMap.get(entry[0])!, number: 0, durations: []});
                  }
                  let participantEntry = figures.participants.get(entry[0])!;
                  figures.participants.set(entry[0],
                    {participant: participantEntry.participant,
                      number: participantEntry.number + 1,
                      durations: [...participantEntry.durations, taskTiming.endTimestamp - taskTiming.startTimestamp]})
                }
              }
            })
          }
        })
      }
    })
    let taskStatistic : TaskStatistic = this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS
      .filter(taskStatistic => taskStatistic.taskid === this.specificTaskStatistic).at(0)!;

    this.avgCompletionTimeOverPeriods = [];
    this.participantsProcessedInstances = [];
    this.participantAvgPerformance = [];
    let participantPerformances: Map<string, {dateLabel: string, performance: number}[]> = new Map();
    allStarts.forEach((figures, yearMonthID) => {
      let label = (this.fineness === 'month') ? yearMonthID.replace(".", " ") : yearMonthID.split(".")[0];
      const sum = figures.durations.reduce((a, b) => a + b, 0);
      const avg = (sum / figures.durations.length) || 0;
      this.avgCompletionTimeOverPeriods.push({
        name: label,
        value: avg
      })

      let participantsProcessedInstances: { name: string, series: { name: string, value: number }[] } = {
        name: label,
        series: []
      }
      figures.participants.forEach((participantEntry, participantId) => {
        let participantLabel = participantEntry.participant.firstname + " " + participantEntry.participant.lastname;
        participantsProcessedInstances.series.push({
          name: participantLabel,
          value: participantEntry.number
        })

        const sum = participantEntry.durations.reduce((a, b) => a + b, 0);
        const avg = (sum / participantEntry.durations.length) || 0;
        if(!participantPerformances.has(participantLabel)){
          participantPerformances.set(participantLabel, [])
        }
        participantPerformances.get(participantLabel)!.push({dateLabel: label, performance: avg });
      })
      this.participantsProcessedInstances.push(participantsProcessedInstances);
    });

    participantPerformances.forEach((performanceEntry, participantLabel) => {
      let participantPerformance: { name: string, series: { name: string, value: number }[] } = {
        name: participantLabel,
        series: []
      }
      performanceEntry.forEach(performance => {
        participantPerformance.series.push({
          name: performance.dateLabel,
          value: performance.performance
        });
      })
      this.participantAvgPerformance.push(participantPerformance);
    })

    this.configuredCapabilities = [];
    this.configuredRoles = [];
    this.configuredPositions = [];
    this.associatedCapabilities = [];
    this.associatedRoles = [];
    this.associatedPositions = [];
    Object.entries(taskStatistic.associatedRoles).forEach(entry => {
      this.associatedRoles.push({
        name: entry[0],
        series: [{
          name: entry[0],
          value: entry[1]
        }]
      })
    })
    Object.entries(taskStatistic.associatedCapabilities).forEach(entry => {
      this.associatedCapabilities.push({
        name: entry[0],
        series: [{
          name: entry[0],
          value: entry[1]
        }]
      })
    })
    Object.entries(taskStatistic.associatedPositions).forEach(entry => {
      this.associatedPositions.push({
        name: entry[0],
        series: [{
          name: entry[0],
          value: entry[1]
        }]
      })
    })
    taskStatistic.demandedRoles.forEach(demandedRole => {
      this.configuredRoles.push({
        name: demandedRole.name,
        series: [{
          name: demandedRole.name,
          value: 1
        }]
      })
    })
    taskStatistic.demandedCapabilities.forEach(demandedCapability => {
      this.configuredCapabilities.push({
        name: demandedCapability.name,
        series: [{
          name: demandedCapability.name,
          value: 1
        }]
      })
    })
    taskStatistic.demandedPositions.forEach(demandedPosition => {
      this.configuredPositions.push({
        name: demandedPosition.title,
        series: [{
          name: demandedPosition.title,
          value: 1
        }]
      })
    })
    StatisticUtils.preventNullStatistic(this.avgCompletionTimeOverPeriods);
    StatisticUtils.preventNullStatistic(this.participantsProcessedInstances, true);
    StatisticUtils.preventNullStatistic(this.participantAvgPerformance, true);
    StatisticUtils.preventNullStatistic(this.configuredRoles, true);
    StatisticUtils.preventNullStatistic(this.configuredCapabilities, true);
    StatisticUtils.preventNullStatistic(this.configuredPositions, true);
    StatisticUtils.preventNullStatistic(this.associatedRoles, true);
    StatisticUtils.preventNullStatistic(this.associatedCapabilities, true);
    StatisticUtils.preventNullStatistic(this.associatedPositions, true);
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
    let valueString = new FormatUtils().applyPastTimeFormatForTimestampWithDays(data.cell.value)
    if(data.cell.extra.statisticSelection === 'cost'){
      valueString = data.cell.value.toFixed(2);
    }
    return taskStatistic.name + "<br>" + valueString;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
