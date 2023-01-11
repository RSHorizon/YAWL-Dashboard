import {Injectable} from '@angular/core';

import {ConfigService} from '../common/config/config.service';


@Injectable()
export class DashboardConfigService {

	constructor(private configService: ConfigService) {
	}


	public getDashboardServiceUrl() : any {
		return "http://localhost:8082/api/";
	}

}
