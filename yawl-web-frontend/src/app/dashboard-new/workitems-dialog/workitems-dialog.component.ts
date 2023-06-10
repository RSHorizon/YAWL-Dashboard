import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {
  faPencil,
  faArrowLeftLong,
  faArrowsToEye,
  faPlus,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WorkItemService} from "../../yawl/resources/services/work-item.service";
import {SpecificationService} from "../../yawl/resources/services/specification.service";
import {SpecificationStatistic} from "../../yawl/resources/dto/specification-statistic.entity";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {TaskTiming} from "../../yawl/resources/dto/task-timing.entity";
import {Participant} from "../../yawl/resources/entities/participant.entity";
import {TaskStatistic} from "../../yawl/resources/dto/task-statistic.entity";
import {FormatUtils} from "../../util/format-util";
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
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemsDialogComponent implements OnInit, AfterViewInit {
  faArrowLeftLong = faArrowLeftLong;
  faPencil = faPencil;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  @ViewChild(MatSort) sort: MatSort| undefined;
  dataSource: MatTableDataSource<TaskTiming> = new MatTableDataSource<TaskTiming>();
  displayedColumns: string[] = ['name', 'decompositionOrder', 'status', 'queueTime', 'completionTime', 'participants', 'overdue'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
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
    this.dataSource.data = this.relevantCaseStatistic.taskTimingDTOS.sort((a: TaskTiming, b: TaskTiming) =>
      a.decompositionOrder.localeCompare(b.decompositionOrder));
  }

  ngAfterViewInit(): void {
    this.dataSource!.sort = this.sort!;
  }

  close() {
    this.dialogRef.close();
  }

  computeResourcesAsked(workitem: TaskTiming): Participant[] {
    let participantMap: Map<String, Participant> = new Map<String, Participant>();
    this.specificationDataContainer.participants.forEach(participant => {
      participantMap.set(participant.id, participant);
    })
    let participantsArray: Participant[] = [];
    Object.entries(workitem.participants).forEach(entry => {
      if(entry[0] !== "system"){
        let isRelevant = false;
        for(let event of entry[1]){
          if(event === "Offer" || event === "Allocate"){
            isRelevant = true;
            break;
          }
        }
        if(isRelevant){
          participantsArray.push(participantMap.get(entry[0])!)!;
        }
      }
    })

    return participantsArray;
  }

  computeResources(workitem: TaskTiming): Participant[]{
    let participantMap: Map<String, Participant> = new Map<String, Participant>();
    this.specificationDataContainer.participants.forEach(participant => {
      participantMap.set(participant.id, participant);
    })
    let participantsArray: Participant[] = [];
    Object.entries(workitem.participants).forEach(entry => {
      if(entry[0] !== "system"){
        let isRelevant = false;
        for(let event of entry[1]){
          if(event === "Start" || event === "Complete"){
            isRelevant = true;
            break;
          }
        }
        if(isRelevant){
          participantsArray.push(participantMap.get(entry[0])!)!;
        }
      }
    })

    return participantsArray;
  }

  getOverdueLimit(workitem: TaskTiming): number{
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
      this.dataSource?.data.sort((a: TaskTiming, b: TaskTiming) =>
        a.decompositionOrder.localeCompare(b.decompositionOrder));
    }
    return;
  }
}
