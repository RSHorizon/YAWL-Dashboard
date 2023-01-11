import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { YawlResourcesConfigService } from '../yawl-resources-config.service';

import { User }		from '../entities/user.entity';
import { Position }	from '../entities/position.entity';
import {catchError, map} from "rxjs/operators";


@Injectable()
export class UserPositionMappingService {

	public notificationsChanged = new Subject();


	constructor(private http: HttpClient,
				private yawlResourcesConfigService : YawlResourcesConfigService) {
	}


	getUsersByPosition(positionId : string) : Observable<User[]> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "position/"+encodeURIComponent(positionId)
																		  +"/users";

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json().users),
      catchError((error) => this.handleError(error))
    )

	}


	getPositionsByUser(userId : string) : Observable<Position[]> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "user/"+encodeURIComponent(userId)
																		  +"/positions";

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json().positions),
      catchError((error) => this.handleError(error))
    )

	}


	addUserPositionLink(userId : string, positionId : string) : Observable<any> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "position/"+encodeURIComponent(positionId)
																		  +"/users/identifiers";

		return this.http.post<HttpResponse<any>>(url, userId, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

	}


	deleteUserPositionLink(userId : string, positionId : string) : Observable<any> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "position/"+encodeURIComponent(positionId)
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
