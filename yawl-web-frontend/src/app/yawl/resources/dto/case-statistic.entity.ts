import {WorkItem} from "./workitem-statistic.entity";

/**
 * @author Robin Steinwarz
 */
export interface CaseStatistic {
  caseid: string;
  cancelled: boolean;
  workitemDTOS: WorkItem[];
  queue: WorkItem[];
  start: number;
  end: number;
  queueTime: number;
  completionTime: number;
  resourceTime: number;
  leadTime: number;
  queuedWorkitemsCount: number;
  runningWorkitemsCount: number;
  color?: string
}
