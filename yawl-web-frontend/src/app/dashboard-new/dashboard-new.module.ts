import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {dashboardRoutesConfig} from "./dashboard-new.routes";
import {LayoutModule} from "../common/layout/layout.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MaterialSharedModule} from "../common/layout/material-shared.module";
/* Components */
import {SpecificationViewComponent} from './specification-view/specification-view.component';
import {DashboardNewComponent} from './dashboard-new/dashboard-new.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatSortModule} from "@angular/material/sort";
import {CaseViewComponent} from './case-view/case-view.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {WorkitemQueueDialogComponent} from './workitem-queue-dialog/workitem-queue-dialog.component';
import {WorkitemsDialogComponent} from './workitems-dialog/workitems-dialog.component';
import {TaskViewComponent} from './task-view/task-view.component';
import {TimestampformComponent} from './timestampform/timestampform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {BrowserModule} from "@angular/platform-browser";
import {
  SpecificationStatisticViewComponent
} from './specification-statistic-view/specification-statistic-view.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import {CaseStatisticViewComponent} from './case-statistic-view/case-statistic-view.component';
import {TaskStatisticViewComponent} from './task-statistic-view/task-statistic-view.component';
import {ChartCapsuleComponent} from './chart-capsule/chart-capsule.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {TaskStatisticHeatmapViewComponent} from "./task-statistic-heatmap-view/task-statistic-heatmap-view.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

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
    TimestampformComponent,
    SpecificationStatisticViewComponent,
    CaseStatisticViewComponent,
    TaskStatisticViewComponent,
    TaskStatisticHeatmapViewComponent,
    ChartCapsuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutesConfig),
    LayoutModule,
    MatSlideToggleModule,
    MaterialSharedModule,
    MatNativeDateModule,
    FontAwesomeModule,
    BrowserModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class DashboardNewModule {
}
