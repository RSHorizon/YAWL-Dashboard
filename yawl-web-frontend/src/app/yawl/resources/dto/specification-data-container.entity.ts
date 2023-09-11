/**
 * @author Robin Steinwarz
 */
import {SpecificationStatistic} from "./specification-statistic.entity";
import {ExtensionSpecification} from "./extension-specification.entity";
import {Specification} from "../entities/specification.entity";
import {Resource} from "../entities/resource.entity";

export interface SpecificationDataContainer {
  specificationStatistic: SpecificationStatistic;
  extensionSpecification: ExtensionSpecification;
  specificationInformation: Specification;
  resources: Resource[];
}
