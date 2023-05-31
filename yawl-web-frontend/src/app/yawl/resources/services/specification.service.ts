import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';


import {Specification} from '../entities/specification.entity';
import {catchError, map} from "rxjs/operators";

import {env} from '../../../../environments/environment';
import {SpecificationStatistic} from "../dto/specification-statistic.entity";
import {NotifierService} from "angular-notifier";

/**
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */

@Injectable()
export class SpecificationService {

  constructor(private http: HttpClient,
              private notifierService: NotifierService) {
  }


  findAll(): Observable<Specification[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      map((res: any) => res),
      catchError((error) => this.handleError(error))
    )
  }

  findTasksById(id: string, version: string, uri: string): Observable<Specification> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification/task/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )
  }

  getSpecificationStatistic(id: string, version: string, uri: string): Observable<SpecificationStatistic> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "statistic/specification/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version);

    return this.http.get<HttpResponse<SpecificationStatistic>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<SpecificationStatistic>) => res),
      catchError((error) => this.handleError(error))
    )
  }

  storeTaskAttributesById(id: string, version: string, uri: string, taskid: string,
                          costResourceHour: string, maxTaskAge: string, maxQueueAge: string): Observable<Specification> {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let url = env.apiUrl + "specification/task/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version)
      + "/" + encodeURIComponent(taskid)
      + "/setAttributes";
    let payload = 'costResourceHour=' + encodeURIComponent(costResourceHour)
      + '&maxTaskAge=' + encodeURIComponent(maxTaskAge)
      + '&maxQueueAge=' + encodeURIComponent(maxQueueAge);

    return this.http.post<HttpResponse<any>>(url, payload, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => {
        this.notifierService.notify("error", "Could not store task attributes");
        return this.handleError(error);
      })
    )
  }

  storeSpecificationAttributesById(id: string, version: string, uri: string,
                                   specificationTimeLimit: string): Observable<Specification> {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let url = env.apiUrl + "specification/extension/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version)
      + "/specificationTimeLimit";
    let payload = 'specificationTimeLimit=' + encodeURIComponent(specificationTimeLimit);

    return this.http.post<HttpResponse<any>>(url, payload, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => {
        this.notifierService.notify("error", "Could not store specification time limit");
        return this.handleError(error);
      })
    )
  }

  private handleError(error: any): Observable<any> {
    if(error.message !== undefined){
      throw new Error(error.message);
    }
    let errMsg = (error.json().message)
      ? error.json().message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    throw new Error(errMsg);
  }

}
