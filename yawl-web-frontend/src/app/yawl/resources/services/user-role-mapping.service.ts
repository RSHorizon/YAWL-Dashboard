import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable, Subject} from 'rxjs';


import {User} from '../entities/user.entity';
import {Role} from '../entities/role.entity';
import {catchError, map} from "rxjs/operators";
import {env} from '../../../../environments/environment';

/**
 * @author Philipp R. Thomas
 */

@Injectable()
export class UserRoleMappingService {

  public notificationsChanged = new Subject();


  constructor(private http: HttpClient) {
  }


  getUsersByRole(roleId: string): Observable<User[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "role/" + encodeURIComponent(roleId)
      + "/users";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json().users),
      catchError((error) => this.handleError(error))
    )

  }


  getRolesByUser(userId: string): Observable<Role[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "user/" + encodeURIComponent(userId)
      + "/roles";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json().roles),
      catchError((error) => this.handleError(error))
    )

  }


  addUserRoleLink(userId: string, roleId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "role/" + encodeURIComponent(roleId) + "/users/identifiers";

    return this.http.post<HttpResponse<any>>(url, userId, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  deleteUserRoleLink(userId: string, roleId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "role/" + encodeURIComponent(roleId)
      + "/user/" + encodeURIComponent(userId);

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
