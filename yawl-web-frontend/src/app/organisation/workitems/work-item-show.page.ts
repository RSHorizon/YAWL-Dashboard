import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { ModalService }			from '../../util/modal/modal.service';

import { YawlResourcesDialogsModule }	from '../../yawl/resources/yawl-resources-dialogs.module';
import { UserSelectDialogComponent }	from '../../yawl/resources/dialogs/user-select-dialog.component';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { WorkItemService } from '../../yawl/resources/services/work-item.service';
import { WorkItem }			from '../../yawl/resources/entities/work-item.entity';

import { UserService } from '../../yawl/resources/services/user.service';
import { User } from '../../yawl/resources/entities/user.entity';



@Component({
    templateUrl: 'work-item-show.page.html'
})
export class WorkItemShowPage {

  private workItemId : string | undefined;
  public workItem : WorkItem | null = null;

	private isLoading = true;

	private mode = "details";


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private modalService : ModalService,
		private dialogsService : DialogsService,
		private workItemService : WorkItemService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				this.gotoList();
				return;
			}

			this.workItemId = params['id'];
			this.loadData();
		});

		this.route.queryParams.subscribe(queryParams => {
			if(queryParams['mode']) {
				this.mode = queryParams['mode'];
			}
		});
    }


	private loadData() {
    if(this.workItemId == null){
      return;
    }
		this.isLoading = true;
		this.workItemService.findById(this.workItemId).subscribe((result) => {
			this.workItem = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load work item " + error);
			this.gotoList();
		});
	}


	setMode(newMode: any, event: { preventDefault: () => void; }) {
    if(this.workItem == null){
      return;
    }
		this.gotoWorkItem(this.workItem, newMode);
		event.preventDefault();
	}


	gotoWorkItem(item: WorkItem, mode: any) {
		let url = '/workitem/'+item.id;
		let queryParams = {
			'mode': mode
		};
		this.router.navigate([url], {queryParams});
	}


	gotoList() {
		let url = '/workitems';
		this.router.navigate([url]);
	}


	intendEditDocumentation() {
    if(this.workItem == null){
      return;
    }
		this.router.navigate(['workitem', this.workItem.id, 'editdocumentation']);
	}


	intendReoffer() {
    if(this.workItem == null){
      return;
    }
		this.router.navigate(['workitem', this.workItem.id, 'reoffer']);
	}


	intendReallocate() {
		let modal = this.modalService.create(YawlResourcesDialogsModule, UserSelectDialogComponent, {
				'onSelected': (user: any) => this.reallocateWorkItem(user),
				'showNoSelectionButton': false
			});
		modal.subscribe((ref) => {});
	}


	reallocateWorkItem(user: { id: string; username: string; } | null) {
		if(user == null || this.workItem == null) {
			return;
		}
		this.workItemService.reallocateWorkItem(this.workItem.id, user.id).subscribe((result) => {
			this.notifierService.notify("success", "The work item was reallocated with participant \""+user.username+"\"!");
			this.loadData();
		},
		(error) => {
			this.notifierService.notify("error", "Could not reallocate work item " + error);
		});
	}


	intendRestart() {
		let modal = this.modalService.create(YawlResourcesDialogsModule, UserSelectDialogComponent, {
				'onSelected': (user: any) => this.restartWorkItem(user),
				'showNoSelectionButton': false
			});
		modal.subscribe((ref) => {});
	}


	restartWorkItem(user: { id: string; username: string; } | null) {
		if(user == null ||this.workItem == null) {
			return;
		}
		this.workItemService.restartWorkItem(this.workItem.id, user.id).subscribe((result) => {
			this.notifierService.notify("success", "The work item was restarted with participant \""+user.username+"\"!");
			this.gotoList();
		},
		(error) => {
			this.notifierService.notify("error" , "Could not restart work item " + error);
		});
	}

}
