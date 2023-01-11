import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { YawlResourcesConfigService } from '../yawl-resources-config.service';

import { Capability } from '../entities/capability.entity';

import { AbstractResourceService } from './abstract-resource.service';



@Injectable()
export class CapabilityService extends AbstractResourceService<Capability> {

	constructor(private _http: HttpClient,
				private _yawlResourcesConfigService : YawlResourcesConfigService) {
		super( _http, _yawlResourcesConfigService);
		this.resourceUrlPath = "capability";
		this.getAllAttribute = "capabilities";
	}

}
