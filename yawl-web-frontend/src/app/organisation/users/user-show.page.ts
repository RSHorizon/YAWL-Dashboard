import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { UserService } from '../../yawl/resources/services/user.service';
import { User } from '../../yawl/resources/entities/user.entity';



@Component({
    templateUrl: 'user-show.page.html'
})
export class UserShowPage {

	private userId : string | undefined;
  public user : User | null = null;

	private isLoading = true;

	private mode = "profile";


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
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

		this.route.queryParams.subscribe(queryParams => {
			if(queryParams['mode']) {
				this.mode = queryParams['mode'];
			}
		});
    }


	private loadUser() {
		this.isLoading = true;
		this.userService.findById(this.userId!).subscribe((result) => {
			this.user = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load user " + error);
		});
	}


	setMode(newMode: any, event: { preventDefault: () => void; }) {
		this.gotoUser(this.user!, newMode);
		event.preventDefault();
	}


	gotoUser(item: User, mode: any) {
		let url = '/user/'+item.id;
		let queryParams = {
			'mode': mode
		};
		this.router.navigate([url], {queryParams});
	}


	gotoList() {
		let url = '/users';
		this.router.navigate([url]);
	}


	intendEdit() {
		let url = '/user/'+this.user!.id+'/edit';
		this.router.navigate([url]);
	}


	intendChangePassword() {
		this.router.navigate(['user', this.user!.id, 'editpassword']);
	}


	intendRemove() {
		let title = "Delete user";
		let message = "Are you sure you want to delete the user \""+this.user!.username+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.removeUser(this.user!);
		});
	}


	removeUser(user : User) {
		this.userService.remove(user.id!).subscribe(() => {
			this.notifierService.notify("success", "User successfully deleted!");
			this.gotoList();
		},
		(error) => {
			this.notifierService.notify("error", "Could not delete user! " + error);
		},
		() => {
		});
	}

}
