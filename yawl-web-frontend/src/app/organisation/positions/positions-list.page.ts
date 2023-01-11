import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { PositionService } from '../../yawl/resources/services/position.service';



@Component({
    templateUrl: 'positions-list.page.html'
})
export class PositionsListPage {

  @ViewChild('searchBox')
  searchBox : ElementRef| undefined;

	public positions = [];

	public isLoading = false;

	public searchQuery = '';


	constructor(
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private positionService : PositionService) {
	}

	ngOnInit() {
		this.reload();
	}

	ngAfterViewInit() {
        this.searchBox!.nativeElement.focus();
    }



	reload() {
		this.isLoading = true;

		this.positionService.findAll().subscribe((result) => {
			// @ts-ignore
        this.positions = result;
		},
		(error) => {
			this.notifierService.notify("error", "Could not load positions! " + error);
		},
		() => {
			this.isLoading = false;
		});

	}


	openFormForNew() {
		let url = '/position/new';
		this.router.navigate([url]);
	}


	gotoDetailsPage(item: { id: any; }) {
		this.router.navigate(['position', item.id]);
	}

}
