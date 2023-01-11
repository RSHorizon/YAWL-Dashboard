import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';

import { YawlResourcesConfigService } from '../yawl-resources-config.service';

import { Specification } from '../entities/specification.entity';
import {catchError, map} from "rxjs/operators";



@Injectable()
export class SpecificationService {

	constructor(private http: HttpClient,
				private yawlResourcesConfigService : YawlResourcesConfigService) {
	}


	findAll() : Observable<Specification[]> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "specification";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      // @ts-ignore
      map((res) => res.specifications),
      catchError((error) => this.handleError(error))
    )
	}


	findById(id : string, version : string, uri : string) : Observable<Specification> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "specification/"
                                      + encodeURIComponent(uri)
																			+ "/" + encodeURIComponent(id)
																			+ "/" + encodeURIComponent(version);

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )
	}


	save(item : string) : Observable<any> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");
		headers.append("Content-Type", "application/xml");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "specification";

		return this.http.post<HttpResponse<any>>(url, item, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

	}


	remove(id : string, version : string) : Observable<any> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "specification/"
																			+encodeURIComponent(id)
																			+"/"+encodeURIComponent(version);

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
