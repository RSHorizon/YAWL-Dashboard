/**
 * @author Robin Steinwarz
 */
import {CaseStatistic} from "./case-statistic.entity";
import {TaskStatistic} from "./task-statistic.entity";
import {Participant} from "../entities/participant.entity";


export interface SpecificationStatistic {
  id: string;
  version: string;
  uri: string;
  key: string;
  caseStatisticDTOS : CaseStatistic[];
  taskStatisticDTOS : TaskStatistic[];
  participants: Participant[];
  avgCaseCompletionTime : number;
  successfulCases : number;
  unsuccessfulCases : number;
  caseOccurrencesPerDayOfWeek: number[];
  avgResourceTimePerWeekSummed : number;
}
