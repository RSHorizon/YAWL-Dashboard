import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {SpecificationStatistic} from "../dto/specification-statistic.entity";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {env} from "../../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {NotifierService} from "angular-notifier";
import {SpecificationService} from "./specification.service";
import {SpecificationDataContainer} from "../dto/specification-data-container.entity";
import {ExtensionSpecificationService} from "./extension-specification.service";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient,
              private notifierService: NotifierService,
              private specificationService: SpecificationService,
              private extensionSpecificationService: ExtensionSpecificationService) {
  }

  getSpecificationStatistic(id: string, version: string, uri: string): Observable<SpecificationStatistic> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = env.apiUrl + "statistic/specification/"
      + encodeURIComponent(uri)
      + "/" + encodeURIComponent(id)
      + "/" + encodeURIComponent(version);

    return this.http.get<SpecificationStatistic>(url, {headers, withCredentials: true}).pipe(
        tap({ error: (error) => this.handleError(error)}));
  }

  private handleError(error: any): Observable<any> {
    let errMsg = (error.json().message)
      ? error.json().message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    throw new Error(errMsg);
  }
}

