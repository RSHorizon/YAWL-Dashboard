import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { PositionService } from '../../yawl/resources/services/position.service';
import { Position } from '../../yawl/resources/entities/position.entity';
import { OrgGroup } from '../../yawl/resources/entities/org-group.entity';


@Component({
    selector: 'org-group-positions-panel',
    templateUrl: 'org-group-positions-panel.component.html'
})
export class OrgGroupPositionsPanelComponent {

  @Input("org-group")
	orgGroup : OrgGroup | null = null;

	public positions : Position[] = [];

	private isLoading = false;


	constructor(
		private notifierService : NotifierService,
		private positionService : PositionService) {
	}


	ngOnChanges() {
		this.loadPositions();
	}


	private loadPositions() {
		this.isLoading = true;

		this.positionService.findAll().subscribe((result) => {
			this.positions = result.filter((position) => {
				return position.belongsToOrgGroup == this.orgGroup!.id;
			});
		},
		(error) => {
			this.notifierService.notify("error", "Could not load positions! " + error);
		},
		() => {
			this.isLoading = false;
		});

	}


}
