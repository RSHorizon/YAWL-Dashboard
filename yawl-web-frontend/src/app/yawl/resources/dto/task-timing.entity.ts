/**
 * @author Robin Steinwarz
 */

export interface TaskTiming {
  taskid: string;
  name: string;
  caseid: string;
  decompositionOrder: string;
  participantsIds: string[];
  participants: Map<String, Set<String>>;
  status: string;
  latestEventTimestamp: number;
  automated: boolean;
  cancelled: boolean
  offeredTimestamp: number;
  allocatedTimestamp: number;
  startTimestamp: number;
  endTimestamp: number;
  resourceTime: number;
  age: number;
  queueTime: number;
  completionTime: number;
  created: number;
}
