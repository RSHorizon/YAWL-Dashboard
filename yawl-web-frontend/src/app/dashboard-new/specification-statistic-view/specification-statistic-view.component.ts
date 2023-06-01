import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {SpecificationDataService} from "../../yawl/resources/services/specification-data.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {LegendPosition} from "@swimlane/ngx-charts";
import {FormatUtils} from "../../util/format-util";
import {FormControl, FormGroup} from "@angular/forms";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import * as d3 from 'd3';
import {StatisticUtils} from "../../util/statistic-utils";
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {
  Chart,
  ChartConfiguration,
  Colors,
  TimeScale,
  BubbleController,
  BubbleDataPoint,
  BubbleControllerDatasetOptions,
  LinearScale,
  PointElement,
  Tooltip,
  TooltipItem,
  TooltipModel,
  BarController,
  CategoryScale,
  BarElement,
  Legend,
  ScriptableContext, ChartDataset, ChartTypeRegistry
} from "chart.js";
import 'chartjs-adapter-date-fns';
import {SpecificationStatisticChartConfigurations} from "./specification-statistic-chart-configurations";
import {ColorUtils} from "../../util/color-util";


@Component({
  selector: 'app-specification-statistic-view',
  templateUrl: './specification-statistic-view.component.html',
  styleUrls: ['./specification-statistic-view.component.css']
})
export class SpecificationStatisticViewComponent implements OnInit {
  faCircleInfo = faCircleInfo;
  specificationDataContainers: SpecificationDataContainer[] | undefined;
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
    end: new FormControl<Date | null>(new Date(Date.now())),
  });
  d3ViewVar = d3;
  formatUtils = new FormatUtils();


  // Config
  loaded = false;
  fineness = 'month';
  statisticSelection = "performance";
  statisticResourceSelection = "role";
  statisticTicks: { year: number, month: number }[] = [];
  legendPiePosition: LegendPosition = LegendPosition.Below;
  casesInRange = 0;

  // Performance
  specPerformanceOptions = SpecificationStatisticChartConfigurations.specPerformanceComparisonOptions(this.fineness === 'month');
  specPerformanceComparisonData: ChartConfiguration<'bubble'>['data']['datasets'] = [];
  overallIndicatorOptions = SpecificationStatisticChartConfigurations.specIndicatorOptions(this.fineness === 'month');
  overallIndicatorData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  specOutlierOptions = SpecificationStatisticChartConfigurations.specOutlierOptions(this.fineness === 'month');
  specOutlierData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  // Capacity
  capacityUtilizationOptions = SpecificationStatisticChartConfigurations.capacityUtilizationOptions(this.fineness === 'month');
  capacityUtilizationData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  activeBottlenecksOptions = SpecificationStatisticChartConfigurations.activeBottlenecksOptions(this.fineness === 'month');
  activeBottlenecksData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  pastBottlenecksOptions = SpecificationStatisticChartConfigurations.pastBottlenecksOptions(this.fineness === 'month');
  pastBottlenecksData: ChartConfiguration<'line'>['data'] = {labels: [], datasets: []};


  // Resources
  automationRatioOptions = SpecificationStatisticChartConfigurations.automationRatioOptions(this.fineness === 'month');
  automationRatioData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};
  automationCandidatesOptions = SpecificationStatisticChartConfigurations.automationCandidatesOptions(this.fineness === 'month');
  automationCandidatesData: ChartConfiguration<'bar'>['data'] = {labels: [], datasets: []};

  resourceRadarOptions = SpecificationStatisticChartConfigurations.resourcesRadarOptions(this.fineness === 'month');
  resourceUtilizationRadarOptions = SpecificationStatisticChartConfigurations.resourceUtilizationRadarOptions(this.fineness === 'month');
  roleDistributionData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  capabilityDistributionData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  positionDistributionData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  configuredRolesData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  configuredCapabilitiesData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  configuredPositionsData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  roleUtilizationData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  capabilityUtilizationData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};
  positionUtilizationData: ChartConfiguration<'radar'>['data'] = {labels: [], datasets: []};

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private specificationDataService: SpecificationDataService) {
    Chart.register(Colors, TimeScale, BubbleController, LinearScale, PointElement, Tooltip,
      CategoryScale, BarController, BarElement, Legend);
  }


  ngOnInit(): void {
    this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
      this.specificationDataContainers = specificationDataContainers;
      this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
      this.processSpecPerformanceComparison();
      this.processCasesInRange();
      this.processIndicatorRate();
      this.processSpecificationOutliers();
      this.processCapacityUtilization();
      this.processAutomation();
      this.processResourceRadars();
      this.processBottlenecks();
      this.processPastBottlenecks();
      this.loaded = true;
    });
  }

  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
    this.processSpecPerformanceComparison();
    this.processCasesInRange();
    this.processIndicatorRate();
    this.processSpecificationOutliers();
    this.processCapacityUtilization();
    this.processAutomation();

    this.specPerformanceOptions = SpecificationStatisticChartConfigurations.specPerformanceComparisonOptions(this.fineness === 'month');
    this.overallIndicatorOptions = SpecificationStatisticChartConfigurations.specIndicatorOptions(this.fineness === 'month');
    this.specOutlierOptions = SpecificationStatisticChartConfigurations.specOutlierOptions(this.fineness === 'month');
    this.capacityUtilizationOptions = SpecificationStatisticChartConfigurations.capacityUtilizationOptions(this.fineness === 'month');
    this.automationRatioOptions = SpecificationStatisticChartConfigurations.automationRatioOptions(this.fineness === 'month');
    this.automationCandidatesOptions = SpecificationStatisticChartConfigurations.automationCandidatesOptions(this.fineness === 'month');
    this.resourceRadarOptions = SpecificationStatisticChartConfigurations.resourcesRadarOptions(this.fineness === 'month');
  }

  selectStatistic(val: any) {
    this.statisticSelection = val;
    // Update statistic graphics after they become unhidden
    // Prevents misaligned ngx charts
    window.dispatchEvent(new Event('resize'));
  }

  processCasesInRange(): void {
    this.casesInRange = 0;
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
          this.casesInRange++;
        }
      })
    });
  }

  processSpecPerformanceComparison(): void {
    this.specPerformanceComparisonData = [];
    let maxCaseCountPerPeriod = 0;
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      let map: Map<number, number[]> = new Map;
      this.statisticTicks.forEach(tick => {
        map.set(((this.fineness === 'month') ? tick.month : tick.year), []);
      })
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
          && StatisticUtils.notCancelledAndCompleted(caseStatistic)) {
          let startDate = new Date(caseStatistic.start);
          let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getTime() : new Date(startDate.getFullYear(), 1, 0).getTime();
          let period = map.get(tick)!;
          period.push(caseStatistic.age);
          if (period.length > maxCaseCountPerPeriod) {
            maxCaseCountPerPeriod = period.length;
          }
        }
      })

      let dataPoints: { x: number; y: number; r: number; count: number }[] = [];
      map.forEach((timestamps, tick) => {
        if (timestamps.length !== 0) {
          const sum = timestamps.reduce((a, b) => a + b, 0);
          const avg = (sum / timestamps.length) || 0;
          dataPoints.push({
            x: tick,
            y: avg,
            r: Math.max(7 * (timestamps.length / maxCaseCountPerPeriod), 1),
            count: timestamps.length
          })
        }
      })
      this.specPerformanceComparisonData.push({
        label: specificationDataContainer.specificationInformation.uri + " " + specificationDataContainer.specificationInformation.specversion,
        borderColor: ColorUtils.getDarkerColor(specificationDataContainer.specificationStatistic.color!),
        backgroundColor: ColorUtils.getLighterColor(specificationDataContainer.specificationStatistic.color!),
        data: dataPoints
      });
    });
  }

  processIndicatorRate(): void {
    let successMap: Map<number, { success: number[], sla: number[] }> = new Map()
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
          && caseStatistic.end !== 0) {
          let startDate = new Date(caseStatistic.start);
          let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getTime() : new Date(startDate.getFullYear(), 1, 0).getTime();
          if (!successMap.has(tick)) {
            successMap.set(tick, {success: [], sla: []});
          }
          let successArray = successMap.get(tick)!;

          if (specificationDataContainer.extensionSpecification.specificationTimeLimit === 0) {
            successArray.sla.push(1);
          } else {
            if (Number(specificationDataContainer.extensionSpecification.specificationTimeLimit) < caseStatistic.age) {
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

  processSpecificationOutliers(): void {
    let labels: string[][] = [];
    let colors: string[] = [];
    let avg: number[] = [];
    let min: number[] = [];
    let max: number[] = [];
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      if (specificationDataContainer.specificationStatistic.caseStatisticDTOS.length !== 0) {
        let avgAge = 0;
        let counter = 0;
        let minAge = Number.MAX_VALUE;
        let maxAge = 0;
        specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach((caseStatistic, key) => {
          if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
            && StatisticUtils.notCancelledAndCompleted(caseStatistic)) {
            avgAge += caseStatistic.age;
            counter++;
            if (minAge > caseStatistic.age) {
              minAge = caseStatistic.age;
            }
            if (maxAge < caseStatistic.age) {
              maxAge = caseStatistic.age;
            }
          }
        })
        labels.push([specificationDataContainer.specificationInformation.uri,
          specificationDataContainer.specificationInformation.specversion]);
        colors.push(specificationDataContainer.specificationStatistic.color!);
        avg.push((avgAge / counter) || 0);
        min.push(minAge);
        max.push(maxAge);
      }
    });

    let backgroundFunction = function (context: ScriptableContext<"bar">) {
      return colors[context.dataIndex];
    };

    this.specOutlierData.labels = labels;
    this.specOutlierData.datasets = [];
    this.specOutlierData.datasets.push({
      label: "Run time minimum",
      data: min,
      backgroundColor: backgroundFunction
    });
    this.specOutlierData.datasets.push({
      label: "Run time average",
      data: avg,
      backgroundColor: backgroundFunction
    });
    this.specOutlierData.datasets.push({
      label: "Run time maximum",
      data: max,
      backgroundColor: backgroundFunction
    });
  }

  processCapacityUtilization(): void {
    let dataMap: Map<number, Map<string, { color: string, capacity: number[] }>> = new Map();
    this.statisticTicks.forEach(tick => {
      let baseMap: Map<string, { color: string, capacity: number[] }> = new Map();
      this.specificationDataContainers?.forEach(specificationDataContainer => {
        let label = specificationDataContainer.specificationInformation.uri + " " + specificationDataContainer.specificationInformation.specversion;
        baseMap.set(label, {color: specificationDataContainer.specificationStatistic.color!, capacity: []});
      })
      dataMap.set(((this.fineness === 'month') ? tick.month : tick.year), baseMap);
    })
    this.specificationDataContainers?.forEach(specificationDataContainer => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
          && !caseStatistic.cancelled) {
          caseStatistic.taskTimingDTOS.forEach(taskTiming => {
            if (!taskTiming.automated && !taskTiming.cancelled && taskTiming.status === 'Completed'
              && taskTiming.endTimestamp !== 0) {
              let startDate = new Date(taskTiming.startTimestamp);
              let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getTime() : new Date(startDate.getFullYear(), 1, 0).getTime();
              let label = specificationDataContainer.specificationInformation.uri + " " + specificationDataContainer.specificationInformation.specversion;
              let period = dataMap.get(tick)!;
              period.get(label)!.capacity.push(taskTiming.resourceTime);
            }
          })
        }
      })
    });
    let finalDataMap: Map<string, { label: string, color: string, capacity: number[] }> = new Map();
    this.capacityUtilizationData.labels = [];
    dataMap.forEach((data, tick) => {
      this.capacityUtilizationData.labels!.push(tick);
      data.forEach((capacityInstance, label) => {
        const capacityUtilization = capacityInstance.capacity.reduce((a, b) => a + b, 0);
        if (!finalDataMap.has(label)) {
          finalDataMap.set(label, {color: capacityInstance.color, label: label, capacity: []})
        }
        finalDataMap.get(label)!.capacity.push(capacityUtilization);
      })
    });

    this.capacityUtilizationData.datasets = [];
    finalDataMap.forEach(finalDataMapInstance => {
      this.capacityUtilizationData.datasets.push({
        label: finalDataMapInstance.label,
        data: finalDataMapInstance.capacity,
        backgroundColor: finalDataMapInstance.color
      });
    })
  }

  processBottlenecks(): void {
    this.activeBottlenecksData.datasets = [];
    this.activeBottlenecksData.labels = [];
    let taskMap: Map<string, { color: string, queueCount: number[] }> = new Map();
    this.specificationDataContainers?.forEach((specificationDataContainer, key) => {
      let label = [specificationDataContainer.specificationInformation.uri,
        specificationDataContainer.specificationInformation.specversion];

      let colorMap: Map<string, string> = new Map();
      specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
        colorMap.set(taskStatistic.taskid, taskStatistic.color!);
      })

      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (caseStatistic.end === 0 && !caseStatistic.cancelled) {
          caseStatistic.queue.forEach(taskTiming => {
            if (taskTiming.status === 'Offered' || taskTiming.status === 'Allocated') {
              if (!taskMap.has(taskTiming.taskid)) {
                taskMap.set(taskTiming.taskid, {color: colorMap.get(taskTiming.taskid)!, queueCount: [0, 0, 0]});
              }
              taskMap.get(taskTiming.taskid)!.queueCount[key]++;
            }
          })
        }
      })
      this.activeBottlenecksData.labels?.push(label);
    });
    taskMap.forEach((task, id) => {
      this.activeBottlenecksData.datasets.push({
        label: id,
        data: task.queueCount,
        backgroundColor: task.color
      });
    })
    this.activeBottlenecksData.datasets = this.activeBottlenecksData.datasets.sort((a, b) => a.label!.localeCompare(b.label!));
  }

  processPastBottlenecks(): void {
    // Jahr, Monat, Tag, Stunde
    let taskTimingsSorted: {timestamp: number, taskid: string, change: number}[] = [];
    this.specificationDataContainers?.forEach((specificationDataContainer) => {
      specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
        if (StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)){
          caseStatistic.taskTimingDTOS.forEach(taskTiming => {
            if(!taskTiming.automated){
              let created = (taskTiming.offeredTimestamp === 0)? taskTiming.allocatedTimestamp: taskTiming.offeredTimestamp;
              if(created !== 0 && taskTiming.startTimestamp !== 0){
                taskTimingsSorted.push({timestamp : created, taskid: taskTiming.taskid, change: 1});
                taskTimingsSorted.push({timestamp : taskTiming.startTimestamp, taskid: taskTiming.taskid, change: -1});
              }
            }
          })
        }
      })
    });
    taskTimingsSorted.sort((a, b) => (a.timestamp < b.timestamp)? -1 : 1 )

    this.pastBottlenecksData.labels = [];
    let yDataArray: number[] = [];

    let start = this.range.value.start?.getTime();
    let end = this.range.value.end?.getTime();
    let tick = 1000 * 60 * 60; // hours
    if(start !== 0 && start !== undefined && end !== 0 && end !== undefined){
      // Zeiträum größer als 4 Jahre unzulässig
      if(end - start > (1000 * 60 * 60 * 24 * 29 * 12 * 4) ){
        end = Date.now();
        start = end - (1000 * 60 * 60 * 24 * 29 * 12 * 4);
      }
      let taskTimestampIndex = 0;
      let generalTickIndex = 0;
      let status: Map<string, number> = new Map();
      for(let timeIndex = start; timeIndex < end; timeIndex += tick){
        generalTickIndex++;
        while(taskTimestampIndex < taskTimingsSorted.length
              && taskTimingsSorted[taskTimestampIndex].timestamp < timeIndex){
          if(!status.has(taskTimingsSorted[taskTimestampIndex].taskid)){
            status.set(taskTimingsSorted[taskTimestampIndex].taskid, 0);
          }
          status.set(taskTimingsSorted[taskTimestampIndex].taskid, status.get(taskTimingsSorted[taskTimestampIndex].taskid)! + taskTimingsSorted[taskTimestampIndex].change);
          taskTimestampIndex++;
        }
        this.pastBottlenecksData.labels.push(timeIndex)
        let count = 0;
        status.forEach(stat => {
          count += stat
        })
        yDataArray.push(count);
      }
    }
    this.pastBottlenecksData.datasets = [];
    this.pastBottlenecksData.datasets.push({
      data: yDataArray
    })
  }

  processAutomation(): void {
    this.automationCandidatesData.datasets = [];
    this.automationCandidatesData.labels = [];
    let ratioLabels: string[][] = [];
    let colors: string[] = [];
    let ratios: number[] = [];
    let taskMap: Map<string, { color: string, avgTime: number[] }> = new Map();
    this.specificationDataContainers?.forEach((specificationDataContainer, key) => {
      ratioLabels.push([specificationDataContainer.specificationInformation.uri,
        specificationDataContainer.specificationInformation.specversion]);
      colors.push(specificationDataContainer.specificationStatistic.color!);
      ratios.push(specificationDataContainer.specificationStatistic.automationPercentage);

      let label = [specificationDataContainer.specificationInformation.uri,
        specificationDataContainer.specificationInformation.specversion];

      specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
        if (!taskStatistic.automated) {
          if (!taskMap.has(taskStatistic.taskid)) {
            taskMap.set(taskStatistic.taskid, {color: taskStatistic.color!, avgTime: [0, 0, 0]});
          }
          taskMap.get(taskStatistic.taskid)!.avgTime[key] = taskStatistic.avgCompletionTime;
        }
      })
      this.automationCandidatesData.labels?.push(label);
    });
    taskMap.forEach((task, id) => {
      this.automationCandidatesData.datasets.push({
        label: id,
        data: task.avgTime,
        backgroundColor: task.color
      });
    })
    this.automationCandidatesData.datasets = this.automationCandidatesData.datasets.sort((a, b) => a.label!.localeCompare(b.label!));

    let backgroundFunction = function (context: ScriptableContext<"bar">) {
      return colors[context.dataIndex];
    };

    this.automationRatioData.labels = ratioLabels;
    this.automationRatioData.datasets = [];
    this.automationRatioData.datasets.push({
      label: "Automation ratio",
      data: ratios,
      backgroundColor: backgroundFunction
    });
  }

  processResourceRadars(): void {
    let participants: Participant[] = this.specificationDataContainers!.at(0)!.participants;
    let roles: Map<string, number> = new Map;
    let capabilities: Map<string, number> = new Map;
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


    let taskCount = 0;
    let rolesDemand: Map<string, number> = new Map([...roles.keys()].map(key => [key, 0]));
    let capabilitiesDemand: Map<string, number> = new Map([...capabilities.keys()].map(key => [key, 0]));
    let positionsDemand: Map<string, number> = new Map([...positions.keys()].map(key => [key, 0]));
    let totalTimeSpentWithRoles: Map<string, number> = new Map([...roles.keys()].map(key => [key, 0]));
    let totalTimeSpentWithCapabilities: Map<string, number> = new Map([...capabilities.keys()].map(key => [key, 0]));
    let totalTimeSpentWithPositions: Map<string, number> = new Map([...positions.keys()].map(key => [key, 0]));
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
        taskStatistic.demandedPositions.forEach(position => {
          if (!positionsDemand.has(position.title)) {
            positionsDemand.set(position.title, 0);
          }
          positionsDemand.set(position.title, positionsDemand.get(position.title)! + 1);
        });
        if (taskStatistic.totalTimeSpentWithRoles !== undefined && Object.keys(taskStatistic.totalTimeSpentWithRoles).length !== 0) {
          Object.entries(taskStatistic.totalTimeSpentWithRoles).forEach((keyValue) => {
            if (!totalTimeSpentWithRoles.has(keyValue[0])) {
              totalTimeSpentWithRoles.set(keyValue[0], 0);
            }
            totalTimeSpentWithRoles.set(keyValue[0], totalTimeSpentWithRoles.get(keyValue[0])! + keyValue[1]);
          })
        }
        if (taskStatistic.totalTimeSpentWithCapabilities !== undefined && Object.keys(taskStatistic.totalTimeSpentWithCapabilities).length !== 0) {
          Object.entries(taskStatistic.totalTimeSpentWithCapabilities).forEach((keyValue) => {
            if (!totalTimeSpentWithCapabilities.has(keyValue[0])) {
              totalTimeSpentWithCapabilities.set(keyValue[0], 0);
            }
            totalTimeSpentWithCapabilities.set(keyValue[0], totalTimeSpentWithCapabilities.get(keyValue[0])! + keyValue[1]);
          })
        }
        if (taskStatistic.totalTimeSpentWithPositions !== undefined && Object.keys(taskStatistic.totalTimeSpentWithPositions).length !== 0) {
          Object.entries(taskStatistic.totalTimeSpentWithPositions).forEach((keyValue) => {
            if (!totalTimeSpentWithPositions.has(keyValue[0])) {
              totalTimeSpentWithPositions.set(keyValue[0], 0);
            }
            totalTimeSpentWithPositions.set(keyValue[0], totalTimeSpentWithPositions.get(keyValue[0])! + keyValue[1]);
          })
        }
      })
    });

    // Distributions
    this.roleDistributionData.labels = Array.from(roles.keys());
    this.roleDistributionData.datasets = [];
    this.roleDistributionData.datasets.push({
      label: "Quantity", data: Array.from(roles.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    this.capabilityDistributionData.labels = Array.from(capabilities.keys());
    this.capabilityDistributionData.datasets = [];
    this.capabilityDistributionData.datasets.push({
      label: "Quantity", data: Array.from(capabilities.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    this.positionDistributionData.labels = Array.from(positions.keys());
    this.positionDistributionData.datasets = [];
    this.positionDistributionData.datasets.push({
      label: "Quantity", data: Array.from(positions.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    // Configurations
    this.configuredRolesData.labels = Array.from(rolesDemand.keys());
    this.configuredRolesData.datasets = [];
    this.configuredRolesData.datasets.push({
      label: "Quantity", data: Array.from(rolesDemand.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    this.configuredCapabilitiesData.labels = Array.from(capabilitiesDemand.keys());
    this.configuredCapabilitiesData.datasets = [];
    this.configuredCapabilitiesData.datasets.push({
      label: "Quantity", data: Array.from(capabilitiesDemand.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    this.configuredPositionsData.labels = Array.from(positionsDemand.keys());
    this.configuredPositionsData.datasets = [];
    this.configuredPositionsData.datasets.push({
      label: "Quantity", data: Array.from(positionsDemand.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    // Utilizations
    this.roleUtilizationData.labels = Array.from(totalTimeSpentWithRoles.keys());
    this.roleUtilizationData.datasets = [];
    this.roleUtilizationData.datasets.push({
      label: "Quantity", data: Array.from(totalTimeSpentWithRoles.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    this.capabilityUtilizationData.labels = Array.from(totalTimeSpentWithCapabilities.keys());
    this.capabilityUtilizationData.datasets = [];
    this.capabilityUtilizationData.datasets.push({
      label: "Quantity", data: Array.from(totalTimeSpentWithCapabilities.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });

    this.positionUtilizationData.labels = Array.from(totalTimeSpentWithPositions.keys());
    this.positionUtilizationData.datasets = [];
    this.positionUtilizationData.datasets.push({
      label: "Quantity", data: Array.from(totalTimeSpentWithPositions.values()), fill: true,
      backgroundColor: ColorUtils.getTransparentColor(ColorUtils.getMuchLighterColor(ColorUtils.getPrimaryColor()))
    });
  }
}
