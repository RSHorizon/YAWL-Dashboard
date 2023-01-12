import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {faPencil, faArrowLeft, faArrowsToEye, faPlus, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WorkItemService} from "../../yawl/resources/services/work-item.service";
import {SpecificationService} from "../../yawl/resources/services/specification.service";

@Component({
  selector: 'app-workitem-queue-dialog',
  templateUrl: './workitem-queue-dialog.component.html',
  styleUrls: ['./workitem-queue-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemQueueDialogComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faPencil = faPencil;
  faChevronUp=faChevronUp;
  faChevronDown=faChevronDown;
  workitemURL = "http://localhost:8080/resourceService/faces/adminQueues.jsp"
  specification: Specification;
  tasks: any |undefined;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['rootCaseID', 'taskName', 'resourceStatus', 'enablementTime', 'queueTime', 'assignedTo','overdue'];
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
    this.specification = data.specification;

    workItemService.findAllBySpecification(this.specification.id, this.specification.specversion, this.specification.uri)
      .subscribe(workitems => {
        workitems = workitems.filter((workitem: any) => workitem.resourceStatus === "Offered" || workitem.resourceStatus === "Allocated")
        this.dataSource = new MatTableDataSource(workitems);
        this.dataSource.sort = this.sort;
        console.log(this.sort);
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

  computeAge(workitem: any): string{
    if(workitem.resourceStatus === "Offered"){
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now())));
    }
    return 0+ "h " + 0 +"m";
  }

  computeQueueTime(workitem: any): string {
    if (workitem.startTimeMs === "") {
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now())));
    } else {
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(workitem.startTimeMs * 1)));
    }
  }

  getTimestampFromDuration(start: Date, end: Date): number{
    // @ts-ignore
    return Math.abs(start - end);
  }

  applyPastTimeFormatForTimestamp(timestamp: number): string{
    // @ts-ignore
    let hoursMs = timestamp
    let minutesMs = hoursMs % (1000 * 60 * 60)

    let hours = Math.floor(hoursMs / (1000 * 60 * 60))
    let minutes = Math.floor( minutesMs / (1000 * 60))

    return hours + "h " + minutes + "m";
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if(sortState.active== "queueTime" && sortState.direction == "asc"){
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) > this.computeQueueTime(workitemB))?-1:1)
    }else if(sortState.active== "queueTime" && sortState.direction == "desc"){
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.computeQueueTime(workitemA) < this.computeQueueTime(workitemB))?-1:1)
    }

    if(sortState.active== "overdue" && sortState.direction == "asc"){
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.isOverdue(workitemA) > this.isOverdue(workitemB))?-1:1)
    }else if(sortState.active== "overdue" && sortState.direction == "desc"){
      this.dataSource?.data.sort((workitemA: any, workitemB: any) => (this.isOverdue(workitemA) < this.isOverdue(workitemB))?-1:1)
    }
  }


  isOverdue(workitem: any): number {
    if (workitem === undefined || this.tasks === undefined) {
      return -1;
    }
    let task: any = this.tasks.filter((task: any) => task.taskId == workitem.taskID)[0];
    if (workitem.startTimeMs === "") {
      if (task.maxQueueAge < this.getTimestampFromDuration(new Date(workitem.enablementTimeMs * 1), new Date(Date.now()))) {
        return 1;
      }
    } else if (workitem.completionTimeMs === "") {
      if (task.maxTaskAge < this.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(Date.now()))) {
        return 1;
      }
    } else {
      if (task.maxTaskAge < this.getTimestampFromDuration(new Date(workitem.startTimeMs * 1), new Date(workitem.completionTimeMs * 1))) {
        return 1;
      }
    }
    return 0;
  }

  isOverdueName(workitem: any): string{
    let overdue = this.isOverdue(workitem);
    if(overdue === 0){
      return "No";
    }else if(overdue === 1){
      return "Yes";
    }else{
      return "";
    }
  }

  getMaxQueueTime(workitem: any): string{
    if(workitem === undefined || this.tasks === undefined){
      return "";
    }
    let task: any = this.tasks.filter((task: any) => task.taskId == workitem.taskID)[0];
    return this.applyPastTimeFormatForTimestamp(task.maxQueueAge);
  }
}
