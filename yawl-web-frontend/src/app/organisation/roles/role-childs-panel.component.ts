import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { RoleService } from '../../yawl/resources/services/role.service';
import { Role } from '../../yawl/resources/entities/role.entity';


@Component({
    selector: 'role-childs-panel',
    templateUrl: 'role-childs-panel.component.html'
})
export class RoleChildsPanelComponent {

  @Input("role")
	role : Role| undefined;

	public roles : Role[] = [];

	private isLoading = false;


	constructor(
		private notifierService : NotifierService,
		private roleService : RoleService) {
	}


	ngOnChanges() {
		this.loadRoles();
	}


	private loadRoles() {
		this.isLoading = true;

		this.roleService.findAll().subscribe((result) => {
			this.roles = result.filter((role) => {
				return role.belongsTo == this.role!.id;
			});
		},
		(error) => {
			this.notifierService.notify("error", "Could not load roles! " + error);
		},
		() => {
			this.isLoading = false;
		});
	}

}
