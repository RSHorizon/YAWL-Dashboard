import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable, share, Subject} from 'rxjs';

import {catchError, map} from "rxjs/operators";




/**
 * This is the service for retrieving notification.
 *
 * @author Philipp Thomas
 */
@Injectable()
export class NotificationsService {

	public notificationsChanged = new Subject();


	constructor(private http: HttpClient) {
	}


	getAllNotifications() : Observable<any> {
		let url = "http://localhost:8082/api/notification";

		return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

	}


	getNotificationById(id : string) : Observable<any> {
		let url = "http://localhost:8082/api/notification/"+id;

		return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

	}


	changeMuteState(id : string, newMuteState : boolean) : Observable<any> {
		let url = "http://localhost:8082/api/notification/"+id;

		let data = {
			'status': newMuteState ? 1 : 0
		};

		let observable = this.http.put(url, data, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error)),
      share()
    )

		observable.subscribe(() => this.notificationsChanged.next(id));

		return observable;
	}


	delay(id : string, delayUntil : number) : Observable<any> {
		let url = "http://localhost:8082/api/notification/"+id;

		let data = {
			'delayUntil': delayUntil
		};

		let observable = this.http.put(url, data, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error)),
      share()
    )

		observable.subscribe(() => this.notificationsChanged.next(id));

		return observable;
	}


	addComment(id : string, comment : string) : Observable<any> {
		let url = "http://localhost:8082/api/notification/"+id+"/comment";

		let data = {
			comment
		};

		let observable = this.http.post<HttpResponse<any>>(url, data, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error)),
      share()
    )


		observable.subscribe(() => this.notificationsChanged.next(id));

		return observable;
	}


	removeComment(id : string, commentId : string) : Observable<any> {
		let url = "http://localhost:8082/api/notification/"+id+"/comment/"+commentId;

		let observable = this.http.delete(url, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error)),
      share()
    )


		observable.subscribe(() => this.notificationsChanged.next(id));

		return observable;
	}

	private handleError(error: any) : Observable<any> {
		let errMsg = (error.message)
						? error.message
						: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		throw new Error(errMsg);
	}


}
