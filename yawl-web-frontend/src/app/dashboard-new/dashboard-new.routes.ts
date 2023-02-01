import { Routes } from '@angular/router';

import { LoggedInGuard } from '../common/session/logged-in.guard';
import {DashboardNewComponent} from "./dashboard-new/dashboard-new.component";
import {CaseViewComponent} from "./case-view/case-view.component";

/**
 * @author Robin Steinwarz
 */

export const dashboardRoutesConfig: Routes = [
	{
        path: 'dashboard',
		    pathMatch: 'full',
        component: DashboardNewComponent,
        canActivate: [LoggedInGuard],
    },
  {
    path: 'dashboard/specification/:uri/:uuid/:specversion',
    pathMatch: 'full',
    component: CaseViewComponent,
    canActivate: [LoggedInGuard],
  },
];
