import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {Time} from "@angular/common";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  @Input("specification")
  specification: Specification | undefined;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['taskId', 'avgCompletionTime', 'avgOccurrencesPerWeek', 'costResourceHour', 'maxTaskAge', 'maxQueueAge', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private specificationService: SpecificationService) {
  }

  ngOnInit(): void {
    if (this.specification === undefined) {
      return;
    }

    this.specificationService.findTasksById(this.specification.id, this.specification.specversion, this.specification.uri)
      .subscribe(tasks => {
        // @ts-ignore
        this.dataSource = new MatTableDataSource(tasks);
        this.dataSource.sort = this.sort;
      })

  }

  saveLimits(task: any): void{
    if (this.specification === undefined) {
      return;
    }
    this.specificationService.storeTaskAttributesById(
      this.specification.id, this.specification.specversion, this.specification.uri,
      task.taskId, task.costResourceHour, task.maxTaskAge, task.maxQueueAge).subscribe();
  }

  changeTaskTimeLimit(value: string): void{

  }

  changeCostResourceHour(value: string): void{

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

}
