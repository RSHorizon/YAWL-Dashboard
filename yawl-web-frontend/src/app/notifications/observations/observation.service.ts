import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable, share, Subject} from 'rxjs';

import {catchError, map} from "rxjs/operators";



@Injectable()
export class ObservationService {

	public observationsChanged = new Subject();


	constructor(private http: HttpClient) {
	}


	getAllObservations() : Observable<any> {
		let headers = new HttpHeaders();

		let url = "http://localhost:8082/api/observation";

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

	}


	getObservationById(id : string) : Observable<any> {
		let headers = new HttpHeaders();

		let url = "http://localhost:8082/api/observation/"+id;

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error) => this.handleError(error))
    )

	}


	addObservation(title: string, observer : string, settings : any) : Observable<any> {
		let headers = new HttpHeaders();

		let url = "http://localhost:8082/api/observation/";

		let data = {
			'title': title,
			'type': observer,
			'settings': settings
		};

		let observable = this.http.post<HttpResponse<any>>(url, data, {headers, withCredentials: true}).pipe(
      map((response : any) => response.json()),
      catchError((error) => this.handleError(error))
    )


		return observable;
	}


	editObservation(observation: any) : Observable<any> {
		let headers = new HttpHeaders();

		let url = "http://localhost:8082/api/observation/"+observation.id;

		let data = {
			'title': observation.title,
			'status': observation.status,
			'type': observation.type,
			'settings': observation.settings
		};

		let observable = this.http.put(url, data, {withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )


		return observable;
	}


	removeObservation(id : string) : Observable<any> {
		let headers = new HttpHeaders();

		let url = "http://localhost:8082/api/observation/"+id;

		let observable = this.http.delete(url, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error)),
      share()
    )


		observable.subscribe(() => this.observationsChanged.next(id));

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
