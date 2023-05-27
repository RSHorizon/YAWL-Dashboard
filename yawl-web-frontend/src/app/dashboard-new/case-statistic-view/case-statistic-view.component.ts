import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSort} from "@angular/material/sort";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {FormatUtils} from "../../util/format-util";
import {StatisticUtils} from "../../util/statistic-utils";

@Component({
  selector: 'app-case-statistic-view',
  templateUrl: './case-statistic-view.component.html',
  styleUrls: ['./case-statistic-view.component.css']
})
export class CaseStatisticViewComponent implements OnInit {

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
  statisticSelection = "common";
  fineness = 'month';
  loaded = false;
  statisticTicks: { year: number, month: number }[] = [];
  specificationTimeLimit: number = 0;
  casesInRange = 0;

  // Common
  caseInstances: Object[] = [];
  avgCasesPerWeekday: Object[] = [];
  capacityDemand: Object[] = [];
  costs: Object[] = [];
  associatedParticipants: Map<string, Set<Participant>> = new Map<string, Set<Participant>>();

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
    this.processSuccessStats();
    this.processCasesInRange();
    this.processCaseInstancesAndCapacityDemand();
    this.processAvgCasesPerWeekday();
    this.processCosts();
    this.processAssociatedParticipants();
    this.processPerformance();
    this.processPerformanceDistribution();
    this.loaded = true;
    console.log(this.associatedParticipants.size);
  }


  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processSuccessStats();
    this.processCasesInRange();
    this.processCaseInstancesAndCapacityDemand();
    this.processAvgCasesPerWeekday();
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

  processCaseInstancesAndCapacityDemand(): void {
    let allStarts: Map<string, Map<string, { count: number, capacityDemand: number }>> = new Map();

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + StatisticUtils.monthNames[tick.month];
      allStarts.set(yearMonthID, new Map());
    })

    let label = this.specificationDataContainer!.specificationInformation.uri + " "
      + this.specificationDataContainer!.specificationInformation.version
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + StatisticUtils.monthNames[month];
        let exactMonth = allStarts.get(yearMonthID);
        if (!exactMonth!.has(label)) {
          exactMonth!.set(label, {count: 0, capacityDemand: 0});
        }
        let figures = exactMonth!.get(label)!;
        figures.count++;
        figures.capacityDemand += caseStatistic.resourceTime;
        exactMonth!.set(label, figures);
      }
    })

    this.caseInstances = [];
    this.capacityDemand = [];
    allStarts.forEach((caseNumber, yearMonthID) => {
      let label = (this.fineness === 'month') ? yearMonthID.replace(".", " ") : yearMonthID.split(".")[0];
      let caseInstanceElement: { name: string, series: { name: string, value: number }[] } = {
        name: label,
        series: []
      }
      let demandForCapacityElement: { name: string, series: { name: string, value: number }[] } = {
        name: label,
        series: []
      }
      caseNumber.forEach((count, label) => {
        caseInstanceElement.series.push({
          name: label,
          value: count.count
        });
        demandForCapacityElement.series.push({
          name: label,
          value: count.capacityDemand
        });
      });
      this.caseInstances.push(caseInstanceElement);
      this.capacityDemand.push(demandForCapacityElement);
    });
    StatisticUtils.preventNullStatistic(this.caseInstances, true);
    StatisticUtils.preventNullStatistic(this.capacityDemand, true);
  }

  processAvgCasesPerWeekday(): void {
    let allStarts: Map<string, Map<string, number>> = new Map();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + StatisticUtils.monthNames[tick.month];
      allStarts.set(yearMonthID, new Map([["Sunday", 0], ["Monday", 0], ["Tuesday", 0], ["Wednesday", 0],
        ["Thursday", 0], ["Friday", 0], ["Saturday", 0]]));
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + StatisticUtils.monthNames[month];
        let figures = allStarts.get(yearMonthID);
        figures!.set(weekday[date.getDay()], figures!.get(weekday[date.getDay()])! + 1)
      }
    });
    this.avgCasesPerWeekday = []
    allStarts.forEach((weekValues, yearMonthID) => {
      let label = (this.fineness === 'month') ? yearMonthID.replace(".", " ") : yearMonthID.split(".")[0];
      let quotient = (this.fineness === 'month') ? 4.34 : 52.18;
      let timeInstanceElement: { name: string, series: { name: string, value: number }[] } = {
        name: label,
        series: []
      }
      weekValues.forEach((count, weekday) => {
        timeInstanceElement.series.push({
          name: weekday,
          value: count / quotient
        });
      });
      this.avgCasesPerWeekday.push(timeInstanceElement);
    })
    StatisticUtils.preventNullStatistic(this.avgCasesPerWeekday, true);
  }

  processCosts(): void {
    let allStarts: Map<string, Map<string, number>> = new Map();
    let taskMap: Map<string, TaskStatistic> = new Map();
    this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      taskMap.set(taskStatistic.taskid, taskStatistic);
    })

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + StatisticUtils.monthNames[tick.month];
      allStarts.set(yearMonthID, new Map());
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + StatisticUtils.monthNames[month];
        let monthInstance = allStarts.get(yearMonthID)!;
        caseStatistic.taskTimingDTOS.forEach(taskTiming => {
          if (!taskTiming.automated && !taskTiming.cancelled && taskTiming.endTimestamp !== 0) {
            if (!monthInstance.has(taskTiming.taskid)) {
              monthInstance.set(taskTiming.taskid, 0);
            }
            monthInstance.set(taskTiming.taskid, monthInstance.get(taskTiming.taskid)! + ((taskTiming.endTimestamp - taskTiming.startTimestamp) / (1000 * 60 * 60)) * taskMap.get(taskTiming.taskid)!.costResourceHour)
          }
        })
      }
    });
    this.costs = [];
    allStarts.forEach((taskMap, label) => {
      let costElement: { name: string, series: { name: string, value: number }[] } = {
        name: label,
        series: []
      }
      taskMap.forEach((cost, taskLabel) => {
        costElement.series.push({
          name: taskLabel,
          value: cost
        })
      })
      this.costs.push(costElement);
    });
    StatisticUtils.preventNullStatistic(this.costs, true);
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
        if(diff === 0){
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
