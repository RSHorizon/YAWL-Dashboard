import { Injectable } from '@angular/core';

import { ConfigService } from '../../common/config/config.service';


/**
 * The configuration service for resource urls.
 *
 * @todo Get urls from configuration service.
 * @todo Return Observables.
 *
 * @author Philipp Thomas
 */
@Injectable()
export class YawlResourcesConfigService {

	constructor(private configService: ConfigService) {
	}


	public getResourceServiceUrl() : any {
		return "http://localhost:8082/api/";
	}

}
