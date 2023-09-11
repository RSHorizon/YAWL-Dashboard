/**
 * @author Robin Steinwarz
 */
import {Role} from "../entities/role.entity";
import {Capability} from "../entities/capability.entity";
import {Position} from "../entities/position.entity";

export interface TaskStatistic {
  taskid: string;
  name: string;
  order: string;
  minimalOrder: string
  automated: boolean;
  avgOccurrencesPerWeek: number[];
  resources: Map<String, Set<String>>;
  demandedRoles: Set<Role>;
  demandedCapabilities: Set<Capability>;
  demandedPositions: Set<Position>;
  assocRoles: Map<String, number>;
  assocCapabilities: Map<String, number>;
  assocPositions: Map<String, number>;
  assocRoleTime: Map<String, number>;
  assocCapabilityTime: Map<String, number>;
  assocPositionTime: Map<String, number>;
  avgQueueTime: number;
  minQueueTime: number;
  maxQueueTime: number;
  avgCompletionTime: number;
  minCompletionTime: number;
  maxCompletionTime: number;
  avgResourceTime: number;
  minResourceTime: number;
  maxResourceTime: number;
  avgLeadTime: number;
  minLeadTime: number;
  maxLeadTime: number;
  avgInstancesPerCase: number;
  minInstancesPerCase: number;
  maxInstancesPerCase: number;
  avgTimeToReach: number;
  minTimeToReach: number;
  maxTimeToReach: number;
  costResourceHour: number;
  maxQueueAge: number;
  maxTaskAge: number;
  autoOffer: boolean;
  autoAllocate: boolean;
  autoStart: boolean;
  color?: string
}




