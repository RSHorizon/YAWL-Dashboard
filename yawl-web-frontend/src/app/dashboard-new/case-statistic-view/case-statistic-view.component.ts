import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSort} from "@angular/material/sort";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {FormatUtils} from "../../util/format-util";
import {StatisticUtils} from "../../util/statistic-utils";
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {ChartConfiguration} from "chart.js/dist/types";
import {CaseStatisticChartConfigurations} from "./case-statistic-chart-configurations";
import {ColorUtils} from "../../util/color-util";
import {
  SpecificationStatisticChartConfigurations
} from "../specification-statistic-view/specification-statistic-chart-configurations";

@Component({
  selector: 'app-case-statistic-view',
  templateUrl: './case-statistic-view.component.html',
  styleUrls: ['./case-statistic-view.component.css']
})
export class CaseStatisticViewComponent implements OnInit {

  @Input("specificationDataContainer")
  specificationDataContainer: SpecificationDataContainer | undefined;
  faCircleInfo = faCircleInfo;
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

  associatedParticipants: Map<string, Set<Participant>> = new Map<string, Set<Participant>>();

  // Performance
  overallIndicatorOptions = CaseStatisticChartConfigurations.caseIndicatorOptions(this.fineness === 'month');
  overallIndicatorData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};


  // Success
  deadlineNotExceeded: number = 0;
  deadlineExceeded: number = 0;
  successful: number = 0;
  unsucessful: number = 0;
  slaLine: Object[] = [];
  successLine: Object[] = [];
  deadlineValues: Object[] = [];
  successValues: Object[] = [];

  // Performance
  casePerformance: Object[] = [];
  casePerformanceDistribution: Object[] = [];
  casePerformanceDistributionMin: string = "";
  casePerformanceDistributionMax: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.specificationTimeLimit = <number>this.specificationDataContainer?.extensionSpecification.specificationTimeLimit;
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.weekDayOccurrences();
    this.processRessourceUtilization();
    this.processCosts();
    this.processAssociatedParticipants();
    this.processIndicatorRate();

    //this.processSuccessStats();
    this.processCasesInRange();
    /*this.processCosts();

    this.processPerformance();
    this.processPerformanceDistribution();*/
    this.loaded = true;
  }


  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processSuccessStats();
    this.processCasesInRange();
    this.processCosts();
    this.processAssociatedParticipants();
    this.processPerformance();
    this.processPerformanceDistribution();
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
        let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getTime() : new Date(startDate.getFullYear(), 1, 0).getTime();
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
    let taskTimingsSorted: { timestamp: number, taskid: string, change: number, resourceKey: string }[] = [];
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        caseStatistic.taskTimingDTOS.forEach(taskTiming => {
          let participant: string | undefined;
          Object.entries(taskTiming.participants).forEach((keyValue) => {
            let events = new Set(keyValue[1]);
            if (events.has('Start') && events.has('Complete')) {
              participant = keyValue[0];
            }
          })
          if (!taskTiming.automated && participant !== undefined && taskTiming.startTimestamp !== 0 && taskTiming.endTimestamp !== 0) {
            taskTimingsSorted.push({
              timestamp: taskTiming.startTimestamp,
              taskid: taskTiming.taskid,
              change: 1,
              resourceKey: participant
            });
            taskTimingsSorted.push({
              timestamp: taskTiming.endTimestamp,
              taskid: taskTiming.taskid,
              change: -1,
              resourceKey: participant
            });
          }
        })
      }
    })
    taskTimingsSorted.sort((a, b) => (a.timestamp < b.timestamp) ? -1 : 1)

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
        while (taskTimestampIndex < taskTimingsSorted.length
        && taskTimingsSorted[taskTimestampIndex].timestamp < timeIndex) {
          if (taskTimingsSorted[taskTimestampIndex].change === -1) {
            StatisticUtils.changeMap(minus, taskTimingsSorted[taskTimestampIndex].resourceKey, taskTimingsSorted[taskTimestampIndex].change);
          } else {
            StatisticUtils.changeMap(status, taskTimingsSorted[taskTimestampIndex].resourceKey, taskTimingsSorted[taskTimestampIndex].change);
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

  processSuccessStats(): void {
    let allStarts: Map<string, {
      deadlineExceeded: number, deadlineNotExceeded: number,
      successful: number, unsuccessful: number
    }> = new Map();

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + StatisticUtils.monthNames[tick.month];
      allStarts.set(yearMonthID, {
        deadlineExceeded: 0, deadlineNotExceeded: 0,
        successful: 0, unsuccessful: 0
      });
    })
    this.deadlineNotExceeded = 0;
    this.deadlineExceeded = 0;
    this.successful = 0;
    this.unsucessful = 0;

    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + StatisticUtils.monthNames[month];
        let figures = allStarts.get(yearMonthID)!;
        if (this.specificationDataContainer?.extensionSpecification.specificationTimeLimit === 0) {
          this.deadlineNotExceeded++;
          figures.deadlineNotExceeded++;
        } else {
          if (Number(this.specificationDataContainer?.extensionSpecification.specificationTimeLimit) < caseStatistic.age) {
            this.deadlineExceeded++;
            figures.deadlineExceeded++;
          } else {
            this.deadlineNotExceeded++;
            figures.deadlineNotExceeded++;
          }
        }
        if (caseStatistic.cancelled) {
          this.unsucessful++;
          figures.unsuccessful++;
        } else {
          this.successful++;
          figures.successful++;
        }
      }
    })
    this.slaLine = [];
    this.successLine = [];
    this.deadlineValues = [];
    this.successValues = [];
    let slaLineElement: { name: string, series: { name: string, value: string }[] } = {
      name: "SLA met",
      series: []
    }
    let successLineElement: { name: string, series: { name: string, value: string }[] } = {
      name: "Success",
      series: []
    }
    allStarts.forEach((value, yearMonthID) => {
      let label = (this.fineness === 'month') ? yearMonthID.replace(".", " ") : yearMonthID.split(".")[0];
      let finalDeadlineValue = (((value.deadlineNotExceeded / (value.deadlineNotExceeded + value.deadlineExceeded))) * 100).toFixed(2);
      finalDeadlineValue = (value.deadlineNotExceeded === 0 && value.deadlineExceeded === 0) ? "100" : finalDeadlineValue;
      let finalSuccessValue = ((1 - (value.unsuccessful / value.successful)) * 100).toFixed(2);
      finalSuccessValue = (value.successful === 0 && value.unsuccessful === 0) ? "100" : finalSuccessValue;
      let deadlineAccuracyElement = {
        name: label,
        series: [{
          name: "Deadline met",
          value: value.deadlineNotExceeded
        }, {
          name: "Deadline not met",
          value: value.deadlineExceeded
        }]
      }
      this.deadlineValues.push(deadlineAccuracyElement);
      slaLineElement.series.push({
        name: label,
        value: finalDeadlineValue
      })
      let successElement = {
        name: label,
        series: [{
          name: "Successful cases",
          value: value.successful
        }, {
          name: "Unsuccessful cases",
          value: value.unsuccessful
        }]
      }
      this.successValues.push(successElement);
      successLineElement.series.push({
        name: label,
        value: finalSuccessValue
      })
    })
    this.slaLine.push(slaLineElement);
    this.successLine.push(successLineElement);
    StatisticUtils.preventNullStatistic(this.slaLine, true);
    StatisticUtils.preventNullStatistic(this.successLine, true);
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
        let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getTime() : new Date(startDate.getFullYear(), 1, 0).getTime();
        let monthInstance = allStarts.get(yearMonthID)!;
        caseStatistic.taskTimingDTOS.forEach(taskTiming => {
          if (!taskTiming.automated && !taskTiming.cancelled && taskTiming.endTimestamp !== 0) {
            monthInstance.set(taskTiming.taskid, monthInstance.get(taskTiming.taskid)! + ((taskTiming.resourceTime) / (1000 * 60 * 60)) * taskMap.get(taskTiming.taskid)!.costResourceHour)
          }
        })
      }
    });

    this.costsData.labels = [];
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
        let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getTime() : new Date(startDate.getFullYear(), 1, 0).getTime();
        if (!successMap.has(tick)) {
          successMap.set(tick, {success: [], sla: []});
        }
        let successArray = successMap.get(tick)!;

        if (this.specificationDataContainer!.extensionSpecification.specificationTimeLimit === 0) {
          successArray.sla.push(1);
        } else {
          if (Number(this.specificationDataContainer!.extensionSpecification.specificationTimeLimit) < caseStatistic.age) {
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
    let map: Map<string, { min: number, max: number, ages: number[] }> = new Map;
    this.statisticTicks.forEach(tick => {
      let label = tick.year + ((this.fineness === 'month') ? " " + StatisticUtils.monthNames[tick.month] : "");
      map.set(label, {min: Number.MAX_VALUE, max: 0, ages: []});
    })
    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let startDate = new Date(caseStatistic.start);
        let label = startDate.getFullYear() + ((this.fineness === 'month') ? " " + StatisticUtils.monthNames[startDate.getMonth()] : "");
        let instance = map.get(label)!;
        instance.ages.push(caseStatistic.age);
        if (instance.min > caseStatistic.age) {
          instance.min = caseStatistic.age;
        }
        if (instance.max < caseStatistic.age) {
          instance.max = caseStatistic.age;
        }
      }
    })
    let specificationMonthlyPerformance: { name: string, series: { name: string; value: number, min: number, max: number }[] } = {
      name: "Avg. duration",
      series: []
    };
    map.forEach((instance, label) => {
      const sum = instance.ages.reduce((a, b) => a + b, 0);
      const avg = (sum / instance.ages.length) || 0;
      specificationMonthlyPerformance.series.push({
        name: label,
        value: avg,
        min: (avg === 0) ? 0 : instance.min,
        max: instance.max
      });
    })
    this.casePerformance.push(specificationMonthlyPerformance);
    StatisticUtils.preventNullStatistic(this.casePerformance, true);
  }

  processPerformanceDistribution(): void {
    this.casePerformanceDistribution = [];
    let casePerformanceSorted: { name: string, age: number }[] = [];
    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        casePerformanceSorted.push({name: caseStatistic.caseid, age: caseStatistic.age});
      }
    });
    casePerformanceSorted = casePerformanceSorted.sort((a, b) => (a.age > b.age) ? 1 : -1);
    let performanceDistributionMap: Map<number, { name: string; value: number }[]> =
      new Map([[0, []], [10, []], [20, []], [30, []], [40, []], [50, []], [60, []],
        [70, []], [80, []], [90, []], [100, []]]);
    if (casePerformanceSorted.length !== 0) {
      let min = casePerformanceSorted[0].age;
      let max = casePerformanceSorted[casePerformanceSorted.length - 1].age;
      this.casePerformanceDistributionMin = "(" + this.formatUtils.applyPastTimeFormatForTimestampWithDays(min) + ")"
      this.casePerformanceDistributionMax = "(" + this.formatUtils.applyPastTimeFormatForTimestampWithDays(max) + ")"
      let diff = max - min;
      casePerformanceSorted.forEach(caseElement => {
        let fraction = (Math.round((Math.abs((1 - (max - caseElement.age)) / diff)) * 10) * 10);
        if (diff === 0) {
          fraction = 100;
        }
        performanceDistributionMap.get(fraction)!.push({name: caseElement.name, value: 1});
      });

      performanceDistributionMap.forEach((performance, label) => {
        let performanceDistributionElement: { name: string, series: { name: string; value: number }[] } = {
          name: label + "%",
          series: []
        }
        performance.forEach(caseRef => {
          performanceDistributionElement.series.push({
            name: "Case ID " + caseRef.name,
            value: 1
          });
        })
        this.casePerformanceDistribution.push(performanceDistributionElement);
      });
    }
    StatisticUtils.preventNullStatistic(this.casePerformanceDistribution, true);
  }

  processAssociatedParticipants(): void {
    this.associatedParticipants = new Map<string, Set<Participant>>();
    this.specificationDataContainer?.specificationStatistic!.roleAssociatedParticipants!.forEach(entry => {
      this.associatedParticipants.set(entry.association, entry.participants);
    })
  }
}
