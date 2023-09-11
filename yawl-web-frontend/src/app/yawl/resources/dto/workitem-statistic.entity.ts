/**
 * @author Robin Steinwarz
 */

export interface WorkItem {
  taskid: string;
  name: string;
  caseid: string;
  order: string;
  automated: boolean;
  cancelled: boolean
  resources: Map<String, Set<String>>;
  resourceIds: string[];
  events: Event[];
  status: string;
  latestEventTimestamp: number;
  offeredTimestamp: number;
  allocatedTimestamp: number;
  startTimestamp: number;
  endTimestamp: number;
  created: number;
  queueTime: number;
  completionTime: number;
  resourceTime: number;
  leadTime: number;
}
