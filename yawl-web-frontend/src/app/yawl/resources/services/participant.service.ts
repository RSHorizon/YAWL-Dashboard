import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Specification} from "../entities/specification.entity";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {env} from "../../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Participant} from "../entities/participant.entity";
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient,
              private notifierService: NotifierService) { }

  findAll(): Observable<any[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    let url = env.apiUrl + "participants";

    // @ts-ignore
    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error) => this.handleError(error))
    )
  }

  private handleError(error: any): Observable<any> {
    let errMsg = (error.json().message)
      ? error.json().message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    throw new Error(errMsg);
  }
}
