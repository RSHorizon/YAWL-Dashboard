import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { OrgGroupService } from '../../yawl/resources/services/org-group.service';



@Component({
    templateUrl: 'org-groups-list.page.html'
})
export class OrgGroupsListPage {

  @ViewChild('searchBox')
	searchBox : ElementRef| undefined;

	public orgGroups = [];

	public isLoading = false;

	public searchQuery = '';


	constructor(
		private router: Router,
		private notifierService : NotifierService,
		private orgGroupService : OrgGroupService) {
	}

	ngOnInit() {
		this.reload();
	}

	ngAfterViewInit() {
        this.searchBox!.nativeElement.focus();
    }


	reload() {
		this.isLoading = true;

		this.orgGroupService.findAll().subscribe((loadedOrgGroups) => {
			// @ts-ignore
        this.orgGroups = loadedOrgGroups;
		},
		() => {
			this.notifierService.notify("error", "Could not load groups!");
		},
		() => {
			this.isLoading = false;
		});

	}


	openFormForNew() {
		let url = '/group/new';
		this.router.navigate([url]);
	}


	gotoDetailsPage(item: { id: any; }) {
		this.router.navigate(['group', item.id]);
	}

}
