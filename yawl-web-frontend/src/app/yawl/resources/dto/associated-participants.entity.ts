import {CaseStatistic} from "./case-statistic.entity";
import {TaskStatistic} from "./task-statistic.entity";
import {Participant} from "../entities/participant.entity";

export interface AssociatedParticipants {
  association: string;
  participants: Set<Participant>;
}
