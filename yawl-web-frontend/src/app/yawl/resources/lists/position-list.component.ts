import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Position} from "../entities/position.entity";



@Component({
    selector: 'position-list',
    templateUrl: 'position-list.component.html'
})
export class PositionListComponent {

	@Input("positions")
	items: Position[] = [];

	@Input("selectable")
	selectable = false;

	@Input("selectedItem")
	selectedItem: Position | null = null;

	@Input("searchFilter")
	searchFilter: string |null = null;

	@Input("noItemsMessage")
	public noItemsMessage = "No positions!";

	@Input("showDetailsLink")
	showDetailsLink = false;

	@Output()
	selectedItemChange = new EventEmitter();

	sortedItems: Position[] = [];


	constructor(
		private router: Router) {
	}


	ngOnChanges() {
		this.filter();
	}


	sort() {
		this.sortedItems.sort((n1: Position,n2: Position) => {
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
				.filter((el: Position) => {
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


	onSelect(item: Position) {
		this.selectedItem = item;
		this.selectedItemChange.emit(item);
	}

	gotoDetailsPage(item: Position) {
		this.router.navigate(['position', item.id]);
	}

}
