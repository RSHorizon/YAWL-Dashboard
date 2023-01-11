import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Capability} from "../entities/capability.entity";



@Component({
    selector: 'capability-list',
    templateUrl: 'capability-list.component.html'
})
export class CapabilityListComponent {

	@Input("capabilities")
	items: Capability[] = [];

	@Input("selectable")
	selectable = false;

	@Input("selectedItem")
	selectedItem: Capability | null = null;

	@Input("searchFilter")
	searchFilter : string | null = null;

	@Input("noItemsMessage")
	public noItemsMessage = "No capabilities!";

	@Input("showDetailsLink")
	showDetailsLink = false;

	@Output()
	selectedItemChange = new EventEmitter();

	sortedItems: Capability[] = [];



	constructor(
		private router: Router) {
	}


	ngOnChanges() {
		this.filter();
	}


	sort() {
		this.sortedItems.sort((n1: Capability,n2: Capability) => {
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
				.filter((el: Capability) => {
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



	onSelect(item: Capability) {
    this.selectedItem = item;
		this.selectedItemChange.emit(item);
	}

	gotoDetailsPage(item: Capability) {
		this.router.navigate(['capability', item.id]);
	}

}
