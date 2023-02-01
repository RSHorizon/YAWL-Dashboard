import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import {catchError, map} from "rxjs/operators";

import {env} from '../../../../environments/environment';

/**
 * @author Philipp R. Thomas
 */

@Injectable()
export class AbstractResourceService<T> {

  public notificationsChanged = new Subject();
  public resourceUrlPath: string = '';
  public getAllAttribute: string = '';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<T[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + this.resourceUrlPath;

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res[this.getAllAttribute]),
      catchError((error) => this.handleError(error))
    )
  }


  findById(id: string): Observable<T> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + this.resourceUrlPath + "/" + encodeURIComponent(id);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )
  }


  save(resource: T): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + this.resourceUrlPath;

    return this.http.post<HttpResponse<any>>(url, resource, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )
  }


  update(id: string, resource: T): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + this.resourceUrlPath + "/" + encodeURIComponent(id);

    return this.http.put(url, resource, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
  }


  remove(id: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + this.resourceUrlPath + "/" + encodeURIComponent(id);

    return this.http.delete(url, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
  }


  private handleError(error: any): Observable<any> {
    let errMsg = (error.message)
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    throw new Error(errMsg);
  }


}
