import {Component, OnInit} from '@angular/core';
import {SpecificationDataService} from "../../yawl/resources/services/specification-data.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {LegendPosition} from "@swimlane/ngx-charts";
import {FormatUtils} from "../../util/format-util";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-specification-statistic-view',
  templateUrl: './specification-statistic-view.component.html',
  styleUrls: ['./specification-statistic-view.component.css']
})
export class SpecificationStatisticViewComponent implements OnInit {

  statisticSelection = "performance";
  specificationDataContainers: SpecificationDataContainer[] | undefined;
  legendPiePosition: LegendPosition = LegendPosition.Below;

  // Config
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
    end: new FormControl<Date | null>(new Date(Date.now())),
  });
  fineness = 'month';
  statisticTicks: { year: number, month: number }[] = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  casesInRange = 0;

  // Performance
  overallSuccessRate: Object[] = [];
  overallDeadlineAccuracy: Object[] = [];
  specPerformanceComparison: Object[] = [];
  longestCases: Object[] = [];
  avgSpecificationCaseTime: Object[] = [];

  // Capacity
  caseInstances: Object[] = [];
  sumOfResourcesAvailable: Object[] = [];
  demandForCapacity: Object[] = [];
  activeBottlenecks: Object[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private specificationDataService: SpecificationDataService) {
  }


  ngOnInit(): void {
    this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
      this.specificationDataContainers = specificationDataContainers;
      this.statisticTicks = this.calculateStatisticticks();
      this.processIncidentFreeRate();
      this.processCaseInstancesAndCapacityDemand();
      this.processDeadlineAccuracy();
      this.processLongestCases();
      this.processAvgCases();
      this.processSpecPerformanceComparison();
      this.processSumOfResources();
      this.processCasesInRange();
      this.processActiveBottlenecks();
    });
  }

  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = this.calculateStatisticticks();
    this.processIncidentFreeRate();
    this.processCaseInstancesAndCapacityDemand();
    this.processDeadlineAccuracy();
    this.processLongestCases();
    this.processAvgCases();
    this.processSpecPerformanceComparison();
    this.processSumOfResources();
    this.processCasesInRange();
    this.processActiveBottlenecks();
  }

  selectStatistic(val: any) {
    this.statisticSelection = val;
  }

  processCasesInRange(): void {
    this.casesInRange = 0;
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (this.timestampIsInDateRange(caseStatistic.start)) {
          this.casesInRange++;
        }
      })
    });
  }

  processIncidentFreeRate(): void {
    this.overallSuccessRate = [];
    let allSuccessfulCases = 0;
    let allUnsuccessfulCases = 0;
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (this.timestampIsInDateRange(caseStatistic.start)) {
          if (caseStatistic.cancelled) {
            allUnsuccessfulCases++;
          } else {
            allSuccessfulCases++;
          }
        }
      })
    });
    let finalValue = ((1 - (allUnsuccessfulCases / allSuccessfulCases)) * 100).toFixed(2);
    finalValue = (allSuccessfulCases === 0) ? "0" : finalValue;
    this.overallSuccessRate = [
      {
        "name": "Overall success rate",
        "value": finalValue
      },
    ]
  }

  processDeadlineAccuracy(): void {
    let deadlineNotExceeded = 0;
    let deadlineExceeded = 0;
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (this.timestampIsInDateRange(caseStatistic.start)) {
          if (specificationDataContainer.extensionSpecification.specificationTimeLimit === 0) {
            deadlineNotExceeded++;
          } else {
            if (Number(specificationDataContainer.extensionSpecification.specificationTimeLimit) < caseStatistic.age) {
              deadlineExceeded++;
            } else {
              deadlineNotExceeded++;
            }
          }
        }
      })
    })
    let finalValue = (((deadlineNotExceeded / (deadlineNotExceeded + deadlineExceeded))) * 100).toFixed(2);
    finalValue = (deadlineNotExceeded === 0 && deadlineExceeded === 0) ? "0" : finalValue;
    this.overallDeadlineAccuracy = [
      {
        "name": "Overall deadline accuracy",
        "value": finalValue
      },
    ]
  }

  processCaseInstancesAndCapacityDemand(): void {
    let allStarts: Map<string, Map<string, { count: number, capacityDemand: number }>> = new Map();

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + this.monthNames[tick.month];
      allStarts.set(yearMonthID, new Map());
    })

    this.specificationDataContainers?.forEach(specificationDataContainer => {
      let label = specificationDataContainer.specificationInformation.uri + " " + specificationDataContainer.specificationInformation.version
      console.log(specificationDataContainer);
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {

        if (this.timestampIsInDateRange(caseStatistic.start)) {
          let date = new Date(caseStatistic.start);
          let month = (this.fineness === 'month') ? date.getMonth() : 0;
          let yearMonthID = date.getFullYear() + "." + this.monthNames[month];
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
    });
    this.caseInstances = [];
    this.demandForCapacity = [];
    allStarts.forEach((caseNumber, yearMonthID) => {
      let label = (this.fineness === 'month') ? yearMonthID.replace(".", " ") : yearMonthID.split(".")[0];
      let caseInstanceElement = {
        name: label,
        series: []
      }
      let demandForCapacityElement = {
        name: label,
        series: []
      }
      caseNumber.forEach((count, label) => {
        caseInstanceElement.series.push({
          // @ts-ignore
          name: label,
          // @ts-ignore
          value: count.count
        });
        demandForCapacityElement.series.push({
          // @ts-ignore
          name: label,
          // @ts-ignore
          value: count.capacityDemand
        });
      });
      this.caseInstances.push(caseInstanceElement);
      this.demandForCapacity.push(demandForCapacityElement);
    })
  }

  processLongestCases(): void {
    this.longestCases = [];
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      let caseStatistic: CaseStatistic | undefined = specificationDataContainer.specificationStatistic.caseStatisticDTOS
        .filter((caseStatistic) => this.timestampIsInDateRange(caseStatistic.start))
        .sort(
          (a: CaseStatistic, b: CaseStatistic) => {
            return (a.age < b.age) ? 1 : -1;
          }).at(0);

      if (caseStatistic !== undefined) {
        this.longestCases.push({
          "name": specificationDataContainer.specificationInformation.uri + " "
            + specificationDataContainer.specificationInformation.version
            + " case-" + caseStatistic.caseid,
          "value": caseStatistic.age
        })
      }
    });
  }

  processAvgCases(): void {
    this.avgSpecificationCaseTime = [];
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      let ages: number[] = [];
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (this.timestampIsInDateRange(caseStatistic.start) && !caseStatistic.cancelled) {
          ages.push(caseStatistic.age);
        }
      })
      const sum = ages.reduce((a, b) => a + b, 0);
      const avg = (sum / ages.length) || 0;
      this.avgSpecificationCaseTime.push({
        "name": specificationDataContainer.specificationInformation.uri,
        "value": avg
      })
    });
  }

  processSpecPerformanceComparison(): void {
    this.specPerformanceComparison = [];
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      let specificationMonthlyPerformance: { name: string, series: { name: string; value: number }[] } = {
        name: specificationDataContainer.specificationInformation.uri,
        series: []
      };
      let map: Map<string, number[]> = new Map;
      this.statisticTicks.forEach(tick => {
        let label = tick.year + ((this.fineness === 'month') ? " " + this.monthNames[tick.month] : "");
        map.set(label, []);
      })
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (this.timestampIsInDateRange(caseStatistic.start)) {
          let startDate = new Date(caseStatistic.start);
          let label = startDate.getFullYear() + ((this.fineness === 'month') ? " " + this.monthNames[startDate.getMonth()] : "");
          map.get(label)!.push(caseStatistic.age);
        }
      })

      map.forEach((timestamps, label) => {
        const sum = timestamps.reduce((a, b) => a + b, 0);
        const avg = (sum / timestamps.length) || 0;
        specificationMonthlyPerformance.series.push({
          name: label,
          value: avg
        })
      })
      this.specPerformanceComparison.push(specificationMonthlyPerformance);
    });
  }

  processSumOfResources(): void {
    this.sumOfResourcesAvailable = [{
      "name": "Overall sum of resources available",
      "value": this.specificationDataContainers?.at(0)?.participants.length
    }]
  }

  processActiveBottlenecks(): void {
    this.activeBottlenecks = [];

    let taskMap: Map<string, number> = new Map();
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (caseStatistic.end === 0 && !caseStatistic.cancelled) {
          caseStatistic.taskTimingDTOS.forEach(taskTiming => {
            if (taskTiming.status === 'Offered' || taskTiming.status === 'Allocated') {
              let label = specificationDataContainer.specificationInformation.uri + "&!"
                + specificationDataContainer.specificationInformation.version + "&!"
                + taskTiming.taskid
              if(!taskMap.has(label)){
                taskMap.set(label, 0);
              }
              taskMap.set(label, taskMap.get(label)! + 1);
            }
          })
        }
      })
    });

    taskMap.forEach((taskCount, label) => {
      this.activeBottlenecks.push({
        name: label.replace("&!", " ").replace("&!", " "),
        value: taskCount
      })
    })
  }


  formatPieChartTimestampLabel(val: any) {
    return val.data.label + "<br> " + new FormatUtils().applyPastTimeFormatForTimestampWithDays(val.value);
  }

  pastTimeFormat(val: any) {
    return new FormatUtils().applyPastTimeFormatForTimestampWithDays(val);
  }

  percentageFormat(val: any) {
    return val.toLocaleString() + '%';
  }

  timestampIsInDateRange(timestamp: number): boolean {
    let start = this.range.value.start?.getTime();
    let end = this.range.value.end?.getTime();

    if (timestamp > start! && timestamp < end!) {
      return true;
    }
    return false;
  }

  calculateStatisticticks(): { year: number, month: number }[] {
    let start = this.range.value.start!;
    let end = this.range.value.end!;
    let startYear = start.getFullYear();
    let startMonth = start.getMonth();
    let endYear = end.getFullYear();
    let endMonth = end.getMonth();
    let dates: { year: number, month: number }[] = [];

    if (this.fineness === 'month') {
      for (let i = startYear; i <= endYear; i++) {
        let startMonthIndex = (i === startYear) ? startMonth : 0;
        let endMonthIndex = (i != endYear) ? 11 : endMonth;
        for (let j = startMonthIndex; j <= endMonthIndex; j++) {
          dates.push({year: i, month: j});
        }
      }
    } else {
      for (let i = startYear; i <= endYear; i++) {
        dates.push({year: i, month: 0});
      }
    }
    console.log(dates);
    return dates;
  }


}
