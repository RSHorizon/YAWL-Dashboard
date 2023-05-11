import {NgModule} from '@angular/core';

import {SpecificationService} from './services/specification.service';
import {WorkItemService} from './services/work-item.service';


/**
 * This is the module that should be importet
 * by the root app component as it provides resource services.
 *
 * @author Philipp Thomas
 */
@NgModule({
  providers: [
    SpecificationService,
    WorkItemService
  ]
})
export class YawlResourcesModule {
}

