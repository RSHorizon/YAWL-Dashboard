import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable, Subject} from 'rxjs';


import {Role} from '../entities/role.entity';
import {catchError, map} from "rxjs/operators";

import {env} from '../../../../environments/environment';

/**
 * @author Philipp R. Thomas
 */

@Injectable()
export class RoleService {

  public notificationsChanged = new Subject();


  constructor(private http: HttpClient) {
  }


  findAll(): Observable<Role[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "roles";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.roles),
      catchError((error) => this.handleError(error))
    )

  }


  findById(id: string): Observable<Role> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "role/" + encodeURIComponent(id);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

  }


  save(role: Role): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "role";

    return this.http.post<HttpResponse<any>>(url, role, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

  }


  update(role: Role): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "role/" + encodeURIComponent(role.id);

    return this.http.put(url, role, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  remove(roleId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "role/" + encodeURIComponent(roleId);

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
