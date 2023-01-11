import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { CapabilityService }	from '../../yawl/resources/services/capability.service';
import { Capability }			from '../../yawl/resources/entities/capability.entity';



@Component({
    templateUrl: 'capability-show.page.html'
})
export class CapabilityShowPage {

  private capabilityId : string | undefined;
  public capability : Capability | undefined;

	private isLoading = true;

	private mode = "details";


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private capabilityService : CapabilityService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				this.gotoList();
				return;
			}

			this.capabilityId = params['id'];
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
		this.capabilityService.findById(this.capabilityId!).subscribe((result) => {
			this.capability = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error","Could not load capability " + error);
			this.gotoList();
		});
	}


	setMode(newMode: any, event: { preventDefault: () => void; }) {
		this.gotoCapability(this.capability!, newMode);
		event.preventDefault();
	}


	gotoCapability(item: Capability, mode: any) {
		let queryParams = {
			'mode': mode
		};
		this.router.navigate(['capability', item.id], {queryParams});
	}


	gotoList() {
		this.router.navigate(['capabilities']);
	}


	intendEdit() {
		this.router.navigate(['capability', this.capability!.id, 'edit']);
	}


	intendRemove() {
		let title = "Delete capability";
		let message = "Are you sure you want to delete the capability \""+this.capability!.name+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.removeCapability(this.capability!);
		});
	}


	removeCapability(capability: Capability) {
		this.capabilityService.remove(capability.id).subscribe(() => {
			this.notifierService.notify("success", "Capability successfully deleted!");
			this.gotoList();
		},
		(error) => {
			this.notifierService.notify("error","Could not delete capability!" + error);
		},
		() => {
		});
	}

}
