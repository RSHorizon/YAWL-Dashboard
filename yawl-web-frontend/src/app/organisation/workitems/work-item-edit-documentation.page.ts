import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { WorkItemService } from '../../yawl/resources/services/work-item.service';
import { WorkItem } from '../../yawl/resources/entities/work-item.entity';



@Component({
    templateUrl: 'work-item-edit-documentation.page.html'
})
export class WorkItemEditDocumentationPage {

  private workItemId : string | undefined;
	public workItem : WorkItem | undefined;

	private isLoading = true;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
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


	public save() {
		this.workItemService.updateDocumentation(this.workItem!.id, this.workItem!.documentation).subscribe(() => {
			this.notifierService.notify("success", "Documentation of work item successfully edited.");
			this.gotoDetailsPage();
		},
		(error) => {
			this.notifierService.notify("error", "Could not edit documentation " + error);
		});
	}


	public cancel() {
		this.gotoDetailsPage();
	}


	private gotoDetailsPage() {
		this.router.navigate(['workitem', this.workItemId]);
	}

}
