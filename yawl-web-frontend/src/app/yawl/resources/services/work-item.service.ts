import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';


import {WorkItem} from '../entities/work-item.entity';
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


  private handleError(error: any): Observable<any> {
    let errMsg = (error.json().message)
      ? error.json().message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    throw new Error(errMsg);
  }

}
