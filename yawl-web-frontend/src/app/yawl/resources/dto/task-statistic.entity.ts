/**
 * @author Robin Steinwarz
 */
import {Participant} from "../entities/participant.entity";

export interface TaskStatistic {
  taskid : string;
  decompositionOrder : string;
  avgQueueTime : number;
  avgCompletionTime : number;
  avgTimeToReach : number;
  avgOccurrencesPerWeek : number[];
  participants: Participant[];

  costResourceHour?: number;
  maxQueueAge?: number;
  maxTaskAge?: number;
}
