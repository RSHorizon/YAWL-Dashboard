import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { ModalService }			from '../../util/modal/modal.service';

import { YawlResourcesDialogsModule }	from '../../yawl/resources/yawl-resources-dialogs.module';
import { UserSelectDialogComponent }	from '../../yawl/resources/dialogs/user-select-dialog.component';

import { UserRoleMappingService } from '../../yawl/resources/services/user-role-mapping.service';
import { Role } from '../../yawl/resources/entities/role.entity';
import { User } from '../../yawl/resources/entities/user.entity';


@Component({
    selector: 'role-users-panel',
    templateUrl: 'role-users-panel.component.html'
})
export class RoleUsersPanelComponent {

  @Input("role")
  role : Role | null = null;

	@Output()
	userAdded = new EventEmitter();

	@Output()
	userRemoved = new EventEmitter();

	public users : User[] = [];
	public selectedUser : User | undefined;

	private isLoading = false;


	constructor(
		private modalService : ModalService,
		private notifierService : NotifierService,
		private userRoleMappingService : UserRoleMappingService) {
	}


	ngOnChanges() {
		this.loadRoleUsers();
	}


	private loadRoleUsers() {
		this.isLoading = true;
    // @ts-ignore
		this.selectedUser = null;

		this.userRoleMappingService.getUsersByRole(this.role!.id).subscribe((result) => {
			this.users = result;
		},
		() => {
			this.notifierService.notify("error", "Could not load users!");
		},
		() => {
			this.isLoading = false;
		});

	}


	intendAdd() {
		let ignore = this.users.map((t) => t.id);
		let modal = this.modalService.create(YawlResourcesDialogsModule, UserSelectDialogComponent, {
				'ignore': ignore,
				'onSelected': (role: User) => this.addUser(role)
			});
		modal.subscribe((ref) => {});
	}


	addUser(user : User) {
		this.userRoleMappingService.addUserRoleLink(user.id!, this.role!.id).subscribe(() => {
			this.loadRoleUsers();
			this.userAdded.emit(user);
		},
		(error) => {
			this.notifierService.notify("error", "Could not add user! " + error);
		},
		() => {
		});
	}


	removeSelected() {
		let user = this.selectedUser;
		if(!user) {
			return;
		}

		this.userRoleMappingService.deleteUserRoleLink(user.id!, this.role!.id).subscribe(() => {
			this.loadRoleUsers();
			this.userRemoved.emit(user);
		},
		(error) => {
			this.notifierService.notify("error", "Could not remove user! " + error);
		},
		() => {
		});
	}

}
