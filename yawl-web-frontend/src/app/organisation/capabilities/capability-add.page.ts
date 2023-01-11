import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { CapabilityService } from '../../yawl/resources/services/capability.service';
import { Capability } from '../../yawl/resources/entities/capability.entity';



@Component({
    templateUrl: 'capability-add.page.html'
})
export class CapabilityAddPage {

	constructor(
		private router: Router,
		private notificationsService : NotifierService,
		private capabilityService : CapabilityService) {
	}


	save(capability : Capability) {
		this.capabilityService.save(capability).subscribe((result) => {
			this.gotoCapabilityPage(result.id);
			this.notificationsService.notify("success", "The new capability was added.");
		},
		(error) => {
			this.notificationsService.notify("error", "Could not add capability: "+error);
		})
	}


	gotoCapabilityPage(id : string) {
		let url = '/capability/'+id;
		this.router.navigate([url]);
	}


	cancel() {
		let url = '/capabilities';
		this.router.navigate([url]);
	}

}
