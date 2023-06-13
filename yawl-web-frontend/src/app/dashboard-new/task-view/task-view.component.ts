import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {NotifierService} from "angular-notifier";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskViewComponent implements OnInit, AfterViewInit {
  @Input("specificationDataContainer") specificationDataContainer!: SpecificationDataContainer;
  @ViewChild(MatSort) sort: MatSort | undefined;
  displayedColumns: string[] = ['color', 'name', 'decompositionOrder', 'avgOccurrencesPerWeek', 'automated',
    'costResourceHour', 'maxQueueAge', 'maxTaskAge', 'actions'];
  dataSource: MatTableDataSource<TaskStatistic> = new MatTableDataSource<TaskStatistic>();
  specificTaskStatisticSelection = '';

  constructor(private specificationService: SpecificationService,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.specificationDataContainer?.specificationStatistic!.taskStatisticDTOS;
  }

  ngAfterViewInit(): void {
    this.dataSource!.sort = this.sort!;
    this.dataSource!.sortingDataAccessor = (row: TaskStatistic, key: any) => {
      switch (key) {
        case 'name':
          return row.name;
        case 'automated':
          return "" + row.automated
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
    if(this.specificationDataContainer?.specificationStatistic!.taskStatisticDTOS.length > 0){
      this.specificTaskStatisticSelection = this.specificationDataContainer?.specificationStatistic!.taskStatisticDTOS[0].taskid;
    }
    this.dataSource.data.sort((a, b) => {
      return this.compare(a.name, b.name, true);
    });
  }

  selectSpecificTaskStatistic(taskid: string) {
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
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    if (sort.direction === '') {
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



