import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { RoleService } from '../../yawl/resources/services/role.service';
import { Role } from '../../yawl/resources/entities/role.entity';



@Component({
    templateUrl: 'role-add.page.html'
})
export class RoleAddPage {

	constructor(
		private router: Router,
		private notifierService : NotifierService,
		private roleService : RoleService) {
	}


	save(role : Role) {
		this.roleService.save(role).subscribe((result) => {
			this.gotoRolePage(result.id);
			this.notifierService.notify("success", "The new role was added.");
		},
		(error) => {
			this.notifierService.notify("error", "Could not add role: "+error);
		})
	}


	gotoRolePage(id : string) {
		let url = '/role/'+id;
		this.router.navigate([url]);
	}


	cancel() {
		let url = '/roles';
		this.router.navigate([url]);
	}

}
