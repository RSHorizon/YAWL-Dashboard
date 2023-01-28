import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {faPencil, faArrowLeft, faArrowsToEye} from '@fortawesome/free-solid-svg-icons';
import {ExtensionSpecificationService} from "../services/extension-specification.service";
import {ActivatedRoute} from "@angular/router";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {ExtensionSpecification} from "../../yawl/resources/dto/extension-specification.entity";
import {CaseService} from "../../yawl/resources/services/case.service";
import {Case} from "../../yawl/resources/entities/case.entity";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {WorkitemQueueDialogComponent} from "../workitem-queue-dialog/workitem-queue-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WorkitemsDialogComponent} from "../workitems-dialog/workitems-dialog.component";
import {TaskViewComponent} from "../task-view/task-view.component";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {ExtensionTask} from "../../yawl/resources/dto/extension-task.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {SpecificationStatistic} from "../../yawl/resources/dto/specification-statistic.entity";
import {Participant} from "../../yawl/resources/entities/participant.entity";

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements OnInit {
  faPencil = faPencil;
  faArrowLeft = faArrowLeft;
  faArrowsToEye = faArrowsToEye;
  casesURL = "http://localhost:8080/resourceService/faces/caseMgt.jsp"
  specificationID: string | null = null;
  specversion: string | null = null;
  uri: string | null = null;
  specificationStatistic: SpecificationStatistic | undefined = undefined;
  extensionSpecification: ExtensionSpecification | undefined = undefined;
  extensionTasks: ExtensionTask[] | undefined = undefined;
  cases: CaseStatistic[] | undefined = undefined;
  errorState: boolean = false;
  // @ts-ignore
  viewType: number = '0';
  specificationTimeLimit: number = 0;
  costs: number = 0;

  // @ts-ignore
  sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    if (this.dataSource != undefined) {
      this.dataSource.sort = this.sort;
    }
  }


  displayedColumns: string[] = ['caseid', 'start', 'end', 'age', 'running', 'queue', 'overdue', 'cancelled','actions'];
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;


  constructor(public dialog: MatDialog,
              private extensionSpecificationService: ExtensionSpecificationService,
              private specificationService: SpecificationService,
              private caseService: CaseService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.specificationID = params.get('uuid');
      this.specversion = params.get('specversion');
      this.uri = params.get('uri');
      if (this.specificationID === null || this.specversion === null || this.uri === null) {
        this.errorState = true;
        return;
      }

      this.specificationService.getSpecificationStatistic(this.specificationID, this.specversion, this.uri).subscribe(specificationStatistic => {
        this.specificationStatistic = specificationStatistic;
        this.cases = specificationStatistic.caseStatisticDTOS;
        this.dataSource = new MatTableDataSource<CaseStatistic>(this.cases);
        this.dataSource.sort = this.sort;

        this.extensionSpecificationService.getSpecificationExtensionTasks(this.specificationID!, this.specversion!, this.uri!)
          .subscribe(extensionTasks => {
            this.extensionTasks = extensionTasks;
            this.specificationStatistic!.taskStatisticDTOS.forEach((taskStatistic: TaskStatistic) => {
              this.extensionTasks?.forEach(extensionTask => {
                if (taskStatistic.taskid === extensionTask.taskid) {
                  taskStatistic.costResourceHour = +extensionTask.costResourceHour;
                  taskStatistic.maxQueueAge = +extensionTask.maxQueueAge;
                  taskStatistic.maxTaskAge = +extensionTask.maxTaskAge;
                }
              })
            });
            this.costs = 0;
            this.specificationStatistic?.taskStatisticDTOS.forEach((taskStatistic: TaskStatistic) => {
              this.costs += (taskStatistic.avgCompletionTime/(1000 * 60 * 60)) * taskStatistic.avgOccurrencesPerWeek[7] * taskStatistic.costResourceHour!;
            });
          });
      });

      this.extensionSpecificationService.getExtensionSpecification(this.specificationID, this.specversion, this.uri)
        .subscribe(extensionSpecification => {
          this.extensionSpecification = extensionSpecification;
          // @ts-ignore
          this.specificationTimeLimit = <number>this.extensionSpecification.specificationTimeLimit;
        });
    });
  }

  openWorkitemQueueDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specificationStatistic: this.specificationStatistic
    };

    this.dialog.open(WorkitemQueueDialogComponent, dialogConfig);
  }

  openWorkitemsDialog(caseId: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specificationStatistic: this.specificationStatistic,
      caseId: caseId
    };

    this.dialog.open(WorkitemsDialogComponent, dialogConfig);
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    if (sort.direction === '') {
      this.dataSource?.data.sort((a: CaseStatistic, b: CaseStatistic) => this.compare(a.caseid, b.caseid, true));
    } else {
      switch (sort.active) {
        case 'overdue':
          this.dataSource?.data.sort((a: CaseStatistic, b: CaseStatistic) => this.compare(+(a.age > +this.extensionSpecification!.specificationTimeLimit), +(b.age > +this.extensionSpecification!.specificationTimeLimit), isAsc));
          return;
        default:
          return 0;
      }
    }

    return;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  isCaseView(): boolean {
    return this.viewType == ViewType.Case;
  }

  isTaskView(): boolean {
    return this.viewType == ViewType.Task;
  }

  changedSpecificationAttributes(): void {
    if (this.specificationStatistic === undefined) {
      return;
    }
    this.specificationService.storeSpecificationAttributesById(this.specificationStatistic.id, this.specificationStatistic.version, this.specificationStatistic.uri, "" + this.specificationTimeLimit)
      .subscribe()
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
    if(timestamp === 0){
      return ""
    }
    let date = new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  applyOccurencesFormat(occurences: number[]): string {
    if (occurences.length != 8) {
      return "";
    }

    return "M" + occurences[0] + " T" + occurences[1] + " W" + occurences[2] + " T" + occurences[3] + " F" + occurences[4] + " S" + occurences[5] + " S" + occurences[6] + ""
  }

  applyIsOverdueFormat(age: number, maxTime: number): string {
    if (age > maxTime) {
      return "Yes";
    } else {
      return "No";
    }
  }

  applyBooleanFormat(bool: boolean){
    return (bool)? "Yes": "No";
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

enum ViewType {
  Case,
  Task
}
