import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

/**
 * The service for retrieving configuration.
 *
 * @todo Return Observables.
 *
 * @author Philipp Thomas
 */
@Injectable()
export class ConfigService {

	private url = 'config.json';

	private configuration : any = null;


	constructor(private http: HttpClient) {
	}


	public get(key : string) : any {
		return this.configuration[key] || { };
	}


	public load() {
		return new Promise((resolve, reject) => {
			this.configuration = {

			};
			resolve(true);
//            this.http.get<HttpResponse<any>>(this.url)
//					.map(res => res.body.json())
//					.catch((error: any):any => {
//						reject(false);
//						return Observable.throw('Error while loading configuration');
//					})
//					.subscribe((callResult) => {
//						this.configuration = callResult;
//						resolve(true);
//					});

        });
	}
}
