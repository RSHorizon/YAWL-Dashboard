import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSort} from "@angular/material/sort";
import {Resource} from "../../yawl/resources/entities/resource.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {FormatUtils} from "../../common/util/format-util";
import {StatisticUtils} from "../../common/util/statistic-utils";
import {ChartConfiguration} from "chart.js/dist/types";
import {CaseStatisticChartConfigurations} from "./case-statistic-chart-configurations";
import {ColorUtils} from "../../common/util/color-util";
/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-case-statistic-view',
  templateUrl: './case-statistic-view.component.html',
  styleUrls: ['./case-statistic-view.component.css']
})
export class CaseStatisticViewComponent implements OnInit, AfterViewInit {

  @Input("specificationDataContainer")
  specificationDataContainer: SpecificationDataContainer | undefined;
  // @ts-ignore
  sort: MatSort;
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
    end: new FormControl<Date | null>(new Date(Date.now())),
  });
  formatUtils = new FormatUtils();

  // Config
  statisticSelection = "general";
  fineness = 'month';
  loaded = false;
  statisticTicks: { year: number, month: number }[] = [];
  specificationTimeLimit: number = 0;
  casesInRange = 0;

  // Common
  weekDayOccurrencesOptions = CaseStatisticChartConfigurations.weekDayOccurrencesOptions(this.fineness === 'month');
  weekDayOccurrencesData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  costsOptions = CaseStatisticChartConfigurations.costsOptions(this.fineness === 'month');
  costsData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  resourceUtilizationOptions = CaseStatisticChartConfigurations.resourceUtilizationOptions(this.fineness === 'month');
  resourceUtilizationData: ChartConfiguration<'line'>['data'] = {labels: [], datasets: []};

  assocResources: Map<string, Set<Resource>> = new Map<string, Set<Resource>>();

  // Performance
  overallIndicatorOptions = CaseStatisticChartConfigurations.caseIndicatorOptions(this.fineness === 'month');
  overallIndicatorData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  casePerformanceOptions = CaseStatisticChartConfigurations.casePerformanceOptions(this.fineness === 'month');
  casePerformanceData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  casePerformanceDistributionOptions = CaseStatisticChartConfigurations.casePerformanceDistributionOptions(this.fineness === 'month');
  casePerformanceDistributionData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  // Performance
  casePerformance: Object[] = [];
  casePerformanceDistribution: Object[] = [];
  casePerformanceDistributionMin: string = "";
  casePerformanceDistributionMax: string = "";

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.specificationTimeLimit = <number>this.specificationDataContainer?.extensionSpecification.specificationTimeLimit;
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.weekDayOccurrences();
    this.processRessourceUtilization();
    this.processCosts();
    this.processAssocResources();
    this.processIndicatorRate();
    this.processPerformance();
    this.processPerformanceDistribution();
    this.processCasesInRange();
    this.loaded = true;
  }


  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.weekDayOccurrences();
    this.processRessourceUtilization();
    this.processCosts();
    this.processAssocResources();
    this.processIndicatorRate();
    this.processPerformance();
    this.processPerformanceDistribution();
    this.processCasesInRange();
  }

  selectStatistic(val: any) {
    this.statisticSelection = val;
    // Update statistic graphics after they become unhidden
    // Prevents misaligned ngx charts
    window.dispatchEvent(new Event('resize'));
  }

  processCasesInRange(): void {
    this.casesInRange = 0;
    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        this.casesInRange++;
      }
    })
  }

  weekDayOccurrences(): void {
    let dataMap: Map<number, Map<string, number>> = new Map();
    this.statisticTicks.forEach(tick => {
      let baseMap: Map<string, number> = new Map();
      StatisticUtils.weekdays.forEach(name => {
        baseMap.set(name, 0);
      })
      dataMap.set(((this.fineness === 'month') ? tick.month : tick.year), baseMap);
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let startDate = new Date(caseStatistic.start);
        let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0).getTime();
        let figures = dataMap.get(yearMonthID);
        figures!.set(StatisticUtils.weekdays[startDate.getDay()], figures!.get(StatisticUtils.weekdays[startDate.getDay()])! + 1)
      }
    });
    let labels: number[] = [];
    let mo: number[] = [];
    let tu: number[] = [];
    let we: number[] = [];
    let th: number[] = [];
    let fr: number[] = [];
    let sa: number[] = [];
    let su: number[] = [];

    dataMap.forEach((weekdays, tick) => {
      labels.push(tick);
      su.push(weekdays.get(StatisticUtils.weekdays[0])!)
      mo.push(weekdays.get(StatisticUtils.weekdays[1])!)
      tu.push(weekdays.get(StatisticUtils.weekdays[2])!)
      we.push(weekdays.get(StatisticUtils.weekdays[3])!)
      th.push(weekdays.get(StatisticUtils.weekdays[4])!)
      fr.push(weekdays.get(StatisticUtils.weekdays[5])!)
      sa.push(weekdays.get(StatisticUtils.weekdays[6])!)
    });

    this.weekDayOccurrencesData.labels = labels;
    this.weekDayOccurrencesData.datasets = [];
    this.weekDayOccurrencesData.datasets.push({
      label: "Sunday",
      backgroundColor: ColorUtils.getWeekdayColor(0),
      data: su
    })
    this.weekDayOccurrencesData.datasets.push({
      label: "Monday",
      backgroundColor: ColorUtils.getWeekdayColor(1),
      data: mo
    })
    this.weekDayOccurrencesData.datasets.push({
      label: "Tuesday",
      backgroundColor: ColorUtils.getWeekdayColor(2),
      data: tu
    })
    this.weekDayOccurrencesData.datasets.push({
      label: "Wednesday",
      backgroundColor: ColorUtils.getWeekdayColor(3),
      data: we
    })
    this.weekDayOccurrencesData.datasets.push({
      label: "Thursday",
      backgroundColor: ColorUtils.getWeekdayColor(4),
      data: th
    })
    this.weekDayOccurrencesData.datasets.push({
      label: "Friday",
      backgroundColor: ColorUtils.getWeekdayColor(5),
      data: fr
    })
    this.weekDayOccurrencesData.datasets.push({
      label: "Saturday",
      backgroundColor: ColorUtils.getWeekdayColor(6),
      data: sa
    })
  }

  processRessourceUtilization(): void {
    // Jahr, Monat, Tag, Stunde
    let workitemsSorted: { timestamp: number, taskid: string, change: number, resourceKey: string }[] = [];
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        caseStatistic.workitemDTOS.forEach(workitem => {
          let resource: string | undefined;
          Object.entries(workitem.resources).forEach((keyValue) => {
            let events = new Set(keyValue[1]);
            if (events.has('Start') && events.has('Complete')) {
              resource = keyValue[0];
            }
          })
          if (!workitem.automated && resource !== undefined && workitem.startTimestamp !== 0 && workitem.endTimestamp !== 0) {
            workitemsSorted.push({
              timestamp: workitem.startTimestamp,
              taskid: workitem.taskid,
              change: 1,
              resourceKey: resource
            });
            workitemsSorted.push({
              timestamp: workitem.endTimestamp,
              taskid: workitem.taskid,
              change: -1,
              resourceKey: resource
            });
          }
        })
      }
    })
    workitemsSorted.sort((a, b) => (a.timestamp < b.timestamp) ? -1 : 1)

    this.resourceUtilizationData.labels = [];
    let yDataArray: number[] = [];

    let start = this.range.value.start?.getTime();
    let end = this.range.value.end?.getTime();
    let tick = 1000 * 60 * 60; // hours
    if (start !== 0 && start !== undefined && end !== 0 && end !== undefined) {
      // Zeiträum größer als 4 Jahre unzulässig
      if (end - start > (1000 * 60 * 60 * 24 * 29 * 12 * 4)) {
        end = Date.now();
        start = end - (1000 * 60 * 60 * 24 * 29 * 12 * 4);
      }
      let taskTimestampIndex = 0;
      let status: Map<string, number> = new Map();
      for (let timeIndex = start; timeIndex < end; timeIndex += tick) {
        let minus: Map<string, number> = new Map();
        while (taskTimestampIndex < workitemsSorted.length
        && workitemsSorted[taskTimestampIndex].timestamp < timeIndex) {
          if (workitemsSorted[taskTimestampIndex].change === -1) {
            StatisticUtils.changeMap(minus, workitemsSorted[taskTimestampIndex].resourceKey, workitemsSorted[taskTimestampIndex].change);
          } else {
            StatisticUtils.changeMap(status, workitemsSorted[taskTimestampIndex].resourceKey, workitemsSorted[taskTimestampIndex].change);
          }
          taskTimestampIndex++;
        }
        this.resourceUtilizationData.labels.push(timeIndex)
        let count = 0;
        status.forEach(stat => {
          if (stat > 0) {
            count++
          }
        })
        yDataArray.push(count);
        minus.forEach((change, id) => {
          StatisticUtils.changeMap(status, id, change);
        })
      }
    }
    this.resourceUtilizationData.datasets = [];
    this.resourceUtilizationData.datasets.push({
      data: yDataArray
    })
  }

  processCosts(): void {
    let allStarts: Map<number, Map<string, number>> = new Map();
    let taskMap: Map<string, TaskStatistic> = new Map();
    this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      taskMap.set(taskStatistic.taskid, taskStatistic);
    })
    this.statisticTicks.forEach((tick) => {
      let baseTaskMap: Map<string, number> = new Map();
      this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
        baseTaskMap.set(taskStatistic.taskid, 0);
      })
      allStarts.set(((this.fineness === 'month') ? tick.month : tick.year), baseTaskMap);
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let startDate = new Date(caseStatistic.start);
        let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(),
          startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0)
          .getTime();
        let monthInstance = allStarts.get(yearMonthID)!;
        caseStatistic.workitemDTOS.forEach(workitem => {
          if (!workitem.automated && !workitem.cancelled && workitem.endTimestamp !== 0) {
            monthInstance.set(workitem.taskid, monthInstance.get(workitem.taskid)! + ((workitem.resourceTime) / (1000 * 60 * 60)) * taskMap.get(workitem.taskid)!.costResourceHour)
          }
        })
      }
    });

    this.costsData.labels = [];
    this.costsData.datasets = [];
    let finalMap: Map<string, { name: string, color: string, data: number[] }> = new Map();
    this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      finalMap.set(taskStatistic.taskid, {name: taskStatistic.name, color: taskStatistic.color!, data: []});
    })
    allStarts.forEach((taskMap, key) => {
      this.costsData.labels!.push(key);
      taskMap.forEach((costs, taskid) => {
        finalMap.get(taskid)!.data.push(costs);
      })
    })
    finalMap.forEach((task, taskid) => {
      this.costsData.datasets.push({
        data: task.data,
        backgroundColor: task.color,
        label: task.name
      });
    })
  }

  processIndicatorRate(): void {
    let successMap: Map<number, { success: number[], sla: number[] }> = new Map()
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
        && caseStatistic.end !== 0) {
        let startDate = new Date(caseStatistic.start);
        let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth())
          .getTime() : new Date(startDate.getFullYear(), 0).getTime();
        if (!successMap.has(tick)) {
          successMap.set(tick, {success: [], sla: []});
        }
        let successArray = successMap.get(tick)!;

        if (this.specificationDataContainer!.extensionSpecification.specificationTimeLimit === 0) {
          successArray.sla.push(1);
        } else {
          if (Number(this.specificationDataContainer!.extensionSpecification.specificationTimeLimit) < caseStatistic.leadTime) {
            successArray.sla.push(0);
          } else {
            successArray.sla.push(1);
          }
        }
        if (caseStatistic.cancelled) {
          successArray.success.push(0);
        } else {
          successArray.success.push(1);
        }
      }
    })

    let labels: number[] = [];
    let successDataSet: number[] = [];
    let slaDataSet: number[] = [];
    successMap.forEach((value, tick) => {
      labels.push(tick);
      let successfulCases = value.success.filter(value => value === 1).length;
      let successRatio = successfulCases / value.success.length || 0;
      successDataSet.push(successRatio);
      let slaMetCases = value.sla.filter(value => value === 1).length;
      let slaMetRatio = slaMetCases / value.sla.length || 0;
      slaDataSet.push(slaMetRatio);
    });

    this.overallIndicatorData.labels = labels;
    this.overallIndicatorData.datasets = [];
    this.overallIndicatorData.datasets.push({
      label: "Success ratio",
      data: successDataSet,
      backgroundColor: ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor())
    });
    this.overallIndicatorData.datasets.push({
      label: "Deadline fulfilled ratio",
      data: slaDataSet,
      backgroundColor: ColorUtils.getMuchLighterColor(ColorUtils.getSecondaryColor())
    });
  }

  processPerformance(): void {
    this.casePerformance = [];
    let map: Map<number, { min: number, minColor: string, max: number, maxColor: string, ages: number[] }> = new Map;
    this.statisticTicks.forEach(tick => {
      map.set(((this.fineness === 'month') ? tick.month : tick.year), {
        min: Number.MAX_VALUE, minColor: "",
        max: 0, maxColor: "", ages: []
      });
    })
    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.notCancelledAndCompleted(caseStatistic) &&
        StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let startDate = new Date(caseStatistic.start);
        let label = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth())
          .getTime() : new Date(startDate.getFullYear(), 0).getTime();
        let instance = map.get(label)!;
        instance.ages.push(caseStatistic.leadTime);
        if (instance.min > caseStatistic.leadTime) {
          instance.min = caseStatistic.leadTime;
          instance.minColor = caseStatistic.color!;
        }
        if (instance.max < caseStatistic.leadTime) {
          instance.max = caseStatistic.leadTime;
          instance.maxColor = caseStatistic.color!;
        }
      }
    })
    let labels: number[] = [];
    let min: number[] = [];
    let colorsMin: string[] = [];
    let max: number[] = [];
    let colorsMax: string[] = [];
    let avgArray: number[] = [];

    map.forEach((instance, label) => {
      const sum = instance.ages.reduce((a, b) => a + b, 0);
      const avg = (sum / instance.ages.length) || 0;
      labels.push(label);
      min.push((avg === 0) ? 0 : instance.min);
      colorsMin.push(instance.minColor);
      max.push(instance.max);
      colorsMax.push(instance.maxColor);
      avgArray.push(avg);
    })

    this.casePerformanceData.labels = labels;
    this.casePerformanceData.datasets = [{
      data: min,
      label: 'Minimal duration',
      backgroundColor: ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor())
    }, {
      data: avgArray,
      label: 'Average duration',
      backgroundColor: ColorUtils.getMuchLighterColor(ColorUtils.getSecondaryColor())
    }, {
      data: max,
      label: 'Maximal duration',
      backgroundColor: ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor())
    }
    ];
  }

  processPerformanceDistribution(): void {
    this.casePerformanceDistribution = [];
    let casePerformanceSorted: { name: string, age: number }[] = [];
    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.notCancelledAndCompleted(caseStatistic) &&
        StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        casePerformanceSorted.push({name: caseStatistic.caseid, age: caseStatistic.leadTime});
      }
    });
    casePerformanceSorted = casePerformanceSorted.sort((a, b) => (a.age > b.age) ? 1 : -1);
    if (casePerformanceSorted.length !== 0) {
      let min = casePerformanceSorted[0].age;
      let max = casePerformanceSorted[casePerformanceSorted.length - 1].age;
      this.casePerformanceDistributionMin = "(" + this.formatUtils.applyPastTimeFormatForTimestampWithDays(min) + ")"
      this.casePerformanceDistributionMax = "(" + this.formatUtils.applyPastTimeFormatForTimestampWithDays(max) + ")"
      let diff = max - min;
      let performanceDistributionMap: Map<number, {
        duration: number,
        performance: { name: string; value: number }[]
      }> =
        new Map([[0, {duration: min, performance: []}], [10, {
          duration: min + .1 * diff,
          performance: []
        }], [20, {duration: min + .2 * diff, performance: []}],
          [30, {duration: min + .3 * diff, performance: []}], [40, {
            duration: min + .4 * diff,
            performance: []
          }], [50, {duration: min + .5 * diff, performance: []}],
          [60, {duration: min + .6 * diff, performance: []}], [70, {
            duration: min + .7 * diff,
            performance: []
          }], [80, {duration: min + .8 * diff, performance: []}],
          [90, {duration: min + .9 * diff, performance: []}], [100, {duration: max, performance: []}]]);
      casePerformanceSorted.forEach(caseElement => {
        let fraction = (Math.round((Math.abs((1 - (max - caseElement.age) / diff))) * 10) * 10);
        if (diff === 0) {
          fraction = 100;
        }
        let figure = performanceDistributionMap.get(fraction)!;
        figure.performance.push({name: caseElement.name, value: 1})
      });

      this.casePerformanceDistributionData.labels = [];
      this.casePerformanceDistributionData.datasets = [];
      let data: number[] = [];
      performanceDistributionMap.forEach((performance, label) => {
        this.casePerformanceDistributionData.labels?.push(label + "% (" + FormatUtils.applyPastTimeFormatForTimestampWithDays(performance.duration) + ")");
        data.push(performance.performance.length)
      });
      this.casePerformanceDistributionData.datasets.push({
        label: "Case size",
        data: data,
        backgroundColor: ColorUtils.getMuchLighterColor(ColorUtils.getSecondaryColor())
      })
    }
  }

  processAssocResources(): void {
    this.assocResources = new Map<string, Set<Resource>>();
    this.specificationDataContainer?.specificationStatistic!.roleAssocResources!.forEach(entry => {
      this.assocResources.set(entry.association, entry.resources);
    })
  }
}
