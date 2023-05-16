import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {faPencil, faArrowLeft, faArrowsToEye, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {ExtensionSpecification} from "../../yawl/resources/dto/extension-specification.entity";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {WorkitemQueueDialogComponent} from "../workitem-queue-dialog/workitem-queue-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WorkitemsDialogComponent} from "../workitems-dialog/workitems-dialog.component";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {ExtensionTask} from "../../yawl/resources/dto/extension-task.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {SpecificationStatistic} from "../../yawl/resources/dto/specification-statistic.entity";
import {FormatUtils} from "../../util/format-util";
import {env} from "../../../environments/environment";
import {NotifierService} from "angular-notifier";
import {ExtensionSpecificationService} from "../../yawl/resources/services/extension-specification.service";
import {SpecificationDataService} from "../../yawl/resources/services/specification-data.service";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {FormControl, FormGroup} from "@angular/forms";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements AfterViewInit {
  faPencil = faPencil;
  faArrowLeftLong = faArrowLeftLong
  faArrowsToEye = faArrowsToEye;
  casesURL = env.remoteUIUrl;
  specificationDataContainer: SpecificationDataContainer | undefined;
  cases: CaseStatistic[] | undefined = undefined;
  // @ts-ignore
  viewType: number = '0';
  formatUtils: FormatUtils = new FormatUtils();

  // Config
  statisticSelection = "common";
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
  // @ts-ignore
  sort: MatSort;
  loaded = false;
  specificationTimeLimit: number = 0;

  // Common
  caseInstances: Object[] = [];
  avgCasesPerWeekday: Object[] = [];
  capacityDemand: Object[] = [];
  costs: Object[] = [];

  // Success
  deadlineNotExceeded: number = 0;
  deadlineExceeded: number = 0;
  successful: number = 0;
  unsucessful: number = 0;
  slaLine: Object[] = [];
  successLine: Object[] = [];
  deadlineValues: Object[] = [];
  successValues: Object[] = [];

  specPerformanceComparison: Object[] = [];

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    if (this.dataSource != undefined) {
      this.dataSource.sort = this.sort;
    }
  }

  displayedColumns: string[] = ['caseid', 'start', 'end', 'age', 'running', 'queue', 'overdue', 'cancelled', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource<CaseStatistic> = new MatTableDataSource<CaseStatistic>();


  constructor(public dialog: MatDialog,
              private specificationDataService: SpecificationDataService,
              private extensionSpecificationService: ExtensionSpecificationService,
              private specificationService: SpecificationService,
              private route: ActivatedRoute,
              private notifierService: NotifierService) {
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(params => {
      this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
        specificationDataContainers.forEach(specificationDataContainer => {
          if (specificationDataContainer.specificationInformation.uri === params.get('uri')
            && specificationDataContainer.specificationInformation.specversion === params.get('specversion')
            && specificationDataContainer.specificationInformation.id === params.get('uuid')) {
            this.specificationDataContainer = specificationDataContainer;
            this.cases = specificationDataContainer.specificationStatistic.caseStatisticDTOS;
          }
        })
        this.dataSource.data = this.cases!;
        this.dataSource.sort = this.sort;
        this.specificationTimeLimit = <number>this.specificationDataContainer?.extensionSpecification.specificationTimeLimit;
        this.statisticTicks = this.calculateStatisticticks();
        this.processSuccessStats();
        this.processCasesInRange();
        this.processCaseInstancesAndCapacityDemand();
        this.processAvgCasesPerWeekday();
        this.processCosts();
        this.loaded = true;
      });
    });
  }

  updateData(): void {
    if (this.range.value.start === null || this.range.value.end === null) {
      return;
    }
    this.statisticTicks = this.calculateStatisticticks();
    this.processSuccessStats();
    this.processCasesInRange();
    this.processCaseInstancesAndCapacityDemand();
    this.processAvgCasesPerWeekday();
    this.processCosts();
  }

  processCasesInRange(): void {
    this.casesInRange = 0;
    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (this.timestampIsInDateRange(caseStatistic.start)) {
        this.casesInRange++;
      }
    })
  }

  processSuccessStats(): void {
    let allStarts: Map<string, { deadlineExceeded: number, deadlineNotExceeded: number,
      successful: number, unsuccessful: number }> = new Map();

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + this.monthNames[tick.month];
      allStarts.set(yearMonthID, {deadlineExceeded: 0, deadlineNotExceeded: 0,
        successful: 0, unsuccessful: 0});
    })
    this.deadlineNotExceeded = 0;
    this.deadlineExceeded = 0;
    this.successful = 0;
    this.unsucessful = 0;

    this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (this.timestampIsInDateRange(caseStatistic.start)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + this.monthNames[month];
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
  }

  processCaseInstancesAndCapacityDemand(): void {
    let allStarts: Map<string, Map<string, { count: number, capacityDemand: number }>> = new Map();

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + this.monthNames[tick.month];
      allStarts.set(yearMonthID, new Map());
    })

    let label = this.specificationDataContainer!.specificationInformation.uri + " "
      + this.specificationDataContainer!.specificationInformation.version
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
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
    })
  }

  processAvgCasesPerWeekday(): void{
    let allStarts: Map<string, Map<string, number>> = new Map();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + this.monthNames[tick.month];
      allStarts.set(yearMonthID, new Map([["Sunday", 0], ["Monday", 0], ["Tuesday", 0], ["Wednesday", 0],
        ["Thursday", 0], ["Friday", 0], ["Saturday", 0]]));
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (this.timestampIsInDateRange(caseStatistic.start)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + this.monthNames[month];
        let figures = allStarts.get(yearMonthID);
        figures!.set(weekday[date.getDay()], figures!.get(weekday[date.getDay()])! + 1)
      }
    });
    this.avgCasesPerWeekday = []
    allStarts.forEach((weekValues, yearMonthID) => {
      let label = (this.fineness === 'month') ? yearMonthID.replace(".", " ") : yearMonthID.split(".")[0];
      let quotient = (this.fineness ==='month')? 4.34: 52.18;
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
  }

  processCosts(): void{
    let allStarts: Map<string, Map<string, number>> = new Map();
    let taskMap: Map<string, TaskStatistic> = new Map();
    this.specificationDataContainer!.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      taskMap.set(taskStatistic.taskid, taskStatistic);
    })

    this.statisticTicks.forEach((tick) => {
      let yearMonthID = tick.year + "." + this.monthNames[tick.month];
      allStarts.set(yearMonthID, new Map());
    })
    this.specificationDataContainer!.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
      if (this.timestampIsInDateRange(caseStatistic.start)) {
        let date = new Date(caseStatistic.start);
        let month = (this.fineness === 'month') ? date.getMonth() : 0;
        let yearMonthID = date.getFullYear() + "." + this.monthNames[month];
        let monthInstance = allStarts.get(yearMonthID)!;
        caseStatistic.taskTimingDTOS.forEach(taskTiming => {
          if(!taskTiming.automated && !taskTiming.cancelled && taskTiming.endTimestamp !== 0){
            if(!monthInstance.has(taskTiming.taskid)){
              monthInstance.set(taskTiming.taskid, 0);
            }
            monthInstance.set(taskTiming.taskid, monthInstance.get(taskTiming.taskid)! + ((taskTiming.endTimestamp - taskTiming.startTimestamp) / (1000*60*60))*taskMap.get(taskTiming.taskid)!.costResourceHour )
          }
        })
      }
    });
    this.costs = [];
    allStarts.forEach((taskMap, label) => {
      let costElement : { name: string, series: { name: string, value: number }[] } = {
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
  }

  openWorkitemQueueDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specificationStatistic: this.specificationDataContainer?.specificationStatistic
    };

    this.dialog.open(WorkitemQueueDialogComponent, dialogConfig);
  }

  openWorkitemsDialog(caseid: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specificationStatistic: this.specificationDataContainer?.specificationStatistic,
      caseid: caseid
    };

    this.dialog.open(WorkitemsDialogComponent, dialogConfig);
  }

  isCaseView(): boolean {
    return this.viewType == ViewType.Case;
  }

  isTaskView(): boolean {
    return this.viewType == ViewType.Task;
  }

  changedSpecificationAttributes(): void {
    if (this.specificationDataContainer?.specificationStatistic === undefined) {
      return;
    }
    this.specificationService
      .storeSpecificationAttributesById(this.specificationDataContainer?.specificationStatistic.id,
        this.specificationDataContainer?.specificationStatistic.version,
        this.specificationDataContainer?.specificationStatistic.uri,
        "" + this.specificationTimeLimit)
      .subscribe(result => {
        this.notifierService.notify("success", "Specification time limit saved");
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    if (sort.direction === '') {
      this.dataSource?.data.sort((a: CaseStatistic, b: CaseStatistic) => this.compare(a.caseid, b.caseid, true));
    } else {
      switch (sort.active) {
        case 'overdue':
          this.dataSource?.data.sort((a: CaseStatistic, b: CaseStatistic) => this.compare(+(a.age > +this.specificationDataContainer?.extensionSpecification!.specificationTimeLimit!), +(b.age > +this.specificationDataContainer?.extensionSpecification!.specificationTimeLimit!), isAsc));
          return;
        default:
          return 0;
      }
    }

    return;
  }

  selectStatistic(val: any) {
    this.statisticSelection = val;
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

  formatVerticalGroupChart(data: any): string {
    console.log(data);
    return "";
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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
}

enum ViewType {
  Case,
  Task
}
