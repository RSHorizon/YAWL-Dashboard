import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {
  faPencil,
  faArrowLeft,
  faArrowsToEye,
  faPlus,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WorkItemService} from "../../yawl/resources/services/work-item.service";
import {SpecificationService} from "../../yawl/resources/services/specification.service";


@Component({
  selector: 'app-workitems-dialog',
  templateUrl: './workitems-dialog.component.html',
  styleUrls: ['./workitems-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemsDialogComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faPencil = faPencil;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  workitemURL = "http://localhost:8080/resourceService/faces/adminQueues.jsp"
  specification: Specification;
  tasks: any | undefined;
  caseId: number | undefined;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['workitem', 'status', 'created', 'queueTime', 'age', 'resource', 'overdue'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: { desciption: "sexy" } | undefined;
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private workItemService: WorkItemService,
              private specificationService: SpecificationService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<WorkitemsDialogComponent>,
              // @ts-ignore
              @Inject(MAT_DIALOG_DATA) data) {
    this.specification = data.specification;
    this.caseId = data.caseId;

    // @ts-ignore
    workItemService.findAllByCase(this.specification.id, this.specification.specversion, this.specification.uri, this.caseId)
      .subscribe(workitems => {
        console.log(workitems);
        this.dataSource = new MatTableDataSource(workitems);
        this.dataSource.sort = this.sort;
      });

    specificationService.findTasksById(this.specification.id, this.specification.specversion, this.specification.uri)
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
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now())));
    } else {
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(workitem.startTimeMs * 1)));
    }
  }

  computeAge(workitem: any): string {
    if (workitem.startTimeMs === "") {
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now())));
    } else if (workitem.completionTimeMs === "") {
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(Date.now())));
    } else {
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(workitem.completionTimeMs * 1)));
    }
  }

  getTimestampFromDuration(start: Date, end: Date): number {
    // @ts-ignore
    return Math.abs(start - end);
  }

  applyPastTimeFormatForTimestamp(timestamp: number): string {
    // @ts-ignore
    let hoursMs = timestamp
    let minutesMs = hoursMs % (1000 * 60 * 60)

    let hours = Math.floor(hoursMs / (1000 * 60 * 60))
    let minutes = Math.floor(minutesMs / (1000 * 60))

    return hours + "h " + minutes + "m";
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  isInQueue(workitem: any): boolean {
    if (workitem.resourceStatus === "Offered" || workitem.resourceStatus === "Allocated") {
      return true;
    }
    return false;
  }

  isOverdue(workitem: any): string {
    if (workitem === undefined || this.tasks === undefined) {
      return "";
    }
    let task: any = this.tasks.filter((task: any) => task.taskId == workitem.taskID)[0];
    if (workitem.startTimeMs === "") {
      if (task.maxQueueAge < this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now()))) {
        return "Yes";
      }
    } else if (workitem.completionTimeMs === "") {
      if (task.maxTaskAge < this.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(Date.now()))) {
        return "Yes";
      }
    } else {
      if (task.maxTaskAge < this.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(workitem.completionTimeMs * 1))) {
        return "Yes";
      }
    }

    return "No";
  }

  getMaxQueueTime(workitem: any): string {
    if (workitem === undefined || this.tasks === undefined) {
      return "";
    }
    let task: any = this.tasks.filter((task: any) => task.taskId == workitem.taskID)[0];
    return this.applyPastTimeFormatForTimestamp(task.maxQueueAge);
  }

  getMaxTaskTime(workitem: any): string {
    if (workitem === undefined || this.tasks === undefined) {
      return "";
    }
    let task: any = this.tasks.filter((task: any) => task.taskId == workitem.taskID)[0];
    return this.applyPastTimeFormatForTimestamp(task.maxTaskAge);
  }

}
