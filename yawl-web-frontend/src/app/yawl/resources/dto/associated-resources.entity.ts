import {Resource} from "../entities/resource.entity";

/**
 * @author Robin Steinwarz
 */
export interface AssociatedResources {
  association: string;
  resources: Set<Resource>;
}
