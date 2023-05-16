import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {
  faPencil,
  faArrowLeftLong,
  faArrowsToEye,
  faPlus,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WorkItemService} from "../../yawl/resources/services/work-item.service";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {SpecificationStatistic} from "../../yawl/resources/dto/specification-statistic.entity";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {TaskTiming} from "../../yawl/resources/dto/task-timing.entity";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {FormatUtils} from "../../util/format-util";
import {env} from "../../../environments/environment";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-workitems-dialog',
  templateUrl: './workitems-dialog.component.html',
  styleUrls: ['./workitems-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemsDialogComponent implements AfterViewInit {
  faArrowLeftLong = faArrowLeftLong;
  faPencil = faPencil;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  workitemURL = env.remoteUIUrl;
  specificationStatistic: SpecificationStatistic;
  tasks: any | undefined;
  caseid: string | undefined;
  formatUtils: FormatUtils = new FormatUtils();

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['taskid', 'decompositionOrder', 'status', 'queueTime', 'age', 'participants', 'overdue'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: { desciption: "xxxx" } | undefined;
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private workItemService: WorkItemService,
              private specificationService: SpecificationService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<WorkitemsDialogComponent>,
              // @ts-ignore
              @Inject(MAT_DIALOG_DATA) data) {
    this.specificationStatistic = data.specificationStatistic;
    this.caseid = data.caseid;


    let caseStatisticDTO: CaseStatistic = this.specificationStatistic.caseStatisticDTOS
      .filter(caseInstance => caseInstance.caseid === this.caseid)[0]

    // @ts-ignore
    this.dataSource = new MatTableDataSource(caseStatisticDTO.taskTimingDTOS);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  close() {
    this.dialogRef.close();
  }

  computeQueueTime(workitem: TaskTiming): number {
    if (workitem.cancelled) {
      return 0;
    }
    let smallestNumbers = [];
    if (workitem.allocatedTimestamp !== 0) {
      smallestNumbers.push(workitem.allocatedTimestamp);
    }
    if (workitem.offeredTimestamp !== 0) {
      smallestNumbers.push(workitem.offeredTimestamp);
    }
    if (workitem.startTimestamp !== 0) {
      smallestNumbers.push(workitem.startTimestamp);
    }
    smallestNumbers = smallestNumbers.sort((a: number, b: number) => this.compare(a, b, true))
    let creationTimestamp = (smallestNumbers.length !== 0) ? smallestNumbers[0] : 0;
    let queueTime = 0;
    if (workitem.startTimestamp === 0) {
      queueTime = Date.now() - creationTimestamp;
    } else {
      queueTime = workitem.startTimestamp - creationTimestamp;
    }

    return queueTime;
  }

  computeAge(workitem: TaskTiming): number {
    if (workitem.cancelled) {
      return 0;
    }
    let smallestNumbers = [];
    if (workitem.allocatedTimestamp !== 0) {
      smallestNumbers.push(workitem.allocatedTimestamp);
    }
    if (workitem.offeredTimestamp !== 0) {
      smallestNumbers.push(workitem.offeredTimestamp);
    }
    if (workitem.startTimestamp !== 0) {
      smallestNumbers.push(workitem.startTimestamp);
    }
    smallestNumbers = smallestNumbers.sort((a: number, b: number) => this.compare(a, b, true))
    let creationTimestamp = (smallestNumbers.length !== 0) ? smallestNumbers[0] : 0;
    let age = 0;
    if (workitem.endTimestamp === 0) {
      age = Date.now() - creationTimestamp;
    } else {
      age = workitem.endTimestamp - creationTimestamp;
    }

    return age;
  }

  computeCreationTimestamp(workitem: TaskTiming): number {
    if (workitem.cancelled) {
      return 0;
    }
    let smallestNumbers = [];
    if (workitem.allocatedTimestamp !== 0) {
      smallestNumbers.push(workitem.allocatedTimestamp);
    }
    if (workitem.offeredTimestamp !== 0) {
      smallestNumbers.push(workitem.offeredTimestamp);
    }
    if (workitem.startTimestamp !== 0) {
      smallestNumbers.push(workitem.startTimestamp);
    }

    smallestNumbers = smallestNumbers.sort((a: number, b: number) => this.compare(a, b, true))
    return (smallestNumbers.length !== 0) ? smallestNumbers[0] : 0;
  }

  computeMaxQueueTime(workitem: TaskTiming): number {
    if (workitem === undefined) {
      return 0;
    }
    let task = this.specificationStatistic.taskStatisticDTOS.filter((task: TaskStatistic) => task.taskid == workitem.taskid)[0];
    return task.maxQueueAge!;
  }

  computeMaxTaskTime(workitem: TaskTiming): number {
    if (workitem === undefined) {
      return 0;
    }
    let task = this.specificationStatistic.taskStatisticDTOS.filter((task: TaskStatistic) => task.taskid == workitem.taskid)[0];
    if (task.maxTaskAge === undefined) {
      return 0;
    }
    return task.maxTaskAge!;
  }

  computeAvgQueueTime(workitem: TaskTiming): number {
    if (workitem === undefined) {
      return 0;
    }
    let task = this.specificationStatistic.taskStatisticDTOS.filter((task: TaskStatistic) => task.taskid == workitem.taskid)[0];
    return task.avgQueueTime;
  }

  computeAvgCompletionTime(workitem: TaskTiming): number {
    if (workitem === undefined) {
      return 0;
    }
    let task = this.specificationStatistic.taskStatisticDTOS.filter((task: TaskStatistic) => task.taskid == workitem.taskid)[0];
    return task.avgCompletionTime;
  }

  computeAvgTimeToReach(workitem: TaskTiming): number {
    if (workitem === undefined) {
      return 0;
    }
    let task = this.specificationStatistic.taskStatisticDTOS.filter((task: TaskStatistic) => task.taskid == workitem.taskid)[0];
    return task.avgTimeToReach;
  }

  computeCommonParticipants(workitem: TaskTiming): Participant[] {
    if (workitem === undefined) {
      return [];
    }
    let task = this.specificationStatistic.taskStatisticDTOS.filter((task: TaskStatistic) => task.taskid == workitem.taskid)[0];
    //return task.participants;
    return [];
  }

  isInQueue(workitem: any): boolean {
    if (workitem.status === "Offered" || workitem.status === "Allocated") {
      return true;
    }
    return false;
  }

  isOverdue(workitem: TaskTiming): boolean {
    let taskStatistics = this.specificationStatistic.taskStatisticDTOS.filter(taskStatistic => taskStatistic.taskid === workitem.taskid);
    let taskStatistic = (taskStatistics.length !== 0) ? taskStatistics[0] : null;
    if (taskStatistic !== null) {
      let age = this.computeAge(workitem);
      if (workitem.startTimestamp === 0) {
        return age > taskStatistic.maxQueueAge!;
      } else {
        return age > taskStatistic.maxTaskAge!;
      }
    }

    return false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  announceSortChange(sortState: Sort) {
    if (sortState.active == "queueTime" && sortState.direction == "asc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) > this.computeQueueTime(workitemB)) ? -1 : 1)
    } else if (sortState.active == "queueTime" && sortState.direction == "desc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) < this.computeQueueTime(workitemB)) ? -1 : 1)
    }

    if (sortState.active == "age" && sortState.direction == "asc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeAge(workitemA) > this.computeAge(workitemB)) ? -1 : 1)
    } else if (sortState.active == "age" && sortState.direction == "desc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeAge(workitemA) < this.computeAge(workitemB)) ? -1 : 1)
    }

    if (sortState.active == "overdue" && sortState.direction == "asc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.isOverdue(workitemA) > this.isOverdue(workitemB)) ? -1 : 1)
    } else if (sortState.active == "overdue" && sortState.direction == "desc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.isOverdue(workitemA) < this.isOverdue(workitemB)) ? -1 : 1)
    }
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
