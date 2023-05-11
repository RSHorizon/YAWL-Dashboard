/**
 * @author Robin Steinwarz
 */
import {SpecificationStatistic} from "./specification-statistic.entity";
import {ExtensionSpecification} from "./extension-specification.entity";
import {Specification} from "../entities/specification.entity";
import {Participant} from "../entities/participant.entity";

export interface SpecificationDataContainer {
  specificationStatistic: SpecificationStatistic;
  extensionSpecification: ExtensionSpecification;
  specificationInformation: Specification;
  participants: Participant[];
}
