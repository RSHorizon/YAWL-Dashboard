import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';



import {Specification} from '../entities/specification.entity';
import {catchError, map} from "rxjs/operators";

import { env } from '../../../../environments/environment';


@Injectable()
export class SpecificationService {

  constructor(private http: HttpClient) {
  }


  findAll(): Observable<Specification[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      // @ts-ignore
      map((res) => res.specifications),
      catchError((error) => this.handleError(error))
    )
  }


  findById(id: string, version: string, uri: string): Observable<Specification> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
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

  storeTaskAttributesById(id: string, version: string, uri: string, taskId: string,
                          costResourceHour: string, maxTaskAge: string, maxQueueAge: string): Observable<Specification> {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let url = env.apiUrl + "specification/task/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version)
      + "/" + encodeURIComponent(taskId)
      + "/setAttributes";
    let payload = 'costResourceHour=' + encodeURIComponent(costResourceHour)
      + '&maxTaskAge=' + encodeURIComponent(maxTaskAge)
      + '&maxQueueAge=' + encodeURIComponent(maxQueueAge);

    return this.http.post<HttpResponse<any>>(url, payload, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
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
      catchError((error) => this.handleError(error))
    )
  }

  findDefinitionById(id: string, version: string, uri: string): Observable<Specification> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version) + "/definition";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )
  }

  save(item: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/xml");

    let url = env.apiUrl + "specification";

    return this.http.post<HttpResponse<any>>(url, item, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  remove(id: string, version: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification/"
      + encodeURIComponent(id)
      + "/" + encodeURIComponent(version);

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
