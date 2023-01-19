import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Participant } from '../entities/participant.entity';
import {catchError, map} from "rxjs/operators";

import { env } from '../../../../environments/environment';

@Injectable()
export class ParticipantService {

	constructor(private http: HttpClient) {
	}


	findParticipants() : Observable<Participant[]> {
		let headers = new HttpHeaders();
		headers.append("Accept", "application/json");

		let url = env.apiUrl + "users";

		return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => res.users),
      catchError((error) => this.handleError(error))
    )

	}


	private handleError(error: any) : Observable<Participant[]> {
		let errMsg = (error.message)
						? error.message
						: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		throw new Error(errMsg);
	}

}
