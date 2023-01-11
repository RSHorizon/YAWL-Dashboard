import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {faPencil, faArrowLeft, faArrowsToEye, faPlus, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-workitems-dialog',
  templateUrl: './workitems-dialog.component.html',
  styleUrls: ['./workitems-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkitemsDialogComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faPencil = faPencil;
  faChevronUp=faChevronUp;
  faChevronDown=faChevronDown;
  workitemURL = "http://localhost:8080/resourceService/faces/adminQueues.jsp"
  specification: Specification;
  case: Object|undefined;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['workitem', 'status', 'created', 'age', 'resource','overdue'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: { desciption: "sexy" } | undefined;
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<WorkitemsDialogComponent>,
              // @ts-ignore
              @Inject(MAT_DIALOG_DATA) data) {
    this.specification = data.specification;
    this.case = data.caseId;

    this.dataSource = new MatTableDataSource([{
      id: 1
    }, {id: 2}]);
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
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
