import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { CapabilityService } from '../../yawl/resources/services/capability.service';
import { Capability } from '../../yawl/resources/entities/capability.entity';



@Component({
    templateUrl: 'capability-edit.page.html'
})
export class CapabilityEditPage {

  private id : string | undefined;
	public capability : Capability | undefined;

	public isLoading = true;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private capabilityService : CapabilityService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("Error", "No valid id!");
				return;
			}

			this.id = params['id'];
			this.load();
		});
    }


	public load() {
		this.isLoading = true;
		this.capabilityService.findById(this.id!).subscribe((result) => {
			this.capability = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load capability: "+error);
		});
	}


	public save() {
		this.capabilityService.update(this.capability!.id, this.capability!).subscribe(() => {
			this.notifierService.notify("success", "The capability was edited.");
			this.gotoCapabilityPage();
		},
		(error) => {
			this.notifierService.notify("error", "Could not edit capability: "+error);
		});
	}


	public cancel() {
		this.gotoCapabilityPage();
	}


	private gotoCapabilityPage() {
		this.router.navigate(['capability', this.capability!.id]);
	}

}
