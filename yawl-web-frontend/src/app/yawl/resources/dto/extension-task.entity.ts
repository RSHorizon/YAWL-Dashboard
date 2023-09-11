/**
 * @author Robin Steinwarz
 */
export interface ExtensionTask {
  specificationId: string;
  specversion: string;
  uri: string;
  taskid: string;
  costResourceHour: number;
  maxTaskAge: number;
  maxQueueAge: number;
}
