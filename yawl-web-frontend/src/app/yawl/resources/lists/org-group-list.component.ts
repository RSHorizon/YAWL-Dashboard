import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {OrgGroup} from "../entities/org-group.entity";



@Component({
    selector: 'org-group-list',
    templateUrl: 'org-group-list.component.html'
})
export class OrgGroupListComponent {

	@Input("orgGroups")
	items: OrgGroup[] = [];

	@Input("selectable")
	selectable = false;

	@Input("selectedItem")
	selectedItem: OrgGroup | null = null;

	@Input("searchFilter")
	searchFilter: string | null = null;

	@Input("noItemsMessage")
	public noItemsMessage = "No groups!";

	@Input("showDetailsLink")
	showDetailsLink = false;

	@Output()
	selectedItemChange = new EventEmitter();

	sortedItems: OrgGroup[] = [];


	constructor(
		private router: Router) {
	}


	ngOnChanges() {
		this.filter();
	}


	sort() {
		this.sortedItems.sort((n1: OrgGroup,n2: OrgGroup) => {
			if (n1.name > n2.name) {
			   return 1;
			}
			if (n1.name < n2.name) {
				return -1;
			}
			return 0;
		});
	}


	filter() {
		if(this.searchFilter != null && this.searchFilter !== "") {
			this.sortedItems = this.items
				.filter((el: OrgGroup) => {
					// @ts-ignore
          return (el.name).toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1
            // @ts-ignore
							|| (el.description && el.description.toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1)
            // @ts-ignore
							|| (el.notes && el.notes.toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1);
				})
		} else {
			this.sortedItems = this.items;
		}

		this.sort();
	}


	onSelect(item: OrgGroup) {
		this.selectedItem = item;
		this.selectedItemChange.emit(item);
	}

	gotoDetailsPage(item: OrgGroup) {
		this.router.navigate(['position', item.id]);
	}

}
