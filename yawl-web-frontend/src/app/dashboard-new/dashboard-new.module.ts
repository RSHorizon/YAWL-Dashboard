import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {dashboardRoutesConfig} from "./dashboard-new.routes";
import {LayoutModule} from "../common/layout/layout.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MaterialSharedModule} from "../common/layout/material-shared.module";
/* Components */
import { SpecificationViewComponent } from './specification-view/specification-view.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatSortModule} from "@angular/material/sort";
import { CaseViewComponent } from './case-view/case-view.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { WorkitemQueueDialogComponent } from './workitem-queue-dialog/workitem-queue-dialog.component';
import { WorkitemsDialogComponent } from './workitems-dialog/workitems-dialog.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TimestampformComponent } from './timestampform/timestampform.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {BrowserModule} from "@angular/platform-browser";

/**
 * @author Robin Steinwarz
 */

@NgModule({
  declarations: [
    DashboardNewComponent,
    SpecificationViewComponent,
    CaseViewComponent,
    WorkitemQueueDialogComponent,
    WorkitemsDialogComponent,
    TaskViewComponent,
    TimestampformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutesConfig),
    LayoutModule,
    MatSlideToggleModule,
    MaterialSharedModule,
    FontAwesomeModule,
    BrowserModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule
  ]
})
export class DashboardNewModule { }
