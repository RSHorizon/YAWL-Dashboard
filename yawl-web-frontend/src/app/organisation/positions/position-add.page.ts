import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { PositionService } from '../../yawl/resources/services/position.service';
import { Position } from '../../yawl/resources/entities/position.entity';



@Component({
    templateUrl: 'position-add.page.html'
})
export class PositionAddPage {

	constructor(
		private router: Router,
		private notifierService : NotifierService,
		private positionService : PositionService) {
	}


	save(position : Position) {
		this.positionService.save(position).subscribe((result) => {
			this.gotoPositionPage(result.id);
			this.notifierService.notify("success", "The new position was added.");
		},
		(error) => {
			this.notifierService.notify("error", "Could not add position: "+error);
		})
	}


	gotoPositionPage(id : string) {
		let url = '/position/'+id;
		this.router.navigate([url]);
	}


	cancel() {
		let url = '/positions';
		this.router.navigate([url]);
	}

}
