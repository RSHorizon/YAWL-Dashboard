import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { ModalService }			from '../../util/modal/modal.service';

import { YawlResourcesDialogsModule }	from '../../yawl/resources/yawl-resources-dialogs.module';
import { RoleSelectDialogComponent }	from '../../yawl/resources/dialogs/role-select-dialog.component';

import { UserRoleMappingService } from '../../yawl/resources/services/user-role-mapping.service';
import { Role } from '../../yawl/resources/entities/role.entity';
import { User } from '../../yawl/resources/entities/user.entity';


@Component({
    selector: 'user-roles-panel',
    templateUrl: 'user-roles-panel.component.html'
})
export class UserRolesPanelComponent {

	@Input("user")
    // @ts-ignore
	user : User = null;

	@Output()
	roleAdded = new EventEmitter();

	@Output()
	roleRemoved = new EventEmitter();

	public roles : Role[] = [];
  public selectedRole : Role | null = null;

	private isLoading = false;


	constructor(
		private modalService : ModalService,
		private notifierService : NotifierService,
		private userRoleMappingService : UserRoleMappingService) {
	}


	ngOnChanges() {
		this.loadUserRoles();
	}


	private loadUserRoles() {
		this.isLoading = true;
		// @ts-ignore
    this.selectedRole = null;

		this.userRoleMappingService.getRolesByUser(this.user.id!).subscribe((loadedRoles) => {
			this.roles = loadedRoles;
		},
		() => {
			this.notifierService.notify("error", "Could not load roles!");
		},
		() => {
			this.isLoading = false;
		});

	}


	intendAddRole() {
		let ignore = this.roles.map((t) => t.id);
		let modal = this.modalService.create(YawlResourcesDialogsModule, RoleSelectDialogComponent, {
				'ignore': ignore,
				'onSelected': (role: Role) => this.addRole(role)
			});
		modal.subscribe((ref) => {});
	}


	addRole(role : Role) {
		this.userRoleMappingService.addUserRoleLink(this.user.id!, role.id).subscribe(() => {
			this.loadUserRoles();
			this.roleAdded.emit(role);
		},
		(error) => {
			this.notifierService.notify("error", "Could not add role! " + error);
		},
		() => {
		});
	}


	removeSelected() {
		let role = this.selectedRole;
		if(!role) {
			return;
		}

		this.userRoleMappingService.deleteUserRoleLink(this.user.id!, role.id).subscribe(() => {
			this.loadUserRoles();
			this.roleRemoved.emit(role);
		},
		(error) => {
			this.notifierService.notify("error", "Could not remove role! " + error);
		},
		() => {
		});
	}

}
