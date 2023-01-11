import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { ModalService }			from '../../util/modal/modal.service';

import { YawlResourcesDialogsModule }	from '../../yawl/resources/yawl-resources-dialogs.module';
import { PositionSelectDialogComponent }	from '../../yawl/resources/dialogs/position-select-dialog.component';

import { UserPositionMappingService } from '../../yawl/resources/services/user-position-mapping.service';
import { Position } from '../../yawl/resources/entities/position.entity';
import { User } from '../../yawl/resources/entities/user.entity';


@Component({
    selector: 'user-positions-panel',
    templateUrl: 'user-positions-panel.component.html'
})
export class UserPositionsPanelComponent {

  @Input("user")
  user : User | null = null;

	@Output()
	positionAdded = new EventEmitter();

	@Output()
	positionRemoved = new EventEmitter();

	public positions : Position[] = [];
	public selectedPosition : Position | null = null;

	private isLoading = false;


	constructor(
		private modalService : ModalService,
		private notifierService : NotifierService,
		private userPositionMappingService : UserPositionMappingService) {
	}


	ngOnChanges() {
		this.loadUserPositions();
	}


	private loadUserPositions() {
		this.isLoading = true;
		this.selectedPosition = null;

		this.userPositionMappingService.getPositionsByUser(this.user!.id!).subscribe((loadedPositions) => {
			this.positions = loadedPositions;
		},
		() => {
			this.notifierService.notify("error", "Could not load positions!");
		},
		() => {
			this.isLoading = false;
		});

	}


	intendAddPosition() {
		let ignore = this.positions.map((t) => t.id);
		let modal = this.modalService.create(YawlResourcesDialogsModule, PositionSelectDialogComponent, {
				'ignore': ignore,
				'onSelected': (position: Position) => this.addPosition(position)
			});
		modal.subscribe((ref) => {});
	}


	addPosition(position : Position) {
		this.userPositionMappingService.addUserPositionLink(this.user!.id!, position.id).subscribe(() => {
			this.loadUserPositions();
			this.positionAdded.emit(position);
		},
		(error) => {
			this.notifierService.notify("error", "Could not add position! " + error);
		},
		() => {
		});
	}


	removeSelected() {
		let position = this.selectedPosition;
		if(!position) {
			return;
		}

		this.userPositionMappingService.deleteUserPositionLink(this.user!.id!, position.id).subscribe(() => {
			this.loadUserPositions();
			this.positionRemoved.emit(position);
		},
		(error) => {
			this.notifierService.notify("error", "Could not remove position! " + error);
		},
		() => {
		});
	}

}
