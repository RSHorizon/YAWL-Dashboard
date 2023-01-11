import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { ModalService }			from '../../util/modal/modal.service';

import { YawlResourcesDialogsModule }	from '../../yawl/resources/yawl-resources-dialogs.module';
import { UserSelectDialogComponent }	from '../../yawl/resources/dialogs/user-select-dialog.component';

import { WorkItemService } from '../../yawl/resources/services/work-item.service';
import { WorkItem } from '../../yawl/resources/entities/work-item.entity';
import { User } from '../../yawl/resources/entities/user.entity';



@Component({
    templateUrl: 'work-item-reoffer.page.html'
})
export class WorkItemReofferPage {

  private workItemId : string | undefined;
	public workItem : WorkItem | undefined;

	public users : User[] = [];

	private isLoading = true;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private modalService : ModalService,
		private workItemService : WorkItemService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid work item id!");
				this.gotoDetailsPage();
				return;
			}

			this.workItemId = params['id'];
			this.loadData();
		});
    }


	public loadData() {
		this.isLoading = true;
		this.workItemService.findById(this.workItemId!).subscribe((result) => {
			this.workItem = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load work item: "+error);
			this.gotoDetailsPage();
		});
	}


	public reoffer() {
		let userIds = this.users.map((user) => user.id);
		// @ts-ignore
    this.workItemService.reofferWorkItem(this.workItem.id, userIds).subscribe((result) => {
			this.notifierService.notify("success", "The work item was reoffered!");
			this.gotoDetailsPage();
		},
		(error) => {
			this.notifierService.notify("error", "Could not reoffer work item " + error);
		});
	}


	public cancel() {
		this.gotoDetailsPage();
	}


	private gotoDetailsPage() {
		this.router.navigate(['workitem', this.workItemId]);
	}

}
