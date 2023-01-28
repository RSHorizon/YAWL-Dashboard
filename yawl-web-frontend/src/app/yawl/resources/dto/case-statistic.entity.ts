
export interface CaseStatistic {
  caseid : string;
  cancelled : boolean;
  start : number;
  end : number;
  age : number;
  queuedWorkitemsCount : number;
  runningWorkitemsCount: number;
}
