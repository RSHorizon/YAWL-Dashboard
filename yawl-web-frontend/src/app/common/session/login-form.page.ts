import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {SessionService} from './session.service';
import {NotifierService} from "angular-notifier";

/**
 * @author Philipp R. Thomas
 */


@Component({
  selector: 'login-form',
  templateUrl: 'login-form.page.html',
  styleUrls: ['login-form.page.scss']
})
export class LoginFormPage {

  applicationName = "YAWL Web Admin";
  username = "admin";
  password = "YAWL";

  isLoading = false;
  loadingType = "";


  constructor(private sessionService: SessionService,
              private router: Router, private notifierService: NotifierService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.loadingType = "session-check";
    this.sessionService.checkLoggedIn(() => {
      this.isLoading = false;
      if (this.sessionService.isLoggedIn()) {
        this.redirect();
      }
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.loadingType = "credentials-check";
    this.sessionService.login(this.username, this.password)
      .subscribe({
        next: this.handleLoginResponse.bind(this),
        error: this.handleLoginError.bind(this)
      });

    this.password = "";
  }


  private handleLoginResponse(result: any) {
    this.isLoading = false;
    if (result) {
      this.notifierService.notify("success", "You have been successfully logged in");
      this.redirect();
    } else {
      this.notifierService.notify("error", "The username or password you have entered is invalid.");
    }
  }


  private handleLoginError(errorMessage: string | undefined) {
    this.isLoading = false;
    if (errorMessage == undefined) {
      throw new Error("Error message was undefined...");
    }
    this.notifierService.notify("error", errorMessage);
  }


  private redirect() {
    if (!this.sessionService.redirectUrl
      || this.sessionService.redirectUrl == "login") {
      this.router.navigate(['']);
    } else {
      this.router.navigate([this.sessionService.redirectUrl]);
    }

    this.sessionService.redirectUrl = '';
  }
}
