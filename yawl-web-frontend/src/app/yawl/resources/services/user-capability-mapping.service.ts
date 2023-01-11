import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { YawlResourcesConfigService } from '../yawl-resources-config.service';

import { User }			from '../entities/user.entity';
import { Capability }	from '../entities/capability.entity';
import {catchError, map} from "rxjs/operators";



@Injectable()
export class UserCapabilityMappingService {

	public notificationsChanged = new Subject();


	constructor(private http: HttpClient,
				private yawlResourcesConfigService : YawlResourcesConfigService) {
	}


	getUsersByCapability(capabilityId : string) : Observable<User[]> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "capability/"+encodeURIComponent(capabilityId)
																		  +"/users";

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json().users),
      catchError((error) => this.handleError(error))
    )

	}


	getCapabilitiesByUser(userId : string) : Observable<Capability[]> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "user/"+encodeURIComponent(userId)
																		  +"/capabilities";

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json().capabilities),
      catchError((error) => this.handleError(error))
    )

	}


	addUserCapabilityLink(userId : string, capabilityId : string) : Observable<any> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "capability/"+encodeURIComponent(capabilityId)
																		  +"/users/identifiers";

		return this.http.post<HttpResponse<any>>(url, userId, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

	}


	deleteUserCapabilityLink(userId : string, capabilityId : string) : Observable<any> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "capability/"+encodeURIComponent(capabilityId)
																		  +"/user/"+encodeURIComponent(userId);

		return this.http.delete(url, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

	}


	private handleError(error: any) : Observable<any> {
		let errMsg = (error.json().message)
						? error.json().message
						: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		throw new Error(errMsg);
	}


}
