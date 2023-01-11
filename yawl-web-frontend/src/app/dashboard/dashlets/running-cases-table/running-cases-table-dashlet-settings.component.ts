import { Component, Input } from '@angular/core';



@Component({
    templateUrl: 'running-cases-table-dashlet-settings.component.html'
})
export class RunningCasesTableDashletSettingsComponent {

	dashletId : String| undefined;

	settings : any = {};


	constructor() {
	}

	ngOnInit() {
	}

	blacklistedSpecificationsUpdated(specifications: any) {
		this.settings.blacklistedSpecifications = specifications;
	}

	whitelistedSpecificationsUpdated(specifications: any) {
		this.settings.whitelistedSpecifications = specifications;
	}
}
