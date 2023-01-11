import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { RoleService }	from '../../yawl/resources/services/role.service';
import { Role }			from '../../yawl/resources/entities/role.entity';



@Component({
    templateUrl: 'role-show.page.html'
})
export class RoleShowPage {

  private roleId : string | undefined;
	public role : Role| null = null;
	public belongsTo : Role|null = null;

	private isLoading = true;

	private mode = "details";


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private roleService : RoleService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				this.gotoList();
				return;
			}

			this.roleId = params['id'];
			this.loadData();
		});

		this.route.queryParams.subscribe(queryParams => {
			if(queryParams['mode']) {
				this.mode = queryParams['mode'];
			}
		});
    }


	private loadData() {
		this.isLoading = true;
		this.roleService.findById(this.roleId!).subscribe((result) => {
			this.role = result;
			this.isLoading = false;
			this.loadBelongsTo()
		},
		(error) => {
			this.notifierService.notify("error", "Could not load role" + error);
			this.gotoList();
		});
	}


	private loadBelongsTo() {
		if(!this.role!.belongsTo) {
			return;
		}

		this.roleService.findById(this.role!.belongsTo).subscribe((result) => {
			this.belongsTo = result;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load belongs to role!" + error);
		});
	}


	setMode(newMode: any, event: { preventDefault: () => void; }) {
		this.gotoRole(this.role!, newMode);
		event.preventDefault();
	}


	gotoRole(item: Role, mode: any) {
		let queryParams = {
			'mode': mode
		};
		this.router.navigate(['role', item.id], {queryParams});
	}


	gotoList() {
		this.router.navigate(['roles']);
	}


	intendEdit() {
		this.router.navigate(['role', this.role!.id, 'edit']);
	}


	intendRemove() {
		let title = "Delete role";
		let message = "Are you sure you want to delete the role \""+this.role!.name+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.removeRole(this.role!);
		});
	}


	removeRole(role: Role) {
		this.roleService.remove(role.id).subscribe(() => {
			this.notifierService.notify("success", "Role successfully deleted!");
			this.gotoList();
		},
		(error) => {
			this.notifierService.notify("error", "Could not delete role! " + error);
		},
		() => {
		});
	}

}
