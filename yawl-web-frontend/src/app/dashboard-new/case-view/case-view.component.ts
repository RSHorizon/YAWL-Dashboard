import {Component, OnInit, ViewChild} from '@angular/core';
import {faPencil, faArrowLeft, faArrowsToEye} from '@fortawesome/free-solid-svg-icons';
import {ExtensionSpecificationService} from "../services/extension-specification.service";
import {ActivatedRoute} from "@angular/router";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {ExtensionSpecification} from "../../yawl/resources/entities/extensionSpecification.entity";
import {CaseService} from "../../yawl/resources/services/case.service";
import {Case} from "../../yawl/resources/entities/case.entity";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {WorkitemQueueDialogComponent} from "../workitem-queue-dialog/workitem-queue-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WorkitemsDialogComponent} from "../workitems-dialog/workitems-dialog.component";
import {TaskViewComponent} from "../task-view/task-view.component";

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
  specification: Specification | undefined = undefined;
  extensionSpecification: ExtensionSpecification | undefined = undefined;
  cases: Case[] | undefined = undefined;
  errorState: boolean = false;
  // @ts-ignore
  viewType: number = '0';
  specificationTimeLimit: number = 0;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'start', 'completed', 'age', 'running', 'queue', 'overdue', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;


  constructor(private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog,
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

      this.specificationService.findById(this.specificationID, this.specversion, this.uri).subscribe(specification =>
        this.specification = specification
      );

      this.extensionSpecificationService.getExtensionSpecification(this.specificationID, this.specversion, this.uri)
        .subscribe(extensionSpecification => {
          this.extensionSpecification = extensionSpecification;
          // @ts-ignore
          this.specificationTimeLimit = <number>this.extensionSpecification.specificationTimeLimit;
        });

      this.caseService.findAllBySpecificationId(this.specificationID, this.specversion, this.uri)
        .subscribe(cases => {
          this.cases = [];
          cases.forEach(caseResponse => {
            // @ts-ignore
            let caseInstance: Case = {};
            // @ts-ignore
            caseInstance.id = caseResponse.id;
            // @ts-ignore
            caseInstance.specification = this.specification;
            // @ts-ignore
            caseInstance.events = JSON.parse(caseResponse.jsonEvents).event;
            let start = caseInstance.events.filter((cs: any) => cs.eventtype === "launch_case")[0];
            let end = caseInstance.events.filter((cs: any) => cs.eventtype === "complete_case")[0];
            if (start !== undefined) {
              caseInstance.start = start.timestamp;
            }
            if (end !== undefined) {
              caseInstance.end = end.timestamp;
            }
            // @ts-ignore
            this.cases.push(caseInstance);
          });
          this.dataSource = new MatTableDataSource(this.cases);
          this.dataSource.sort = this.sort;
        });
    });
  }

  openWorkitemQueueDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specification: this.specification
    };

    this.dialog.open(WorkitemQueueDialogComponent, dialogConfig);
  }

  openWorkitemsDialog(caseId: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      specification: this.specification,
      caseId: caseId
    };

    this.dialog.open(WorkitemsDialogComponent, dialogConfig);
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

  isCaseView(): boolean {
    return this.viewType == ViewType.Case;
  }

  isTaskView(): boolean {
    return this.viewType == ViewType.Task;
  }

  changedSpecificationAttributes(): void {
    if (this.specification === undefined) {
      return;
    }
    this.specificationService.storeSpecificationAttributesById(this.specification.id, this.specification.specversion, this.specification.uri, "" + this.specificationTimeLimit)
      .subscribe()
  }

  computeAge(caseInstance: Case): string{
    if(caseInstance.start === undefined){
      return this.applyPastTimeFormatForTimestamp(0);
    }else if(caseInstance.end === undefined ){
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(caseInstance.start*1), new Date(Date.now())));
    }else{
      return this.applyPastTimeFormatForTimestamp(this.getTimestampFromDuration(new Date(caseInstance.start*1), new Date(caseInstance.end*1)));
    }
  }

  getTimestampFromDuration(start: Date, end: Date): number{
    // @ts-ignore
    return Math.abs(start - end);
  }

  applyPastTimeFormatForTimestamp(timestamp: number): string{
    // @ts-ignore
    let hoursMs = timestamp
    let minutesMs = hoursMs % (1000 * 60 * 60)

    let hours = Math.floor(hoursMs / (1000 * 60 * 60))
    let minutes = Math.floor( minutesMs / (1000 * 60))

    return hours + "h " + minutes + "m";
  }

  dateFormat(timestamp: number): string{
    return new Date(timestamp*1).toLocaleDateString();
  }

}

enum ViewType {
  Case,
  Task
}
