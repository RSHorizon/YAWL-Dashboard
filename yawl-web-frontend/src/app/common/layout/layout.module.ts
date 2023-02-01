import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialSharedModule }			from './material-shared.module';

import { PageNotFoundPage } from './page-not-found.page';

import { DefaultPageComponent } from './default-page.component';
import { ToolbarComponent } from './toolbar.component';
import { SidebarComponent } from './sidebar.component';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

/**
 * @author Philipp R. Thomas
 */


@NgModule({
	declarations: [
		PageNotFoundPage,
		DefaultPageComponent,
        ToolbarComponent,
        SidebarComponent,
        SidebarLayoutComponent
	],
    imports: [
        CommonModule,
        RouterModule,
        MaterialSharedModule,
        FontAwesomeModule
    ],
	exports: [
		DefaultPageComponent
	]
})
export class LayoutModule { }

