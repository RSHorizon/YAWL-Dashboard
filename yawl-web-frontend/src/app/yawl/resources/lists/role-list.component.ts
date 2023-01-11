import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Role} from "../entities/role.entity";



@Component({
    selector: 'role-list',
    templateUrl: 'role-list.component.html'
})
export class RoleListComponent {

	@Input("roles")
	items: Role[] = [];

	@Input("selectable")
	selectable = false;

	@Input("selectedItem")
	selectedItem: Role | null = null;

	@Input("searchFilter")
	searchFilter : string | null = null;

	@Input("noRolesMessage")
	public noRolesMessage = "No roles!";

	@Input("showDetailsLink")
	showDetailsLink = false;

	@Output()
	selectedItemChange = new EventEmitter();

	sortedItems: Role[] = [];



	constructor(
		private router: Router) {
	}


	ngOnChanges() {
		this.filter();
	}


	sort() {
		this.sortedItems.sort((n1: Role,n2: Role) => {
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
			this.sortedItems = this.items.filter((el: Role) => {
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


	onSelect(role: Role) {
		this.selectedItem = role;
		this.selectedItemChange.emit(role);
	}


	gotoDetailsPage(item: Role) {
		this.router.navigate(['role', item.id]);
	}

}
