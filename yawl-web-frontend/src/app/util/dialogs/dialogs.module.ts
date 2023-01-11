import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialSharedModule }			from '../../common/layout/material-shared.module';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import {AlertDialogComponent} from "./alert-dialog.component";


@NgModule({
	declarations: [
		ConfirmationDialogComponent,
    AlertDialogComponent
	],
	imports: [
		CommonModule,
        FormsModule,
        MaterialSharedModule
	],
	entryComponents: [
		ConfirmationDialogComponent
	],
	exports: [
		ConfirmationDialogComponent
	]
})
export class DialogsModule { }

