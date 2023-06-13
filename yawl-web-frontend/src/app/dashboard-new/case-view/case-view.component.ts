import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {WorkitemQueueDialogComponent} from "../workitem-queue-dialog/workitem-queue-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WorkitemsDialogComponent} from "../workitems-dialog/workitems-dialog.component";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {FormatUtils} from "../../util/format-util";
import {env} from "../../../environments/environment";
import {NotifierService} from "angular-notifier";
import {ExtensionSpecificationService} from "../../yawl/resources/services/extension-specification.service";
import {SpecificationDataService} from "../../yawl/resources/services/specification-data.service";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements OnInit {
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    if (this.dataSource != undefined) {
      this.dataSource.sort = this.sort;
    }
  }

  // @ts-ignore
  viewType: number = '0';
  formatUtils: FormatUtils = new FormatUtils();

  // Config
  displayedColumns: string[] = ['caseid', 'start', 'end', 'age', 'running', 'queue', 'overdue', 'cancelled', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource<CaseStatistic> = new MatTableDataSource<CaseStatistic>();
  // @ts-ignore
  sort: MatSort;
  casesURL = env.remoteUIUrl;
  specificationDataContainer: SpecificationDataContainer | undefined;
  cases: CaseStatistic[] | undefined = undefined;
  specificationTimeLimit: number = 0;

  constructor(public dialog: MatDialog,
              private specificationDataService: SpecificationDataService,
              private extensionSpecificationService: ExtensionSpecificationService,
              private specificationService: SpecificationService,
              private route: ActivatedRoute,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
        specificationDataContainers.forEach(specificationDataContainer => {
          if (specificationDataContainer.specificationInformation.uri === params.get('uri')
            && specificationDataContainer.specificationInformation.specversion === params.get('specversion')
            && specificationDataContainer.specificationInformation.id === params.get('uuid')) {
            this.specificationDataContainer = specificationDataContainer;
            this.cases = specificationDataContainer.specificationStatistic.caseStatisticDTOS;
            this.dataSource.data = this.cases!;
            this.dataSource.sort = this.sort;
            this.specificationTimeLimit = <number>this.specificationDataContainer?.extensionSpecification.specificationTimeLimit;
          }
        })
      });
    });
  }

  openWorkitemQueueDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specificationDataContainer: this.specificationDataContainer
    };

    this.dialog.open(WorkitemQueueDialogComponent, dialogConfig);
  }

  openWorkitemsDialog(caseid: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specificationDataContainer: this.specificationDataContainer,
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
    if (this.specificationDataContainer?.specificationStatistic === undefined) {
      return;
    }
    this.specificationService
      .storeSpecificationAttributesById(this.specificationDataContainer?.specificationStatistic.id,
        this.specificationDataContainer?.specificationStatistic.version,
        this.specificationDataContainer?.specificationStatistic.uri,
        "" + this.specificationTimeLimit)
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
          this.dataSource?.data.sort((a: CaseStatistic, b: CaseStatistic) => this.compare(+(a.age > +this.specificationDataContainer?.extensionSpecification!.specificationTimeLimit!), +(b.age > +this.specificationDataContainer?.extensionSpecification!.specificationTimeLimit!), isAsc));
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
