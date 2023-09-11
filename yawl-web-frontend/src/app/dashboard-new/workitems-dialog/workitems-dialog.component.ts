import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WorkItemService} from "../../yawl/resources/services/work-item.service";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {WorkItem} from "../../yawl/resources/dto/workitem-statistic.entity";
import {Resource} from "../../yawl/resources/entities/resource.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {FormatUtils} from "../../common/util/format-util";
import {env} from "../../../environments/environment";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";

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
      transition('expanded <=> collapsed', animate('50ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemsDialogComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | undefined;
  dataSource: MatTableDataSource<WorkItem> = new MatTableDataSource<WorkItem>();
  displayedColumns: string[] = ['name', 'order', 'status', 'queueTime', 'completionTime', 'resources', 'overdue', 'actions'];
  displayedColumnsWithExpand = ['expand', ...this.displayedColumns];
  expandedElement: {} | undefined;
  formatUtils: FormatUtils = new FormatUtils();

  workitemURL = env.remoteUIUrl;
  specificationDataContainer!: SpecificationDataContainer;
  relevantCaseStatistic!: CaseStatistic;
  taskstatisticMap: Map<String, TaskStatistic> = new Map<String, TaskStatistic>();
  caseid: string | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private workItemService: WorkItemService,
              private specificationService: SpecificationService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<WorkitemsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.specificationDataContainer = data.specificationDataContainer;
    this.caseid = data.caseid;
  }

  ngOnInit(): void {
    this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
      this.taskstatisticMap.set(taskStatistic.taskid, taskStatistic);
    })
    this.relevantCaseStatistic = this.specificationDataContainer.specificationStatistic.caseStatisticDTOS
      .filter(caseInstance => caseInstance.caseid === this.caseid)[0]
    this.dataSource.data = this.relevantCaseStatistic.workitemDTOS.sort((a: WorkItem, b: WorkItem) =>
      a.order.localeCompare(b.order));
  }

  ngAfterViewInit(): void {
    this.dataSource!.sort = this.sort!;
  }

  close() {
    this.dialogRef.close();
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

  computeResources(workitem: WorkItem): Resource[] {
    let resourceMap: Map<String, Resource> = new Map<String, Resource>();
    this.specificationDataContainer.resources.forEach(resource => {
      resourceMap.set(resource.id, resource);
    })
    let resourcesArray: Resource[] = [];
    Object.entries(workitem.resources).forEach(entry => {
      if (entry[0] !== "system") {
        let isRelevant = false;
        for (let event of entry[1]) {
          if (event === "Start" || event === "Complete") {
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

  getOverdueLimit(workitem: WorkItem): number {
    let taskStatistic = this.taskstatisticMap.get(workitem.taskid)!;
    if (workitem.startTimestamp === 0) {
      return taskStatistic.maxQueueAge!;
    } else {
      return taskStatistic.maxTaskAge!;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction === '') {
      this.dataSource?.data.sort((a: WorkItem, b: WorkItem) =>
        a.order.localeCompare(b.order));
    }

    if (sortState.active === 'resources' && sortState.direction === 'asc') {
      this.dataSource?.data.sort((a: WorkItem, b: WorkItem) => {
        return this.getRessourcesString(a).localeCompare(this.getRessourcesString(b))
      })
    } else if (sortState.active === 'resources' && sortState.direction === 'desc') {
      this.dataSource?.data.sort((a: WorkItem, b: WorkItem) => {
        return this.getRessourcesString(b).localeCompare(this.getRessourcesString(a))
      })
    }

    return;
  }

  getRessourcesString(resourcesList: any) {
    return this.computeResources(resourcesList).map(a => a.firstname + " " + a.lastname).join(" ")
  }
}
