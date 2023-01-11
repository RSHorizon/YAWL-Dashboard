import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';



@Component({
    selector: 'user-details',
    templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent {

	users = [];

	isLoading = false;

	detailsMode = "profile";


	constructor(
		private router: Router,
		private notifierService : NotifierService) {
	}

	ngOnInit() {
		this.reload();
	}


	reload() {
		//this.isLoading = true;
	}

  deleteUser(){

  }


	setDetailsMode(newMode: string, event: { preventDefault: () => void; }) {
		this.detailsMode = newMode;
		event.preventDefault();
	}


	gotoUser(item: { id: string; }) {
		let url = '/user/'+item.id;
		this.router.navigate([url]);
	}


	editUser(item: { id: string; }) {
		let url = '/user/'+item.id+'/edit';
		this.router.navigate([url]);
	}


	openDashboardFormForNew() {
		let url = '/user/new';
		this.router.navigate([url]);
	}


	removeUser(item: any) {
    // @ts-ignore
    var idx = this.users.indexOf(item);
		if(idx != -1) {
			return this.users.splice(idx, 1);
		}
		return null;
	}

}
