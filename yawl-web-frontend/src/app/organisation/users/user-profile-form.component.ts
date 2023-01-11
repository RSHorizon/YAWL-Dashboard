import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';



@Component({
    selector: 'user-profile-form',
    templateUrl: 'user-profile-form.component.html'
})
export class UserProfileFormComponent {

  description = "";
  notes = "";
	username = "";
	lastname = "";
	firstname = "";


	constructor(
		private router: Router,
		private notifierService : NotifierService) {
	}


	ngOnInit() {
		this.reload();
	}


	reload() {
	}


	save() {
	}

}
