import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { OrgGroupService } from '../../yawl/resources/services/org-group.service';
import { OrgGroup } from '../../yawl/resources/entities/org-group.entity';



@Component({
    templateUrl: 'org-group-edit.page.html'
})
export class OrgGroupEditPage {

  private id : string | undefined;
	public orgGroup : OrgGroup | undefined;

	public isLoading = true;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private orgGroupService : OrgGroupService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				return;
			}

			this.id = params['id'];
			this.load();
		});
    }


	public load() {
		this.isLoading = true;
		this.orgGroupService.findById(this.id!).subscribe((result) => {
			this.orgGroup = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load group: "+error);
		});
	}


	public save() {
		this.orgGroupService.update(this.orgGroup!.id, this.orgGroup!).subscribe(() => {
			this.notifierService.notify("success", "The group was edited.");
			this.gotoOrgGroupPage();
		},
		(error) => {
			this.notifierService.notify("error", "Could not edit group: "+error);
		});
	}


	public cancel() {
		this.gotoOrgGroupPage();
	}


	private gotoOrgGroupPage() {
		this.router.navigate(['group', this.orgGroup!.id]);
	}

	private gotoOrgGroupsPage() {
		this.router.navigate(['groups']);
	}

}
