import { Routes } from '@angular/router';

import { PageNotFoundPage } from './common/layout/page-not-found.page';



/**
 * The configuration of the routes that are default.
 *
 * Note: Routes for other components are in other modules.
 *
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */
export const routesConfig: Routes = [
	{
        path: '',
		pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '**',
		pathMatch: 'full',
        component: PageNotFoundPage
    }
];
