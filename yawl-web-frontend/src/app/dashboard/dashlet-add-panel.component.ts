import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { DashletTypeService } from './dashlet-type.service';
import { DashletService } from './dashlet.service';



@Component({
    selector: 'dashlet-add-panel',
    templateUrl: 'dashlet-add-panel.component.html'
})
export class DashletAddPanelComponent {

  @Input("dashboard")
    // @ts-ignore
  dashboardId : string;

	@Output()
	added : EventEmitter<any> = new EventEmitter();

	dashlets = [];

	newDashlet : any = {};
	dashletTypes: any = [];

	isLoading = false;


	constructor(
		private dashletService: DashletService,
		private dashletTypeService: DashletTypeService,
		private notifierService : NotifierService) {
	}

	ngOnInit() {
		// @ts-ignore
    this.dashletTypes = this.dashletTypeService.getAllDashletTypes();
	}


	saveNewDashlet() {
		let title = this.newDashlet.title;
		let dashletType = this.newDashlet.type;

		if(!title || title.trim() == "") {
			return;
		}

		if(!dashletType) {
			return;
		}

		this.isLoading = true;
		this.dashletService.addDashlet(this.dashboardId, title.trim(), dashletType).subscribe((result) => {
				this.newDashlet = {};
				this.notifierService.notify("success", "You successfully added a new dashlet instance to the dashboard");
				this.added.emit(result.id);
			},
			(error) => {
				this.notifierService.notify("error", error);
			},
			() => {
				this.isLoading = false;
			});
	}

}
