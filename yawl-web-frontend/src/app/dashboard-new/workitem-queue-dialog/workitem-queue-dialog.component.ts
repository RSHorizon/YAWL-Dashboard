import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {
  faPencil,
  faArrowLeftLong,
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
import {Participant} from "../../yawl/resources/entities/participant.entity";
import {FormatUtils} from "../../util/format-util";
import {env} from "../../../environments/environment";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-workitem-queue-dialog',
  templateUrl: './workitem-queue-dialog.component.html',
  styleUrls: ['./workitem-queue-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemQueueDialogComponent implements OnInit {
  faArrowLeftLong = faArrowLeftLong;
  faPencil = faPencil;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  workitemURL = env.remoteUIUrl;
  specificationStatistic: SpecificationStatistic;
  tasks: any | undefined;
  queueSize = 0;
  formatUtils: FormatUtils = new FormatUtils();

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['rootCaseID', 'taskName', 'resourceStatus', 'enablementTime', 'queueTime', 'overdue'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: {} | null = null;
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private workItemService: WorkItemService,
              private specificationService: SpecificationService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<WorkitemQueueDialogComponent>,
              // @ts-ignore
              @Inject(MAT_DIALOG_DATA) data) {
    this.specificationStatistic = data.specificationStatistic;

    workItemService.findAllBySpecification(this.specificationStatistic.id, this.specificationStatistic.version, this.specificationStatistic.uri)
      .subscribe(workitems => {
        workitems = workitems.filter((workitem: any) => workitem.resourceStatus === "Offered" || workitem.resourceStatus === "Allocated")
        this.queueSize = workitems.length;
        this.dataSource = new MatTableDataSource(workitems);
        this.dataSource.sort = this.sort;
      });

    specificationService.findTasksById(this.specificationStatistic.id, this.specificationStatistic.version, this.specificationStatistic.uri)
      .subscribe(tasks => {
        this.tasks = tasks;
      })
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  computeQueueTime(workitem: any): string {
    if (workitem.startTimeMs === "") {
      return this.formatUtils.applyPastTimeFormatForTimestamp(this.formatUtils.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now())));
    } else {
      return this.formatUtils.applyPastTimeFormatForTimestamp(this.formatUtils.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(workitem.startTimeMs * 1)));
    }
  }

  computeMaxQueueTime(workitem: any): string {
    if (workitem === undefined || this.tasks === undefined) {
      return "";
    }
    let task: any = this.specificationStatistic.taskStatisticDTOS.filter((task: any) => task.taskid == workitem.taskID)[0];
    return this.formatUtils.applyPastTimeFormatForTimestamp(task.maxQueueAge);
  }

  computeAvgQueueTime(workitem: any): string {
    if (workitem === undefined || this.tasks === undefined) {
      return "";
    }
    let task: any = this.specificationStatistic.taskStatisticDTOS.filter((task: any) => task.taskid == workitem.taskID)[0];
    return this.formatUtils.applyPastTimeFormatForTimestamp(task.avgQueueTime);
  }

  computeAvgQueueTimeForAllTasks(): string {
    let total = 0;
    let counter = 0;
    this.specificationStatistic.taskStatisticDTOS.forEach(task => {
      total += task.avgQueueTime;
      counter++;
    })
    return this.formatUtils.applyPastTimeFormatForTimestamp(total / counter);
  }

  computeAvgTimeToReach(workitem: any): string {
    if (workitem === undefined || this.tasks === undefined) {
      return "";
    }
    let task: any = this.specificationStatistic.taskStatisticDTOS.filter((task: any) => task.taskid == workitem.taskID)[0];
    return this.formatUtils.applyPastTimeFormatForTimestamp(task.avgTimeToReach);
  }

  computeCommonParticipants(workitem: any): Participant[] {
    if (workitem === undefined || this.tasks === undefined) {
      return [];
    }
    let task: any = this.specificationStatistic.taskStatisticDTOS.filter((task: any) => task.taskid == workitem.taskID)[0];
    return task.participants;
  }

  isOverdue(workitem: any): number {
    if (workitem === undefined || this.tasks === undefined) {
      return -1;
    }
    let task: any = this.specificationStatistic.taskStatisticDTOS.filter((task: any) => task.taskid == workitem.taskID)[0];
    if (workitem.startTimeMs === "") {
      if (task.maxQueueAge < this.formatUtils.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now()))) {
        return 1;
      }
    } else if (workitem.completionTimeMs === "") {
      if (task.maxTaskAge < this.formatUtils.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(Date.now()))) {
        return 1;
      }
    } else {
      if (task.maxTaskAge < this.formatUtils.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(workitem.completionTimeMs * 1))) {
        return 1;
      }
    }
    return 0;
  }

  isOverdueName(workitem: any): string {
    let overdue = this.isOverdue(workitem);
    if (overdue === 0) {
      return "No";
    } else if (overdue === 1) {
      return "Yes";
    } else {
      return "";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.active == "queueTime" && sortState.direction == "asc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) > this.computeQueueTime(workitemB)) ? -1 : 1)
    } else if (sortState.active == "queueTime" && sortState.direction == "desc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) < this.computeQueueTime(workitemB)) ? -1 : 1)
    }

    if (sortState.active == "overdue" && sortState.direction == "asc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.isOverdue(workitemA) > this.isOverdue(workitemB)) ? -1 : 1)
    } else if (sortState.active == "overdue" && sortState.direction == "desc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.isOverdue(workitemA) < this.isOverdue(workitemB)) ? -1 : 1)
    }
  }

}
