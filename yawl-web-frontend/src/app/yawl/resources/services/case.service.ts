import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';

import {YawlResourcesConfigService} from '../yawl-resources-config.service';

import {Case} from '../entities/case.entity';
import {catchError, map} from "rxjs/operators";


@Injectable()
export class CaseService {

  constructor(private http: HttpClient,
              private yawlResourcesConfigService: YawlResourcesConfigService) {
  }


  findAll(): Observable<Case[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "case";

    // @ts-ignore
    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.cases),
      catchError((error) => this.handleError(error))
    )

  }


  findById(id: string): Observable<Case> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "case/" + encodeURIComponent(id);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )
  }

  findCaseEventsById(caseId: string): Observable<Case> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "case/" + encodeURIComponent(caseId)+ "/events";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )
  }


  findAllBySpecificationId(id: string, version: string, uri: string): Observable<Case[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "specification/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version)
      + "/cases";
    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )

  }


  startCase(id: string, version: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "specification/"
      + encodeURIComponent(id)
      + "/" + encodeURIComponent(version)
      + "/start";

    return this.http.post<HttpResponse<any>>(url, {}, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
  }


  cancelCase(id: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "case/" + encodeURIComponent(id);

    return this.http.delete(url, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
  }


  private handleError(error: any): Observable<any> {
    let errMsg = (error.json().message)
      ? error.json().message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    throw new Error(errMsg);
  }

}
