import {TaskTiming} from "./task-timing.entity";
/**
 * @author Robin Steinwarz
 */
export interface CaseStatistic {
  taskTimingDTOS: TaskTiming;
  caseid : string;
  cancelled : boolean;
  start : number;
  end : number;
  age : number;
  queuedWorkitemsCount : number;
  runningWorkitemsCount: number;
}
