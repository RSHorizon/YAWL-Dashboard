import {AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
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
/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit, AfterViewInit {

  @Input("specificationStatistic")
  specificationStatistic: SpecificationStatistic | undefined;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['taskid', 'decompositionOrder', 'avgQueueTime', 'avgCompletionTime', 'avgTimeToReach', 'avgOccurrencesPerWeek', 'costResourceHour', 'maxTaskAge', 'maxQueueAge', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;
  formatUtils: FormatUtils = new FormatUtils();

  constructor(private specificationService: SpecificationService,
              private notifierService: NotifierService) {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.specificationStatistic!.taskStatisticDTOS);
    console.log(this.specificationStatistic!.taskStatisticDTOS);
  }

  saveLimits(task: any): void {
    if (this.specificationStatistic === undefined) {
      return;
    }
    this.specificationService.storeTaskAttributesById(
      this.specificationStatistic.id, this.specificationStatistic.version, this.specificationStatistic.uri,
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
      this.dataSource?.data.sort((a: TaskStatistic, b: TaskStatistic) => this.compare(a.decompositionOrder, b.decompositionOrder, true));
    }
    switch (sort.active) {
      case 'avgOccurrencesPerWeek':
        this.dataSource?.data.sort((a: TaskStatistic, b: TaskStatistic) => this.compareOccasions(a.avgOccurrencesPerWeek, b.avgOccurrencesPerWeek, isAsc));
        return;
      default:
        return 0;
    }
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compareOccasions(a: number[], b: number[], isAsc: boolean) {
    return (a[7] < b[7] ? -1 : 1) * (isAsc ? 1 : -1);
  }
}



