import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../entities/asset.entity";



@Component({
    selector: 'asset-list',
    templateUrl: 'asset-list.component.html'
})
export class AssetListComponent {

	@Input("items")
	items: Asset[] = [];

	@Input("selectedItem")
	selectedItem: Asset | null = null;

	@Input("searchFilter")
	searchFilter: string | null = null;

	@Input("noItemsMessage")
	public noItemsMessage = "No items!";

	@Input("showDetailsLink")
	showDetailsLink = false;

	@Output()
	selectedItemChange = new EventEmitter();

	@Output()
	intendEdit = new EventEmitter();

	@Output()
	intendRemove = new EventEmitter();

	sortedItems: Asset[] = [];



	constructor(
		private router: Router) {
	}


	ngOnChanges() {
		this.filter();
	}


	sort() {
		this.sortedItems.sort((n1: Asset,n2: Asset) => {
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
				.filter((el: Asset) => {
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
	}

	onSelect(item: Asset) {
		this.selectedItem = item;
		this.selectedItemChange.emit(item);
	}


	edit(item: Asset, $event: { stopPropagation: () => void; }) {
		$event.stopPropagation();
		this.intendEdit.emit(item);
	}


	remove(item: Asset, $event: { stopPropagation: () => void; }) {
		$event.stopPropagation();
		this.intendRemove.emit(item);
	}

	gotoDetailsPage(item: Asset) {
		this.router.navigate(['asset', item.id]);
	}

}
