import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

import { DashletService } from '../../dashlet.service';

import { DashboardConfigService } from '../../dashboard-config.service';
import {map} from "rxjs/operators";



export interface RunningCasesData {
	name : String;
	numberCases : number;
  specificationName?: string;
  specificationVersion?: string;
}


@Component({
    selector: 'running-cases-table-dashlet',
    templateUrl: 'running-cases-table.dashlet.html'
})
export class RunningCasesTableDashlet {

	// @ts-ignore
  dashletId : string;

	data : RunningCasesData[] = [];
	settings : any = {};


	isLoading = false;

	timer : any;


	constructor(private http: HttpClient,
				private dashletService: DashletService,
				private dashboardConfigService : DashboardConfigService,
				private router: Router) {
	}

	onDashletCreated() {
		this.reload();

		this.timer = setInterval(() => this.loadData(), 30000);
	}

	ngOnDestroy() {
		if(this.timer) {
			clearInterval(this.timer);
		}
	}

	reload() {
		this.loadSettings(() => this.loadData());
	}


	loadData() {
		this.isLoading = true;

		let headers = new HttpHeaders();

		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashlet/running-cases-table/"+this.dashletId+"/data";

		this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json().data),
    ).subscribe(
      (res: HttpResponse<any>) => this.handleResponse(res),
      (error) => {},
      () => this.isLoading = false);

	}


	handleResponse(specifications : any) {
		this.data = [];
		for(let pdata of specifications) {
			this.data.push(pdata);
		}

		this.data.sort((t1, t2) => {
			if(this.settings.sortColumnDirection == 'ASC') {
				// @ts-ignore
        if(t1[this.settings.sortColumn] > t2[this.settings.sortColumn]) return 1;
        // @ts-ignore
				if(t1[this.settings.sortColumn] < t2[this.settings.sortColumn]) return -1;
				return 0;
			} else {
        // @ts-ignore
				if(t1[this.settings.sortColumn] < t2[this.settings.sortColumn]) return 1;
        // @ts-ignore
				if(t1[this.settings.sortColumn] > t2[this.settings.sortColumn]) return -1;
				return 0;
			}
		});
	}


	loadSettings(callback : any) {
		if(!this.dashletId) {
			return;
		}

    console.log("B");
		this.isLoading = true;
		this.dashletService.loadSettings(this.dashletId)
					.subscribe(
						(res : any) => {
							this.settings = res;
							callback && callback();
						},
						() => {
						},
						() => {
							this.isLoading = false;
						});
	}


	navigateToSettings() {
		let url = this.dashboardConfigService.getDashboardServiceUrl() + 'dashlet/'+this.dashletId+'/settings';
		this.router.navigate([url]);
	}

}
