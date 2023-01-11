import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';

import { DashboardConfigService } from './dashboard-config.service';
import {catchError, map} from "rxjs/operators";



@Injectable()
export class DashletService {

	constructor(private http: HttpClient,
				private dashboardConfigService : DashboardConfigService) {
	}


	getDashletsOfDashboard(dashboardId : string) : Observable<any> {
		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/"+dashboardId+"/dashlets";

		return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

	}


	getDashletById(id : string) : Observable<any> {
		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashlet/"+id;

		return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )
	}


	addDashlet(dashboardId : string, title : string, dashletType : string) : Observable<any> {
		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/"+dashboardId+"/dashlet";

		let data = { title, 'type': dashletType };

		return this.http.post<HttpResponse<any>>(url, data, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

	}


	renameDashlet(id : string, newName : string) : Observable<any> {
		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashlet/"+id;

		let data = {
			title: newName
		};

		return this.http.put(url, data, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

	}


	removeDashlet(id : string) : Observable<any> {
		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashlet/"+id;

		return this.http.delete(url, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
	}


	loadSettings(id : string) : Observable<any> {
		if(!id) {
			// @ts-ignore
      return;
		}
		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashlet/"+id+"/settings";

		return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res : any) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

	}


	saveSettings(id : string, settings : any) : Observable<any> {
		if(!id) {
			// @ts-ignore
      return;
		}

		let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashlet/"+id+"/settings";

		return this.http.put(url, settings, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
	}

	private handleError(error: any) : Observable<any> {
		let errMsg = (error.message)
						? error.message
						: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		throw new Error(errMsg);
	}


}
