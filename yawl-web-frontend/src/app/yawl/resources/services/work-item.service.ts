import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';


import {WorkItem} from '../entities/work-item.entity';
import {User} from '../entities/user.entity';
import {catchError, map} from "rxjs/operators";

import {env} from '../../../../environments/environment';

/**
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */

@Injectable()
export class WorkItemService {

  constructor(private http: HttpClient) {
  }


  findAll(): Observable<WorkItem[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "workitems";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.workItems),
      catchError((error) => this.handleError(error))
    )

  }


  findAllUnoffered(): Observable<WorkItem[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "workitems/unoffered";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.workItems),
      catchError((error) => this.handleError(error))
    )
  }

  findAllByCase(specificationId: string, specversion: string, uri: string, caseId: string): Observable<WorkItem[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification/"
      + encodeURIComponent(uri) + "/"
      + encodeURIComponent(specificationId) + "/"
      + encodeURIComponent(specversion) + "/"
      + encodeURIComponent(caseId)
      + "/workitems";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )
  }

  findAllBySpecification(specificationId: string, specversion: string, uri: string): Observable<WorkItem[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "specification/"
      + encodeURIComponent(uri) + "/"
      + encodeURIComponent(specificationId) + "/"
      + encodeURIComponent(specversion)
      + "/workitems";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )
  }


  findByUser(userId: string, queue: string): Observable<WorkItem[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    if (queue != "offered" && queue != "allocated" && queue != "started" && queue != "suspended") {
      console.log("Illegal queue");
    }

    let url = env.apiUrl + "user/"
      + encodeURIComponent(userId)
      + "/workitems/" + queue;

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.workItems),
      catchError((error) => this.handleError(error))
    )
  }


  findById(id: string): Observable<WorkItem> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "workitem/" + encodeURIComponent(id);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

  }


  getParticipantsOfWorkItem(id: string): Observable<User[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "workitem/" + encodeURIComponent(id) + "/participants";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.users),
      catchError((error) => this.handleError(error))
    )

  }


  reofferWorkItem(id: string, userIds: string[]): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = env.apiUrl + "workitem/" + encodeURIComponent(id) + "/offer";

    let data = {
      'users': userIds
    };

    return this.http.post<HttpResponse<any>>(url, data, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  reallocateWorkItem(id: string, userId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = env.apiUrl + "workitem/" + encodeURIComponent(id) + "/allocate";

    let data = {
      'user': userId
    };

    return this.http.post<HttpResponse<any>>(url, data, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  restartWorkItem(id: string, userId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = env.apiUrl + "workitem/" + encodeURIComponent(id) + "/start";

    let data = {
      'user': userId
    };

    return this.http.post<HttpResponse<any>>(url, data, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  updateDocumentation(id: string, documentation: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = env.apiUrl + "workitem/" + encodeURIComponent(id) + "/documentation";

    let data = {
      'documentation': documentation
    };

    return this.http.put(url, data, {headers, withCredentials: true}).pipe(
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
