import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {OrgGroup} from '../entities/org-group.entity';

import {AbstractResourceService} from './abstract-resource.service';

/**
 * @author Philipp R. Thomas
 */


@Injectable()
// @ts-ignore
export class OrgGroupService extends AbstractResourceService<OrgGroup> {

  constructor(private override http: HttpClient) {
    super(http);
    this.resourceUrlPath = "group";
    this.getAllAttribute = "orgGroups";
  }

}
