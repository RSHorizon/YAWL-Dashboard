import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';

import {YawlResourcesConfigService} from '../yawl-resources-config.service';

import {Asset} from '../entities/asset.entity';
import {catchError, map} from "rxjs/operators";


@Injectable()
export class AssetService {

  constructor(private http: HttpClient,
              private yawlResourcesConfigService: YawlResourcesConfigService) {
  }


  findAll(): Observable<Asset[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assets";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => <Asset[]>res.assets),
      catchError((error) => this.handleError(error))
    )
  }


  findById(id: string): Observable<Asset> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "asset/" + encodeURIComponent(id);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => <Asset>res.body.json()),
      catchError((error) => this.handleError(error))
    )
  }


  save(asset: Asset): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "asset";

    return this.http.post<HttpResponse<any>>(url, asset, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => <Asset>res.body.json()),
      catchError((error) => this.handleError(error))
    )
  }


  update(asset: Asset): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "asset/" + encodeURIComponent(asset.id);

    return this.http.put(url, asset, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
  }


  remove(assetId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "asset/" + encodeURIComponent(assetId);

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
