import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {ExtensionSpecification} from "../../yawl/resources/dto/extension-specification.entity";
import {ExtensionTask} from "../../yawl/resources/dto/extension-task.entity";
import {env} from "../../../environments/environment";
/**
 * @author Robin Steinwarz
 */
@Injectable({
  providedIn: 'root'
})
export class ExtensionSpecificationService {

  constructor(private http: HttpClient) { }

  private baseURL: string = "http://localhost:8082/api/";

  getExtensionSpecifications(): Observable<ExtensionSpecification[]> {
    return this.http.get<HttpResponse<any>>(this.baseURL + "specification/extension", {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: any) => this.handleError(error))
    )
  }

  getExtensionSpecification(specificationId: string, version: string, uri: string): Observable<ExtensionSpecification>{
    return this.http.get<HttpResponse<any>>(this.baseURL + "specification/extension/" + uri + "/" + specificationId + "/" + version, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: any) => this.handleError(error))
    )
  }

  getSpecificationExtensionTasks(id: string, version: string, uri: string): Observable<ExtensionTask[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification/task/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version);

    return this.http.get<HttpResponse<ExtensionTask>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<ExtensionTask>) => res),
      catchError((error) => this.handleError(error))
    )
  }

  setCoreAttribute(specificationId: string, version: string, uri: string, core: string){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let payload = 'core=' + encodeURIComponent(core);

    return this.http.post(this.baseURL + "specification/extension/" + uri + "/"  + specificationId + "/" + version +"/core",payload, {headers, withCredentials: true}).pipe(
      map((res: any) => res),
      catchError((error: any) => this.handleError(error))
    )
  }

  setSpecificationTimeLimitAttribute(specificationId: string, version: string, uri: string, specificationTimeLimit: string){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let payload = 'specificationTimeLimit=' + encodeURIComponent(specificationTimeLimit);

    return this.http.post(this.baseURL + "specification/extension/" + uri + "/"  + specificationId + "/" + version +"/specificationTimeLimit",payload, {headers, withCredentials: true}).pipe(
      map((res: any) => res),
      catchError((error: any) => this.handleError(error))
    )
  }

  setCostResourceHourAttribute(specificationId: string, version: string, uri: string, costResourceHour: string){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let payload = 'costResourceHour=' + encodeURIComponent(costResourceHour);

    return this.http.post(this.baseURL + "specification/extension/" + uri + "/"  + specificationId + "/" + version +"/costResourceHour",payload, {headers, withCredentials: true}).pipe(
      map((res: any) => res),
      catchError((error: any) => this.handleError(error))
    )
  }

  setMaxTaskAgeAttribute(specificationId: string, version: string, uri: string, maxTaskAge: string){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let payload = 'maxTaskAge=' + encodeURIComponent(maxTaskAge);

    return this.http.post(this.baseURL + "specification/extension/" + uri + "/"  + specificationId + "/" + version +"/maxTaskAge",payload, {headers, withCredentials: true}).pipe(
      map((res: any) => res),
      catchError((error: any) => this.handleError(error))
    )
  }

  setMaxQueueAgeAttribute(specificationId: string, version: string, uri: string, maxQueueAge: string){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let payload = 'maxQueueAge=' + encodeURIComponent(maxQueueAge);

    return this.http.post(this.baseURL + "specification/extension/" + uri + "/"  + specificationId + "/" + version +"/maxQueueAge",payload, {headers, withCredentials: true}).pipe(
      map((res: any) => res),
      catchError((error: any) => this.handleError(error))
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
