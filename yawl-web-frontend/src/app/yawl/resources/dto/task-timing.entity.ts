/**
 * @author Robin Steinwarz
 */
import {Participant} from "../entities/participant.entity";
import {AssociatedParticipants} from "./associated-participants.entity";

export interface TaskTiming {
  taskid: string;
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

}
