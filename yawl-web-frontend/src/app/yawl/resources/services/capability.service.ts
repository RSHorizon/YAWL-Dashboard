import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Capability} from '../entities/capability.entity';

import {AbstractResourceService} from './abstract-resource.service';

/**
 * @author Philipp R. Thomas
 */

@Injectable()
export class CapabilityService extends AbstractResourceService<Capability> {

  constructor(private _http: HttpClient) {
    super(_http);
    this.resourceUrlPath = "capability";
    this.getAllAttribute = "capabilities";
  }

}
