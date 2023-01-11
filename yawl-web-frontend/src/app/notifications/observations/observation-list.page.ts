import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';


import { Observer } from './observer';
import { ObserverRegistry } from './observer-registry.service';
import { ObservationService } from './observation.service';
import {Observable} from "rxjs";




@Component({
    selector: 'observation-list-page',
    templateUrl: 'observation-list.page.html'
})
export class ObservationListPage {

	observations : any[] = [];

	isLoading = false;


	constructor(
		private observationService : ObservationService,
		private observerRegistry : ObserverRegistry,
		private notifierService : NotifierService,
		private router : Router) {
	}


    ngOnInit() {
		this.loadData();
    }


	loadData() {
		this.isLoading = true;
		this.observationService.getAllObservations().subscribe((result) => {
			this.observations = result.observations.sort((n1: { title: number; }, n2: { title: number; }) => {
				if(n1.title > n2.title) {
					return 1;
				}
				if(n1.title < n2.title) {
					return -1;
				}
				return 0;
			});
		},
		(error) => {
			this.notifierService.notify("error", "Could not load list! "+error);
			this.isLoading = false;
		},
		() => {
			this.isLoading = false;
		});
	}


	mapTypeToDisplayName = (key : string) => {
		let result = this.observerRegistry.getObserver(key);
		if(!result) return key;
		return result.displayName;
	}


	navigateToNewObservationPage() {
		let url = 'observations/new';
		this.router.navigate([url]);
	}


	navigateToObservationSettings(item: { id: string; }) {
		let url = 'observation/'+item.id+'/settings';
		this.router.navigate([url]);
	}


	removeObservation(item: { id: string; }) {
		this.isLoading = true;
		this.observationService.removeObservation(item.id).subscribe(() => {
			this.notifierService.notify("success", "You successfully removed a observation");
			this.loadData();
		},
		(error) => {
			this.notifierService.notify("error", "Could not remove observation! "+error);
			this.isLoading = false;
		},
		() => {
			this.isLoading = false;
		});
	}

}
