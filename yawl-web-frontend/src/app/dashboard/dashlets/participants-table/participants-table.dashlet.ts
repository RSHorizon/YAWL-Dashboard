import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';


import { DashletService } from '../../dashlet.service';

import { DashboardConfigService } from '../../dashboard-config.service';



export interface ParticipantData {
	name : String;
	numberOffered : number;
	numberAccepted : number;
	numberStarted : number;
	sumIdleTime : number;
}


@Component({
    selector: 'participants-table-dashlet',
    templateUrl: 'participants-table.dashlet.html'
})
export class ParticipantsTableDashlet {

	// @ts-ignore
  dashletId : string;

	data: any = [];
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
    console.log("A")
		this.isLoading = true;

		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashlet/participants-table/"+this.dashletId+"/data";

		this.http.get<HttpResponse<any>>(url, {withCredentials: true}).subscribe(
			(res: HttpResponse<any>) => this.handleResponse(res),
			(error) => {},
			() => {
				this.isLoading = false;
			});
	}


	handleResponse(res : any) {
		this.data = [];
		let participants = res.body.json().data;
		for(let pdata of participants) {
			// @ts-ignore
      this.data.push(pdata);
		}

		// @ts-ignore
    this.data.sort((t1, t2) => {
			if(this.settings.sortColumnDirection == 'ASC') {
				if(t1[this.settings.sortColumn] > t2[this.settings.sortColumn]) return 1;
				if(t1[this.settings.sortColumn] < t2[this.settings.sortColumn]) return -1;
				return 0;
				//return t1[this.settings.sortColumn] - t2[this.settings.sortColumn];
			} else {
				if(t1[this.settings.sortColumn] < t2[this.settings.sortColumn]) return 1;
				if(t1[this.settings.sortColumn] > t2[this.settings.sortColumn]) return -1;
				return 0;
				//return t2[this.settings.sortColumn] - t1[this.settings.sortColumn];
			}
		});
	}


	loadSettings(callback : any) {
		if(!this.dashletId) {
			return;
		}

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
