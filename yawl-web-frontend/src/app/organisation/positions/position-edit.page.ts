import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { PositionService } from '../../yawl/resources/services/position.service';
import { Position } from '../../yawl/resources/entities/position.entity';



@Component({
    templateUrl: 'position-edit.page.html'
})
export class PositionEditPage {

	// @ts-ignore
  private id : string;
  // @ts-ignore
	public position : Position;

	public isLoading = true;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private positionService : PositionService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id']) {
				this.notifierService.notify("error", "No valid id!");
				return;
			}

			this.id = params['id'];
			this.load();
		});
    }


	public load() {
		this.isLoading = true;
		this.positionService.findById(this.id).subscribe((result) => {
			this.position = result;
			this.isLoading = false;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load position: "+error);
		});
	}


	public save() {
		this.positionService.update(this.position.id, this.position).subscribe(() => {
			this.notifierService.notify("success", "The position was edited.");
			this.gotoPositionPage();
		},
		(error) => {
			this.notifierService.notify("error", "Could not edit position: "+error);
		});
	}


	public cancel() {
		this.gotoPositionPage();
	}


	private gotoPositionPage() {
		this.router.navigate(['position', this.position.id]);
	}

}
