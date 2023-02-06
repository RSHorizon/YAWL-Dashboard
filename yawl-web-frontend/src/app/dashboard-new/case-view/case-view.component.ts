import {Component, OnInit, ViewChild} from '@angular/core';
import {faPencil, faArrowLeft, faArrowsToEye, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {ExtensionSpecificationService} from "../services/extension-specification.service";
import {ActivatedRoute} from "@angular/router";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {ExtensionSpecification} from "../../yawl/resources/dto/extension-specification.entity";
import {CaseService} from "../../yawl/resources/services/case.service";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {WorkitemQueueDialogComponent} from "../workitem-queue-dialog/workitem-queue-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WorkitemsDialogComponent} from "../workitems-dialog/workitems-dialog.component";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {ExtensionTask} from "../../yawl/resources/dto/extension-task.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {SpecificationStatistic} from "../../yawl/resources/dto/specification-statistic.entity";
import {FormatUtils} from "../../util/format-util";
import {env} from "../../../environments/environment";
import {NotifierService} from "angular-notifier";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements OnInit {
  faPencil = faPencil;
  faArrowLeft = faArrowLeft;
  faArrowLeftLong = faArrowLeftLong
  faArrowsToEye = faArrowsToEye;
  casesURL = env.remoteUIUrl;
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
  formatUtils: FormatUtils = new FormatUtils();

  // @ts-ignore
  sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    if (this.dataSource != undefined) {
      this.dataSource.sort = this.sort;
    }
  }


  displayedColumns: string[] = ['caseid', 'start', 'end', 'age', 'running', 'queue', 'overdue', 'cancelled', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;


  constructor(public dialog: MatDialog,
              private extensionSpecificationService: ExtensionSpecificationService,
              private specificationService: SpecificationService,
              private caseService: CaseService,
              private route: ActivatedRoute,
              private notifierService: NotifierService) {
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
              this.costs += (taskStatistic.avgCompletionTime / (1000 * 60 * 60)) * taskStatistic.avgOccurrencesPerWeek[7] * taskStatistic.costResourceHour!;
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

  openWorkitemsDialog(caseid: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specificationStatistic: this.specificationStatistic,
      caseid: caseid
    };

    this.dialog.open(WorkitemsDialogComponent, dialogConfig);
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
      .subscribe(result => {
        this.notifierService.notify("success", "Specification time limit saved");
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
}

enum ViewType {
  Case,
  Task
}
