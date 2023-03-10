import { NgModule }      from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { CovalentDialogsModule } from '@covalent/core/dialogs';


import { DateAdapter } from '@angular/material/core';

import { MyDateAdapter } from './material-datetime-adapter';

/**
 * @author Philipp R. Thomas
 */


@NgModule({
	imports: [
        MatNativeDateModule,
        CovalentDialogsModule,
    ],
    providers: [
        {provide: DateAdapter, useClass: MyDateAdapter},
        //{provide: MatPaginatorIntl, useClass: MyPaginatorIntl}
    ]
})
export class MaterialRootModule { }

