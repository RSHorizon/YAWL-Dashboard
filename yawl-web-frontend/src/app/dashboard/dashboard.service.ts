import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable, share, Subject} from 'rxjs';

import {DashboardConfigService} from './dashboard-config.service';
import {catchError, map} from "rxjs/operators";


@Injectable()
export class DashboardService {

  public dashboardChanged = new Subject();


  constructor(private http: HttpClient,
              private dashboardConfigService: DashboardConfigService) {
  }


  getDashboardsOfUser(): Observable<any> {
    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard";

    return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error: any) => this.handleError(error))
    )
  }


  getDashboardById(id: string): Observable<any> {
    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/" + id;

    return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error: any) => this.handleError(error))
    )
  }


  addDashboard(title: string): Observable<any> {
    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard";

    let data = {title};

    let observable = this.http.post<HttpResponse<any>>(url, data, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error: any) => this.handleError(error)),
      share()
    )

    observable.subscribe((result: { id: any; }) => this.dashboardChanged.next(result.id));

    return observable;
  }


  renameDashboard(id: string, newTitle: string): Observable<any> {
    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/" + id;

    let data = {
      title: newTitle
    };

    let observable = this.http.put(url, data, {withCredentials: true}).pipe(
      catchError((error: any) => this.handleError(error)),
      share()
    )

    observable.subscribe(() => this.dashboardChanged.next(id));

    return observable;
  }


  changeOrderNo(id: string, orderNo: number): Observable<any> {
    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/" + id;

    let data = {
      orderNo
    };

    let observable = this.http.put(url, data, {withCredentials: true}).pipe(
      catchError((error: any) => this.handleError(error)),
      share()
    )

    observable.subscribe(() => this.dashboardChanged.next(id));

    return observable;
  }


  removeDashboard(id: string): Observable<any> {
    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/" + id;

    let observable = this.http.delete(url, {withCredentials: true}).pipe(
      catchError((error: any) => this.handleError(error)),
      share()
    )

    observable.subscribe(() => this.dashboardChanged.next(id));

    return observable;
  }


  loadLayoutSettings(id: string): Observable<any> {
    if (!id) {
      throw new Error("No ID received in layout settings.");
    }

    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/" + id + "/layout-settings";

    return this.http.get<HttpResponse<any>>(url, {withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      catchError((error: any) => this.handleError(error))
    )
  }


  saveLayoutSettings(id: string, settings: any): Observable<any> {
    if (!id) {
      throw new Error("No ID received in layout settings.");
    }

    let url = this.dashboardConfigService.getDashboardServiceUrl() + "dashboard/" + id + "/layout-settings";

    return this.http.put(url, settings, {withCredentials: true}).pipe(
      catchError((error: any) => this.handleError(error))
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
