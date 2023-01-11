import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { OrgGroupService }	from '../../yawl/resources/services/org-group.service';
import { OrgGroup }			from '../../yawl/resources/entities/org-group.entity';



@Component({
    templateUrl: 'org-group-show.page.html'
})
export class OrgGroupShowPage {

	private orgGroupId : string | undefined;
  public orgGroup : OrgGroup | null = null;

  public belongsTo : OrgGroup | null = null;

	private isLoading = true;

	private mode = "details";


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private orgGroupService : OrgGroupService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				this.gotoList();
				return;
			}

			this.orgGroupId = params['id'];
			this.loadData();
		});

		this.route.queryParams.subscribe(queryParams => {
			if(queryParams['mode']) {
				this.mode = queryParams['mode'];
			}
		});
    }


	private loadData() {
    if(this.orgGroupId == null){
      return;
    }
		this.isLoading = true;
		this.orgGroupService.findById(this.orgGroupId).subscribe((result) => {
			this.orgGroup = result;
			this.isLoading = false;
			this.loadBelongsTo();
		},
		(error) => {
			this.notifierService.notify("error", "Could not load group" + error);
			this.gotoList();
		});
	}


	private loadBelongsTo() {
		if(this.orgGroup == null || !this.orgGroup.belongsTo) {
			return;
		}

		this.orgGroupService.findById(this.orgGroup.belongsTo).subscribe((result) => {
			this.belongsTo = result;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load belongs to group!" + error);
		});
	}


	setMode(newMode: any, event: { preventDefault: () => void; }) {
		this.gotoOrgGroup(this.orgGroup, newMode);
		event.preventDefault();
	}


	gotoOrgGroup(item: OrgGroup | null, mode: any) {
    if(item == null){
      return;
    }
		let queryParams = {
			'mode': mode
		};
		this.router.navigate(['group', item.id], {queryParams});
	}


	gotoList() {
		this.router.navigate(['groups']);
	}


	intendEdit() {
    if(this.orgGroup == null){
      return;
    }
		this.router.navigate(['group', this.orgGroup.id, 'edit']);
	}


	intendRemove() {
    if(this.orgGroup == null){
      return;
    }
		let title = "Delete group";
		let message = "Are you sure you want to delete the group \""+this.orgGroup.name+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.removeOrgGroup(this.orgGroup);
		});
	}


	removeOrgGroup(orgGroup: OrgGroup | null) {
    if(orgGroup == null){
      return;
    }
		this.orgGroupService.remove(orgGroup.id).subscribe(() => {
			this.notifierService.notify("success", "Group successfully deleted!");
			this.gotoList();
		},
		(error) => {
			this.notifierService.notify("error","Could not delete group!" + error);
		},
		() => {
		});
	}

}
