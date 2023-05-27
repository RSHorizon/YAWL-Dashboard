import {AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {faPencil, faArrowLeft, faArrowsToEye, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {Time} from "@angular/common";
import {SpecificationStatistic} from "../../yawl/resources/dto/specification-statistic.entity";
import {ExtensionSpecification} from "../../yawl/resources/dto/extension-specification.entity";
import {ExtensionTask} from "../../yawl/resources/dto/extension-task.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import {FormatUtils} from "../../util/format-util";
import {NotifierService} from "angular-notifier";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {Task} from "../../yawl/resources/entities/work-item.entity";
/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit, AfterViewInit {
  faArrowsToEye=faArrowsToEye;

  @Input("specificationDataContainer")
  specificationDataContainer!: SpecificationDataContainer;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'decompositionOrder', 'avgOccurrencesPerWeek', 'costResourceHour', 'maxTaskAge', 'maxQueueAge', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;
  specificTaskStatisticSelection = '';

  constructor(private specificationService: SpecificationService,
              private notifierService: NotifierService) {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.specificationDataContainer?.specificationStatistic!.taskStatisticDTOS);
    this.dataSource.sortingDataAccessor = (row: TaskStatistic, key: any) => {
      switch (key) {
        case 'name':
          return row.name;
        case 'decompositionOrder':
          return row.minimalOrder
        case 'avgQueueTime':
          return row.avgQueueTime
        case 'avgCompletionTime':
          return row.avgCompletionTime
        case 'avgTimeToReach':
          return row.avgTimeToReach
        case 'costResourceHour':
          return row.costResourceHour
        case 'maxTaskAge':
          return row.maxTaskAge
        case 'maxQueueAge':
          return row.maxQueueAge
        default:
          return row.minimalOrder;
      }
    };
  }

  selectSpecificTaskStatistic(taskid: string){
    this.specificTaskStatisticSelection = taskid;
  }

  saveLimits(task: any): void {
    if (this.specificationDataContainer?.specificationStatistic === undefined) {
      return;
    }
    this.specificationService.storeTaskAttributesById(
      this.specificationDataContainer?.specificationStatistic.id, this.specificationDataContainer?.specificationStatistic.version, this.specificationDataContainer?.specificationStatistic.uri,
      task.taskid, task.costResourceHour, task.maxTaskAge, task.maxQueueAge).subscribe(result => {
      this.notifierService.notify("success", "Task attributes saved");
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    if(sort.direction === ''){
      this.dataSource?.data.sort((a: TaskStatistic, b: TaskStatistic) => this.compare(a.minimalOrder, b.minimalOrder, true));
    }
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compareOccasions(a: number[], b: number[], isAsc: boolean) {
    return (a[7] < b[7] ? -1 : 1) * (isAsc ? 1 : -1);
  }
}



