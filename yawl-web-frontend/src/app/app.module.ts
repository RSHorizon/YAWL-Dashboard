import {NgModule} from '@angular/core';
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
import {FaConfig, FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {
  faArrowLeftLong,
  faArrowRight,
  faArrowRightFromBracket,
  faArrowsToEye,
  faBars,
  faBell,
  faCaretDown,
  faCaretRight,
  faChartLine,
  faChevronDown,
  faChevronUp,
  faCircle,
  faCircleInfo,
  faCompass,
  faCubes,
  faDatabase,
  faFileCode,
  faFilePen,
  faGaugeHigh,
  faPencil,
  faPlus,
  faSitemap,
  faSquare
} from '@fortawesome/free-solid-svg-icons';
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
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {faArrowTurnUp} from "@fortawesome/free-solid-svg-icons/faArrowTurnUp";

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
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    faConfig.fixedWidth = true;
    library.addIcons(faCircleInfo, faChartLine, faArrowRightFromBracket, faBars, faGaugeHigh, faCompass, faBell,
      faSitemap, faFileCode, faDatabase, faCubes, faCircle, faCaretDown, faCaretRight, faPencil,
      faArrowsToEye, faArrowLeftLong, faSquare, faFilePen, faChevronDown, faChevronUp, faPlus, faArrowRight, faArrowTurnUp);
  }
}
