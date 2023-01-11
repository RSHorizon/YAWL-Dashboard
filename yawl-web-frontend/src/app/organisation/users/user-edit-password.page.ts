import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';
import { UserService } from '../../yawl/resources/services/user.service';

import { User } from '../../yawl/resources/entities/user.entity';



@Component({
    templateUrl: 'user-edit-password.page.html'
})
export class UserEditPasswordPage {

  private userId : string | undefined;
  public user : User | undefined;

	private isLoading = true;

	public password1 = '';
	public password2 = '';


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
			this.gotoUserPage();
		});
	}


	public save() {
		if(this.password1 != this.password2) {
			this.notifierService.notify("error", "Passwords do not match!");
			return;
		}

		this.userService.updatePassword(this.user!.id!, this.password1).subscribe(() => {
			this.notifierService.notify("success", "The password was changed for user \""+this.user!.username+"\".");
			this.gotoUserPage();
		},
		(error) => {
			this.notifierService.notify("error", "Could not change password " + error);
		});
	}


	public cancel() {
		this.gotoUserPage();
	}


	private gotoUserPage() {
		this.router.navigate(['user', this.userId]);
	}

}
