import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { WorkItem } from '../entities/work-item.entity';


export class WorkItemListColumnConfig {
	showIdColumn = true;
	showSpecificationColumn = true;
	showTaskColumn = true;
	showCaseIdColumn = true;
	showCreatedColumn = true;
	showAgeColumn = true;
	showStatusColumn = true;
	showResourceStatusColumn = true;
}

export class SortKey {
	// @ts-ignore
  key: string;
  // @ts-ignore
	desc: boolean;
}


@Component({
    selector: 'work-item-list',
    templateUrl: 'work-item-list.component.html'
})
export class WorkItemListComponent {

	@Input("work-items")
	public items : WorkItem[] = [];

	@Input("selectable")
	public selectable = false;

	@Input("selectedItem")
  public selectedItem : WorkItem | null = null;

	@Input("searchFilter")
	public searchFilter: string | null = null;

	@Input("noItemsMessage")
  public noItemsMessage = "No work items!";

	@Input("columnConfig")
  public columnConfig : WorkItemListColumnConfig = new WorkItemListColumnConfig();

	@Input("showDetailsLink")
  public showDetailsLink = false;

	@Output()
	private selectedItemChange = new EventEmitter();


  public sortedItems : WorkItem[] = [];

	private sortKeys: SortKey[] = [{key: "taskName", desc: false}, {key: "age", desc: true}];

	private columnCompareFunctions = {
		"caseId": function(n1: WorkItem, n2: WorkItem) {
			if(Number(n1.caseId) > Number(n2.caseId)) {
				return 1;
			}
			if(Number(n1.caseId) < Number(n2.caseId)) {
				return -1;
			}
			return 0;
		},
		"taskName": function(n1: WorkItem, n2: WorkItem) {
			if(n1.task.name > n2.task.name) {
			   return 1;
			}
			if(n1.task.name < n2.task.name) {
				return -1;
			}
			return 0;
		},
		"id": function(n1: WorkItem, n2: WorkItem) {
			if(n1.id > n2.id) {
			   return 1;
			}
			if(n1.id < n2.id) {
				return -1;
			}
			return 0;
		},
		"resourceStatus": function(n1: WorkItem, n2: WorkItem) {
			if(n1.resourceStatus > n2.resourceStatus) {
			   return 1;
			}
			if(n1.resourceStatus < n2.resourceStatus) {
				return -1;
			}
			return 0;
		},
		"age": function(n1: { enablementTime: number; }, n2: { enablementTime: number; }) {
			if(n1.enablementTime > n2.enablementTime) {
			   return 1;
			}
			if(n1.enablementTime < n2.enablementTime) {
				return -1;
			}
			return 0;
		},
		"specification": function(n1: WorkItem, n2: WorkItem) {
			let url1 = n1.specification.uri + n1.specification.version;
			let url2 = n2.specification.uri + n2.specification.version;

			if(url1 > url2) {
			   return 1;
			}
			if(url1 < url2) {
				return -1;
			}
			return 0;
		}
	}



	constructor(
		private router: Router) {
	}


	ngOnChanges() {
		this.filter();
	}


	addSortKey(sortKey: string) {
		let lastKey = this.sortKeys[this.sortKeys.length -1];
		if(lastKey.key == sortKey) {
			lastKey.desc = !lastKey.desc;
		} else {
			this.sortKeys.push({key: sortKey, desc: false});
		}
		console.log("sort"+JSON.stringify(this.sortKeys));
		this.sort();
		if(this.sortKeys.length > 3) {
			this.sortKeys.shift();
		}
	}


	isSortKey(sortKey: string) {
		let lastKey = this.sortKeys[this.sortKeys.length -1];
		return lastKey.key == sortKey;
	}


	sort() {
		this.sortedItems.sort((n1,n2) => {
			let index = this.sortKeys.length -1;
			while(index >= 0) {
				let key = this.sortKeys[index];
				// @ts-ignore
        let compareFunction = this.columnCompareFunctions[key.key];
				let result = compareFunction(n1, n2);
				if(result != 0) {
					if(key.desc) {
						return result;
					}
					return result*-1;
				}
				--index;
			}
			return 0;
		});
	}


	filter() {
		if(this.searchFilter != null && this.searchFilter !== "") {
			this.sortedItems = this.items
				.filter((el : WorkItem) => {
					// @ts-ignore
          return (el.id).toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1
            // @ts-ignore
							|| (el.task.name).toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1
            // @ts-ignore
							|| (el.specification.uri).toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1
            // @ts-ignore
							|| (el.resourceStatus).toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1;
				})
		} else {
			this.sortedItems = this.items;
		}

		this.sort();
	}


	onSelect(item: WorkItem) {
    this.selectedItem = item!;
    this.selectedItemChange.emit(item);
	}


	gotoDetailsPage(item: WorkItem) {
		this.router.navigate(['workitem', item.id]);
	}

}
