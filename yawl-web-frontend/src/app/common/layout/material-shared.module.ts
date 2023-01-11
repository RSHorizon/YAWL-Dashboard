import { NgModule }      from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

import { CovalentCommonModule} from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentLoadingModule } from '@covalent/core/loading';


@NgModule({
	declarations: [
	],
	imports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentLoadingModule,
	],
	exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentLoadingModule,
	],
})
export class MaterialSharedModule { }

