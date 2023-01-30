import {Participant} from "../entities/participant.entity";

export interface TaskTiming {
  taskid: string;
  caseid: string;
  decompositionOrder: string;
  participantsIds: string[];
  participants: Participant;
  status: string;
  latestEventTimestamp: number;
  automated: boolean;
  cancelled: boolean
  offeredTimestamp: number;
  allocatedTimestamp: number;
  startTimestamp: number;
  endTimestamp: number;

}
