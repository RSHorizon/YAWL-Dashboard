import { Routes } from '@angular/router';

import { LoginFormPage } from './login-form.page';

/**
 * @author Philipp R. Thomas
 */


/**
 * The configuration of the routes for session management.
 *
 * @author Philipp Thomas
 */
export const sessionRoutesConfig: Routes = [
	{
        path: 'login',
		pathMatch: 'full',
        component: LoginFormPage
    }
];
