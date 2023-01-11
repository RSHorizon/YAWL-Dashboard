import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { PositionService }	from '../../yawl/resources/services/position.service';
import { Position }			from '../../yawl/resources/entities/position.entity';

import { OrgGroupService }	from '../../yawl/resources/services/org-group.service';
import { OrgGroup }			from '../../yawl/resources/entities/org-group.entity';



@Component({
    templateUrl: 'position-show.page.html'
})
export class PositionShowPage {

  private positionId : string | undefined;
	public position : Position | null = null;

	public reportsTo : Position | null = null;
	public belongsTo : OrgGroup | null = null;

	private isLoading = true;

	private mode = "details";


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private orgGroupService : OrgGroupService,
		private positionService : PositionService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				this.gotoList();
				return;
			}

			this.positionId = params['id'];
			this.loadData();
		});

		this.route.queryParams.subscribe(queryParams => {
			if(queryParams['mode']) {
				this.mode = queryParams['mode'];
			}
		});
    }


	private loadData() {
		this.isLoading = true;
		this.positionService.findById(this.positionId!).subscribe((result) => {
			this.position = result;
			this.isLoading = false;
			this.loadReportsTo();
			this.loadBelongsTo();
		},
		(error) => {
			this.notifierService.notify("error", "Could not load position " + error);
			this.gotoList();
		});
	}


	private loadReportsTo() {
		if(!this.position!.reportsTo) {
			return;
		}

		this.positionService.findById(this.position!.reportsTo).subscribe((result) => {
			this.reportsTo = result;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load reports to position! " + error);
		});
	}


	private loadBelongsTo() {
		if(!this.position!.belongsToOrgGroup) {
			return;
		}

		this.orgGroupService.findById(this.position!.belongsToOrgGroup).subscribe((result) => {
			this.belongsTo = result;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load belongs to org group! " + error);
		});
	}


	setMode(newMode: any, event: { preventDefault: () => void; }) {
		this.gotoPosition(this.position!, newMode);
		event.preventDefault();
	}


	gotoPosition(item: Position, mode: any) {
		let queryParams = {
			'mode': mode
		};
		this.router.navigate(['position', item.id], {queryParams});
	}


	gotoList() {
		this.router.navigate(['positions']);
	}


	intendEdit() {
		this.router.navigate(['position', this.position!.id, 'edit']);
	}


	intendRemove() {
		let title = "Delete position";
		let message = "Are you sure you want to delete the position \""+this.position!.name+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.removePosition(this.position!);
		});
	}


	removePosition(position: Position) {
		this.positionService.remove(position.id).subscribe(() => {
			this.notifierService.notify("success", "Position successfully deleted!");
			this.gotoList();
		},
		(error) => {
			this.notifierService.notify("error", "Could not delete position! " + error);
		},
		() => {
		});
	}

}
