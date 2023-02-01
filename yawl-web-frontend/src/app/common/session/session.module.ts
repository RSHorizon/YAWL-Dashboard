import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MaterialSharedModule} from '../layout/material-shared.module';

import {LoggedInGuard} from './logged-in.guard';
import {SessionService} from './session.service';
import {LoginFormPage} from './login-form.page';

import {sessionRoutesConfig} from './session.routes';
import {NotifierModule} from "angular-notifier";

/**
 * @author Philipp R. Thomas
 */


@NgModule({
  declarations: [
    LoginFormPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sessionRoutesConfig),
    FormsModule,
    MaterialSharedModule,
    NotifierModule
  ],
  providers: [
    LoggedInGuard,
    SessionService
  ],
})
export class SessionModule {
}

