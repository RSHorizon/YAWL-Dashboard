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

  constructor(private specificationService: SpecificationService) {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.specificationStatistic!.taskStatisticDTOS);
  }

  saveLimits(task: any): void {
    if (this.specificationStatistic === undefined) {
      return;
    }
    this.specificationService.storeTaskAttributesById(
      this.specificationStatistic.id, this.specificationStatistic.version, this.specificationStatistic.uri,
      task.taskid, task.costResourceHour, task.maxTaskAge, task.maxQueueAge).subscribe();
  }

  applyPastTimeFormatForTimestamp(timestamp: number): string {
    // @ts-ignore
    let hoursMs = timestamp
    let minutesMs = timestamp % (1000 * 60 * 60)
    let secondsMs = timestamp % (1000 * 60)

    let hours = Math.floor(hoursMs / (1000 * 60 * 60))
    let minutes = Math.floor(minutesMs / (1000 * 60))
    let seconds = Math.floor(secondsMs / (1000))

    return hours + "h " + minutes + "m " + seconds + "s";
  }

  datetimeFormat(timestamp: number): string {
    let date = new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  applyOccurencesFormat(occurences: number[]): string {
    if (occurences.length != 8) {
      return "";
    }

    return "M" + occurences[0] + " T" + occurences[1] + " W" + occurences[2] + " T" + occurences[3] + " F" + occurences[4] + " S" + occurences[5] + " S" + occurences[6] + ""
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

  applyParticipantsArrayFormat(participants: Participant[]): string{
    if(participants === undefined){
      return "";
    }

    let chain = "";
    participants.forEach(participant => {
      chain += ", " + participant.firstname + " " + participant.lastname
    })
    return chain.substring(2);
  }
}



