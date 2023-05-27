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
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {TaskTiming} from "../../yawl/resources/dto/task-timing.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";

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
  specificationDataContainer: SpecificationDataContainer;
  taskMap: Map<string, TaskStatistic> = new Map();
  queueSize = 0;
  formatUtils: FormatUtils = new FormatUtils();

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['caseid', 'taskname', 'status', 'enablementTime', 'queueTime', 'overdue'];
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
    this.specificationDataContainer = data.specificationDataContainer;
  }

  ngOnInit(): void {
    let workitems: TaskTiming[] = [];
    this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseInstance => {
      console.log(caseInstance);
      workitems.push(...caseInstance.queue);
    });
    this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      this.taskMap.set(taskStatistic.taskid, taskStatistic)
    })
    this.queueSize = workitems.length;
    this.dataSource = new MatTableDataSource(workitems);
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  close() {
    this.dialogRef.close();
  }

  computeName(workitem: TaskTiming): string {
    let task = this.taskMap.get(workitem.taskid)!;
    return task.name;
  }

  computeCreated(workitem: TaskTiming): string {
    let created = workitem.offeredTimestamp;
    if (created === 0) {
      created = workitem.allocatedTimestamp;
    }

    return this.formatUtils.applyDatetimeFormat(created);
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

  computeMaxQueueTime(workitem: TaskTiming): string {
    let task: TaskStatistic = this.taskMap.get(workitem.taskid)!;
    return this.formatUtils.applyPastTimeFormatForTimestampWithDays(task.maxQueueAge);
  }

  computeAvgQueueTime(workitem: TaskTiming): string {
    let task: TaskStatistic = this.taskMap.get(workitem.taskid)!;
    return this.formatUtils.applyPastTimeFormatForTimestampWithDays(task.avgQueueTime);
  }

  computeAvgQueueTimeForAllTasks(): string {
    let total = 0;
    let counter = 0;
    this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(task => {
      total += task.avgQueueTime;
      counter++;
    })
    return this.formatUtils.applyPastTimeFormatForTimestampWithDays(total / counter);
  }

  computeAvgTimeToReach(workitem: TaskTiming): string {
    let task: TaskStatistic = this.taskMap.get(workitem.taskid)!;
    return this.formatUtils.applyPastTimeFormatForTimestampWithDays(task.avgTimeToReach);
  }

  computeResourcesAsked(workitem: TaskTiming): Participant[] {
    let participantMap: Map<String, Participant> = new Map<String, Participant>();
    this.specificationDataContainer.participants.forEach(participant => {
      participantMap.set(participant.id, participant);
    })
    let participantsArray: Participant[] = [];
    Object.entries(workitem.participants).forEach(entry => {
      if (entry[0] !== "system") {
        let isRelevant = false;
        for (let event of entry[1]) {
          if (event === "Offer" || event === "Allocate") {
            isRelevant = true;
            break;
          }
        }
        if (isRelevant) {
          participantsArray.push(participantMap.get(entry[0])!)!;
        }
      }
    })

    return participantsArray;
  }

  getOverdueLimit(workitem: TaskTiming): number {
    let taskStatistic = this.taskMap.get(workitem.taskid)!;

    return taskStatistic.maxQueueAge!;
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
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) > this.computeQueueTime(workitemB)) ? -1 : 1)
    } else if (sortState.active == "overdue" && sortState.direction == "desc") {
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) < this.computeQueueTime(workitemB)) ? -1 : 1)
    }
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
