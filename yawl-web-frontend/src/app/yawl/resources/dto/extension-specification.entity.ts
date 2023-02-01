/**
 * @author Robin Steinwarz
 */
export interface ExtensionSpecification {
  specificationId : string;
  specversion: string;
  uri: string;
  core : string;
  specificationTimeLimit : string;
  costResourceHour : string;
  maxTaskAge : string;
  maxQueueAge : string;
}
