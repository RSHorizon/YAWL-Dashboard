import {Component, OnInit} from '@angular/core';
import {SpecificationDataService} from "../../yawl/resources/services/specification-data.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {LegendPosition} from "@swimlane/ngx-charts";
import {FormatUtils} from "../../util/format-util";
import {FormControl, FormGroup} from "@angular/forms";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import * as d3 from 'd3';
import {CurveGenerator, Path} from "d3";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";

@Component({
  selector: 'app-specification-statistic-view',
  templateUrl: './specification-statistic-view.component.html',
  styleUrls: ['./specification-statistic-view.component.css']
})
export class SpecificationStatisticViewComponent implements OnInit {

  statisticSelection = "performance";
  statisticResourceSelection = "role";
  specificationDataContainers: SpecificationDataContainer[] | undefined;
  legendPiePosition: LegendPosition = LegendPosition.Below;

  d3ViewVar = d3;
  loaded = false;

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

  // Resources
  automationPercentage: Object[] = [];
  automationCandidates: Object[] = [];
  resourceCapabilities: Object[] = [];
  resourceRoles: Object[] = [];
  resourcePositions: Object[] = [];
  demandForCapabilities: Object[] = [];
  demandForRoles: Object[] = [];
  demandForPositions: Object[] = [];
  associativeDemandForCapabilities: Object[] = [];
  associativeDemandForRoles: Object[] = [];
  associativeDemandForPositions: Object[] = [];

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
      this.processAutomationPercentage();
      this.processAutomationCandidates();
      this.processResourceAvailability();
      //this.processResourceDemand();
      this.processRelativeResourcePropertiesDemand();
      this.loaded = true;
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
    this.processAutomationPercentage();
    this.processAutomationCandidates();
    this.processResourceAvailability();
    //this.processResourceDemand();
    this.processRelativeResourcePropertiesDemand();
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
              if (!taskMap.has(label)) {
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
    if(taskMap.size === 0){
      this.activeBottlenecks.push({
        name: "No bottlenecks found", value: 1

      })
    }
  }

  processAutomationPercentage(): void {
    this.automationPercentage = [];
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      this.automationPercentage.push({
        name: specificationDataContainer.specificationInformation.uri + "\n " +
          specificationDataContainer.specificationInformation.version,
        value: (specificationDataContainer.specificationStatistic.automationPercentage * 100).toFixed(2)
      })
    });
  }

  processAutomationCandidates(): void {
    this.automationCandidates = [];
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      let automationElement: { name: string, series: { name: string, value: number }[] } = {
        name: specificationDataContainer.specificationInformation.uri + "\n " +
          specificationDataContainer.specificationInformation.version,
        series: []
      }
      let candidates = 0;
      specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
        if (!taskStatistic.automated) {
          candidates++;
          automationElement.series.push({
            name: taskStatistic.taskid,
            value: taskStatistic.avgCompletionTime
          })
        }
      })
      if(candidates === 0){
        automationElement.series.push({name: "No candidates found", value: 0})
      }
      this.automationCandidates.push(automationElement);
    });
  }

  processResourceAvailability(): void {
    this.resourceCapabilities = [];
    this.resourceRoles = [];
    this.resourcePositions = [];
    let participants: Participant[] = this.specificationDataContainers!.at(0)!.participants;
    let capabilities: Map<string, number> = new Map;
    let roles: Map<string, number> = new Map;
    let positions: Map<string, number> = new Map;
    participants.forEach(participant => {
      participant.capabilities.forEach(capability => {
        if (!capabilities.has(capability.name)) {
          capabilities.set(capability.name, 0);
        }
        capabilities.set(capability.name, capabilities.get(capability.name)! + 1);
      })
      participant.roles.forEach(role => {
        if (!roles.has(role.name)) {
          roles.set(role.name, 0);
        }
        roles.set(role.name, roles.get(role.name)! + 1);
      })
      participant.positions.forEach(position => {
        if (!positions.has(position.title)) {
          positions.set(position.title, 0);
        }
        positions.set(position.title, positions.get(position.title)! + 1);
      })
    })

    let capabilitiesElement: { name: string, series: { name: string, value: number }[] } = {
      name: "Capabilities",
      series: []
    }
    capabilities.forEach((count, label) => {
      capabilitiesElement.series.push({
        name: label,
        value: count
      })
    })
    if(capabilities.size === 0){
      capabilitiesElement.series.push({name: "No data available", value: 0})
    }
    this.resourceCapabilities.push(capabilitiesElement);

    let rolesElement: { name: string, series: { name: string, value: number }[] } = {
      name: "Roles",
      series: []
    }
    roles.forEach((count, label) => {
      rolesElement.series.push({
        name: label,
        value: count
      })
    })
    if(roles.size === 0){
      rolesElement.series.push({name: "No data available", value: 0})
    }
    this.resourceRoles.push(rolesElement);

    let positionsElement: { name: string, series: { name: string, value: number }[] } = {
      name: "Positions",
      series: []
    }
    positions.forEach((count, label) => {
      positionsElement.series.push({
        name: label,
        value: count
      })
    })
    if(positions.size === 0){
      positionsElement.series.push({name: "No data available", value: 0})
    }
    this.resourcePositions.push(positionsElement);

    console.log(this.resourcePositions)

  }

  processRelativeResourcePropertiesDemand(): void {
    this.demandForRoles = [];
    this.demandForCapabilities = [];
    this.demandForPositions = [];
    this.associativeDemandForRoles = [];
    this.associativeDemandForCapabilities = [];
    this.associativeDemandForPositions = [];

    let taskCount = 0;
    let rolesDemand: Map<string, number> = new Map();
    let capabilitiesDemand: Map<string, number> = new Map();
    let positionsDemand: Map<string, number> = new Map();
    let associativeRolesDemand: Map<string, number> = new Map();
    let associativeCapabilitiesDemand: Map<string, number> = new Map();
    let associativePositionsDemand: Map<string, number> = new Map();
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      taskCount += specificationDataContainer.specificationStatistic.taskStatisticDTOS.length;
      specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
        taskStatistic.demandedRoles.forEach(role => {
          if (!rolesDemand.has(role.name)) {
            rolesDemand.set(role.name, 0);
          }
          rolesDemand.set(role.name, rolesDemand.get(role.name)! + 1);
        });
        taskStatistic.demandedCapabilities.forEach(capability => {
          if (!capabilitiesDemand.has(capability.name)) {
            capabilitiesDemand.set(capability.name, 0);
          }
          capabilitiesDemand.set(capability.name, capabilitiesDemand.get(capability.name)! + 1);
        });
        taskStatistic.demandedPosition.forEach(position => {
          if (!positionsDemand.has(position.title)) {
            positionsDemand.set(position.title, 0);
          }
          positionsDemand.set(position.title, positionsDemand.get(position.title)! + 1);
        });
        if (taskStatistic.associatedRoles !== undefined && Object.keys(taskStatistic.associatedRoles).length !== 0) {
          Object.entries(taskStatistic.associatedRoles).forEach((keyValue) => {
            if (!associativeRolesDemand.has(keyValue[0])) {
              associativeRolesDemand.set(keyValue[0], 0);
            }
            associativeRolesDemand.set(keyValue[0], associativeRolesDemand.get(keyValue[0])! + keyValue[1]);
          })
        }
        if (taskStatistic.associatedCapabilities !== undefined && Object.keys(taskStatistic.associatedCapabilities).length !== 0) {
          Object.entries(taskStatistic.associatedCapabilities).forEach((keyValue) => {
            if (!associativeCapabilitiesDemand.has(keyValue[0])) {
              associativeCapabilitiesDemand.set(keyValue[0], 0);
            }
            associativeCapabilitiesDemand.set(keyValue[0], associativeCapabilitiesDemand.get(keyValue[0])! + keyValue[1]);
          })
        }
        if (taskStatistic.associatedPositions !== undefined && Object.keys(taskStatistic.associatedPositions).length !== 0) {
          Object.entries(taskStatistic.associatedPositions).forEach((keyValue) => {
            if (!associativePositionsDemand.has(keyValue[0])) {
              associativePositionsDemand.set(keyValue[0], 0);
            }
            associativePositionsDemand.set(keyValue[0], associativePositionsDemand.get(keyValue[0])! + keyValue[1]);
          })
        }
      })
    });

    let rolesElement: { name: string, series: { name: string, value: string }[] } = {
      name: "Roles",
      series: []
    }
    rolesDemand.forEach((count, label) => {
      rolesElement.series.push({
        name: label,
        value: ((count / taskCount) * 100).toFixed(2)
      })
    })
    if(rolesDemand.size === 0){
      rolesElement.series.push({name: "No data available", value: "0"})
    }
    this.demandForRoles.push(rolesElement);

    let capabilitiesElement: { name: string, series: { name: string, value: string }[] } = {
      name: "Capabilities",
      series: []
    }
    capabilitiesDemand.forEach((count, label) => {
      capabilitiesElement.series.push({
        name: label,
        value: ((count / taskCount) * 100).toFixed(2)
      })
    })
    if(capabilitiesDemand.size === 0){
      capabilitiesElement.series.push({name: "No data available", value: "0"})
    }
    this.demandForCapabilities.push(capabilitiesElement);

    let positionsElement: { name: string, series: { name: string, value: string }[] } = {
      name: "Positions",
      series: []
    }
    positionsDemand.forEach((count, label) => {
      positionsElement.series.push({
        name: label,
        value: ((count / taskCount) * 100).toFixed(2)
      })
    })
    if(positionsDemand.size === 0){
      positionsElement.series.push({name: "No data available", value: "0"})
    }
    this.demandForPositions.push(positionsElement);


    let associativeRolesElement: { name: string, series: { name: string, value: string }[] } = {
      name: "Roles",
      series: []
    }
    associativeRolesDemand.forEach((count, label) => {
      associativeRolesElement.series.push({
        name: label,
        value: ((count / taskCount) * 100).toFixed(2)
      })
    })
    if(associativeRolesDemand.size === 0){
      associativeRolesElement.series.push({name: "No data available", value: "0"})
    }
    this.associativeDemandForRoles.push(associativeRolesElement);

    let associativeCapabilitiesElement: { name: string, series: { name: string, value: string }[] } = {
      name: "Capabilities",
      series: []
    }
    associativeCapabilitiesDemand.forEach((count, label) => {
      associativeCapabilitiesElement.series.push({
        name: label,
        value: ((count / taskCount) * 100).toFixed(2)
      })
    })
    if(associativeCapabilitiesDemand.size === 0){
      associativeCapabilitiesElement.series.push({name: "No data available", value: "0"})
    }
    this.associativeDemandForCapabilities.push(associativeCapabilitiesElement);

    let associativePositionsElement: { name: string, series: { name: string, value: string }[] } = {
      name: "Positions",
      series: []
    }
    associativePositionsDemand.forEach((count, label) => {
      associativePositionsElement.series.push({
        name: label,
        value: ((count / taskCount) * 100).toFixed(2)
      })
    })
    if(associativePositionsDemand.size === 0){
      associativePositionsElement.series.push({name: "No data available", value: "0"})
    }
    this.associativeDemandForPositions.push(associativePositionsElement);
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
    return dates;
  }


}
