import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Position } from '../entities/position.entity';

import { AbstractResourceService } from './abstract-resource.service';



@Injectable()
export class PositionService extends AbstractResourceService<Position> {

	constructor(private _http: HttpClient) {
		super(_http);
    this.resourceUrlPath = "position";
    this.getAllAttribute = "positions";
	}

}
