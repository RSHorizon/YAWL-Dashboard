import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NotifierModule} from 'angular-notifier';
import {LayoutModule} from './common/layout/layout.module';
import {SessionModule} from './common/session/session.module';
import {YawlResourcesModule} from './yawl/resources/yawl-resources.module';
import {DashboardNewModule} from './dashboard-new/dashboard-new.module';

/**
 *
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */


// Core
import {routesConfig} from './app.routes';
import {AppComponent} from './app.component';
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import {MaterialModule} from './material.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
    FormsModule,
    NotifierModule,
    LayoutModule,
    SessionModule,
    YawlResourcesModule,
    DashboardNewModule,
    MatMenuModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {
}
