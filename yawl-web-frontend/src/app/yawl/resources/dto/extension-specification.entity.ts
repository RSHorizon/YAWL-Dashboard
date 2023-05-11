/**
 * @author Robin Steinwarz
 */
export interface ExtensionSpecification {
  specificationId : string;
  specversion: string;
  uri: string;
  core : string;
  specificationTimeLimit : number;
  costResourceHour : number;
  maxTaskAge : number;
  maxQueueAge : number;
}
