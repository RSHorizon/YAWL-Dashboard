import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { YawlResourcesConfigService } from '../yawl-resources-config.service';

import { Position } from '../entities/position.entity';

import { AbstractResourceService } from './abstract-resource.service';



@Injectable()
export class PositionService extends AbstractResourceService<Position> {

	constructor(private _http: HttpClient,
				private _yawlResourcesConfigService : YawlResourcesConfigService) {
		super(_http, _yawlResourcesConfigService);
    this.resourceUrlPath = "position";
    this.getAllAttribute = "positions";
	}

}
