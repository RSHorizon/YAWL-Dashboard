import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WorkItemService} from "../../yawl/resources/services/work-item.service";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {Resource} from "../../yawl/resources/entities/resource.entity";
import {FormatUtils} from "../../common/util/format-util";
import {env} from "../../../environments/environment";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {WorkItem} from "../../yawl/resources/dto/workitem-statistic.entity";
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
      transition('expanded <=> collapsed', animate('50ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemQueueDialogComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | undefined;
  dataSource: MatTableDataSource<WorkItem> = new MatTableDataSource<WorkItem>();
  displayedColumns: string[] = ['caseid', 'name', 'status', 'created', 'queueTime', 'overdue', 'actions'];
  displayedColumnsWithExpand = ['expand', ...this.displayedColumns];
  expandedElement: {} | undefined;
  formatUtils: FormatUtils = new FormatUtils();

  workitemURL = env.remoteUIUrl;
  specificationDataContainer: SpecificationDataContainer;
  taskStatisticMap: Map<string, TaskStatistic> = new Map();
  queueSize = 0;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private workItemService: WorkItemService,
              private specificationService: SpecificationService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<WorkitemQueueDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.specificationDataContainer = data.specificationDataContainer;
  }

  ngOnInit(): void {
    let workitems: WorkItem[] = [];
    this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseInstance => {
      workitems.push(...caseInstance.queue);
    });
    this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      this.taskStatisticMap.set(taskStatistic.taskid, taskStatistic)
    })
    this.queueSize = workitems.length;
    this.dataSource.data = workitems.sort((a: WorkItem, b: WorkItem) =>
      a.order.localeCompare(b.order));
  }

  ngAfterViewInit(): void {
    this.dataSource!.sort = this.sort!;
  }

  close() {
    this.dialogRef.close();
  }

  getOverdueLimit(workitem: WorkItem): number {
    let taskStatistic = this.taskStatisticMap.get(workitem.taskid)!;
    if (workitem.startTimestamp === 0) {
      return taskStatistic.maxQueueAge!;
    } else {
      return taskStatistic.maxTaskAge!;
    }
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

  computeResourcesAsked(workitem: WorkItem): Resource[] {
    let resourceMap: Map<String, Resource> = new Map<String, Resource>();
    this.specificationDataContainer.resources.forEach(resource => {
      resourceMap.set(resource.id, resource);
    })
    let resourcesArray: Resource[] = [];
    Object.entries(workitem.resources).forEach(entry => {
      if (entry[0] !== "system") {
        let isRelevant = false;
        for (let event of entry[1]) {
          if (event === "Offer" || event === "Allocate") {
            isRelevant = true;
            break;
          }
        }
        if (isRelevant) {
          resourcesArray.push(resourceMap.get(entry[0])!)!;
        }
      }
    })

    return resourcesArray;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction === '') {
      this.dataSource?.data.sort((a: WorkItem, b: WorkItem) =>
        a.order.localeCompare(b.order));
    }
    return;
  }

}
