import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { WorkItemService } from '../../yawl/resources/services/work-item.service';
import { WorkItem } from '../../yawl/resources/entities/work-item.entity';
import { User } from '../../yawl/resources/entities/user.entity';


@Component({
    selector: 'work-item-participants-panel',
    templateUrl: 'work-item-participants-panel.component.html'
})
export class WorkItemParticipantsPanelComponent {

  @Input("work-item")
    // @ts-ignore
  workItem : WorkItem = null;

	public users : User[] = [];

	private isLoading = false;


	constructor(
		private notifierService : NotifierService,
		private workItemService : WorkItemService) {
	}


	ngOnChanges() {
		this.loadUserRoles();
	}


	private loadUserRoles() {
		this.isLoading = true;

		this.workItemService.getParticipantsOfWorkItem(this.workItem.id).subscribe((loadedItems) => {
			this.users = loadedItems;
		},
		(error) => {
			this.notifierService.notify("error","Could not load participants!", error);
		},
		() => {
			this.isLoading = false;
		});

	}

}
