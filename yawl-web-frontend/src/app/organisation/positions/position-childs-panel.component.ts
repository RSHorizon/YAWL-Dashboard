import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { PositionService } from '../../yawl/resources/services/position.service';
import { Position } from '../../yawl/resources/entities/position.entity';


@Component({
    selector: 'position-childs-panel',
    templateUrl: 'position-childs-panel.component.html'
})
export class PositionChildsPanelComponent {

  @Input("position")
	position : Position | null = null;

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
				return position.reportsTo == this.position!.id;
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
