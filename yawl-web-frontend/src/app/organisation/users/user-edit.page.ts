import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';
import { UserService } from '../../yawl/resources/services/user.service';

import { User } from '../../yawl/resources/entities/user.entity';



@Component({
    templateUrl: 'user-edit.page.html'
})
export class UserEditPage {

  private userId : string | undefined;
	public user : User | undefined;

	public isLoading = true;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private userService : UserService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				return;
			}

			this.userId = params['id'];
			this.loadUser();
		});
    }


	public loadUser() {
		this.isLoading = true;
		this.userService.findById(this.userId!).subscribe((result) => {
			this.user = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load user: "+error);
		});
	}


	public save() {
		this.userService.update(this.user!).subscribe(() => {
			this.notifierService.notify("success", "The user was edited.");
			this.gotoUserPage();
		},
		(error) => {
			this.notifierService.notify("error", "Could not edit user: "+error);
		});
	}


	public cancel() {
		this.gotoUserPage();
	}


	private gotoUserPage() {
		let url = '/user/'+this.userId;
		this.router.navigate([url]);
	}

}
