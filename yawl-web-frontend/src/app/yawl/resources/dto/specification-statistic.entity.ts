/**
 * @author Robin Steinwarz
 */
import {CaseStatistic} from "./case-statistic.entity";
import {TaskStatistic} from "./task-statistic.entity";
import {AssociatedResources} from "./associated-resources.entity";


export interface SpecificationStatistic {
  id: string;
  version: string;
  uri: string;
  speckey: string;
  caseStatisticDTOS: CaseStatistic[];
  taskStatisticDTOS: TaskStatistic[];
  caseOccurrencesPerDayOfWeek: number[];
  eventAssocResources: AssociatedResources[];
  roleAssocResources: AssociatedResources[];
  successfulCases: number;
  unsuccessfulCases: number;
  automationPercentage: number;
  avgCaseQueueTime: number;
  minCaseQueueTime: number;
  maxCaseQueueTime: number;
  avgCaseCompletionTime: number;
  minCaseCompletionTime: number;
  maxCaseCompletionTime: number;
  avgCaseResourceTime: number;
  minCaseResourceTime: number;
  maxCaseResourceTime: number;
  avgCaseLeadTime: number;
  minCaseLeadTime: number;
  maxCaseLeadTime: number;
  avgWeeklyResourceTime: number;
  minWeeklyResourceTime: number;
  maxWeeklyResourceTime: number;
  color?: string
}
