import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { UserService }	from '../../yawl/resources/services/user.service';
import { User }			from '../../yawl/resources/entities/user.entity';



@Component({
    templateUrl: 'users-list.page.html'
})
export class UsersListPage {

  @ViewChild('searchBox')
    // @ts-ignore
  searchBox : ElementRef;

	users : User[] = [];

	isLoading = false;

	public searchQuery = '';


	constructor(
		private router: Router,
		private notifierService : NotifierService,
		private userService : UserService) {
	}

	ngOnInit() {
		this.reload();
	}

	ngAfterViewInit() {
        this.searchBox.nativeElement.focus();
    }


	reload() {
		this.isLoading = true;

		this.userService.findAll().subscribe((loadedUsers) => {
			this.users = loadedUsers;
		},
		() => {
			this.notifierService.notify("error", "Could not load users!");
		},
		() => {
			this.isLoading = false;
		});

	}


	onSelection(item: { id: string; }) {
		let url = '/user/'+item.id;
		this.router.navigate([url]);
	}


	gotoNewUser() {
		let url = '/user/new';
		this.router.navigate([url]);
	}

}
