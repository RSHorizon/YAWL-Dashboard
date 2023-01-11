import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';


import {YawlResourcesConfigService} from '../yawl-resources-config.service';

import {AssetCategory} from '../entities/asset-category.entity';
import {catchError, map} from "rxjs/operators";


@Injectable()
export class AssetCategoryService {

  constructor(private http: HttpClient,
              private yawlResourcesConfigService: YawlResourcesConfigService) {
  }


  findAll(): Observable<AssetCategory[]> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assetcategories";

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => res.body.json()),
      map((res) => <AssetCategory[]>res.assetCategories),
      catchError((error) => this.handleError(error))
    )
  }


  findById(id: string): Observable<AssetCategory> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assetcategory/" + encodeURIComponent(id);

    return this.http.get<HttpResponse<any>>(url, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => <AssetCategory>res.body.json()),
      catchError((error) => this.handleError(error))
    )
  }


  save(assetCategory: AssetCategory): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assetcategory";

    return this.http.post<HttpResponse<any>>(url, assetCategory, {headers, withCredentials: true}).pipe(
      map((res: HttpResponse<any>) => <AssetCategory>res.body.json()),
      catchError((error) => this.handleError(error))
    )
  }


  update(assetCategory: AssetCategory): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assetcategory/" + encodeURIComponent(assetCategory.id);

    return this.http.put(url, assetCategory, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
  }


  remove(assetCategoryId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assetcategory/" + encodeURIComponent(assetCategoryId);

    return this.http.delete(url, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )
  }


  saveSubCategory(assetCategoryId: string, subCategoryName: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assetcategory/" + encodeURIComponent(assetCategoryId) + "/subcategory";

    let data = {
      'name': subCategoryName
    };

    return this.http.post<HttpResponse<any>>(url, data, {headers, withCredentials: true}).pipe(
      catchError((error) => this.handleError(error))
    )

  }

  removeSubCategory(assetCategoryId: string, assetSubCategoryId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");

    let url = this.yawlResourcesConfigService.getResourceServiceUrl() + "assetcategory/" + encodeURIComponent(assetCategoryId) + "/subcategory/" + assetSubCategoryId;

    return this.http.delete(url, {headers, withCredentials: true}).pipe(
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
