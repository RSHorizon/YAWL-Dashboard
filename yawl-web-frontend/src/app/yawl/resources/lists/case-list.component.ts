import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Case} from "../entities/case.entity";



@Component({
    selector: 'case-list',
    templateUrl: 'case-list.component.html'
})
export class CaseListComponent {

	@Input("cases")
	items: Case[] = [];

	@Input("noItemsMessage")
	public noItemsMessage = "No cases!";

	@Output()
	onCancel = new EventEmitter();

	sortedItems: Case[] = [];


	ngOnChanges() {
		this.sort();
	}


	sort() {
		this.sortedItems = [];

		if(!this.items) {
			return;
		}

		this.items.forEach((x) => {
		  this.sortedItems.push(x);
		})

		this.sortedItems.sort((n1: Case,n2: Case) => {
			if (Number(n1.id) > Number(n2.id)) {
			   return 1;
			}
			if(Number(n2.id) < Number(n1.id)) {
				return -1;
			}
			return 0;
		});
	}

}
