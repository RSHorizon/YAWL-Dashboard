import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Subject} from 'rxjs';

import {User} from '../entities/user.entity';
import {catchError, map} from "rxjs/operators";

import {env} from '../../../../environments/environment';

/**
 * @author Philipp R. Thomas
 */

@Injectable()
export class UserService {

  public notificationsChanged = new Subject();


  constructor(private http: HttpClient) {
  }


  findAll(): Observable<User[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "users";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.users),
      catchError((error) => this.handleError(error))
    )

  }


  findById(id: string): Observable<User> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "user/" + encodeURIComponent(id);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

  }


  save(user: User): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "user";

    return this.http.post<HttpResponse<any>>(url, user, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

  }


  update(user: User): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    // @ts-ignore
    let url = env.apiUrl + "user/" + encodeURIComponent(user.id);

    return this.http.put(url, user, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  updatePassword(userId: string, newPassword: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = env.apiUrl + "user/" + encodeURIComponent(userId);

    let data = {
      'password': newPassword
    };

    return this.http.put(url, data, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }


  remove(userId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "user/" + encodeURIComponent(userId);

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
