import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }		from '@angular/forms';
import { RouterModule }		from '@angular/router';

import {ContextMenuModule} from 'ngx-contextmenu';

import {NotifierModule, NotifierOptions} from 'angular-notifier';

import {PopupMenuComponent} from './util/popup-menu.component';
import {PopupMenuService} from './util/popup-menu.service';

import { LayoutModule }			from './common/layout/layout.module';
import { ModalModule }			from './util/modal/modal.module';
import { SessionModule }		from './common/session/session.module';
import { YawlResourcesModule }	from './yawl/resources/yawl-resources.module';
import { DynFormModule }		from './dyn-form/dyn-form.module';
import { OrganisationModule }	from './organisation/organisation.module';
import { DialogsRootModule }	from './util/dialogs/dialogs-root.module';
import { DashboardModule }		from './dashboard/dashboard.module';
import { DashboardNewModule }		from './dashboard-new/dashboard-new.module';
import { NotificationsModule }  from './notifications/notifications.module';


// Services
import {ConfigService} from "./common/config/config.service";

// Core
import {routesConfig} from './app.routes';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function appInitializing(config: ConfigService) {
  return () => config.load();
}


@NgModule({
  declarations: [
    AppComponent,
    PopupMenuComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routesConfig),
    FormsModule,
    NotifierModule,
    ContextMenuModule.forRoot({
      useBootstrap4: false,
    }),
    ModalModule,
    LayoutModule,
    SessionModule,
    YawlResourcesModule,
    DynFormModule,
    OrganisationModule,
    DialogsRootModule,
    NotificationsModule,
    DashboardModule,
    DashboardNewModule,
    MatMenuModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [
    ConfigService,
    PopupMenuService,
    { provide: APP_INITIALIZER, useFactory: appInitializing, deps: [ConfigService], multi: true }
  ]
})
export class AppModule {
}
