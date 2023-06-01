/**
 * @author Robin Steinwarz
 */
import {Role} from "../entities/role.entity";
import {Capability} from "../entities/capability.entity";
import {Position} from "../entities/position.entity";

export interface TaskStatistic {
  taskid: string;
  name: string;
  decompositionOrder: string;
  minimalOrder: string
  avgQueueTime: number;
  avgCompletionTime: number;
  avgTimeToReach: number;
  avgOccurrencesPerWeek: number[];
  participants: Map<String, Set<String>>;
  demandedRoles: Set<Role>;
  demandedCapabilities: Set<Capability>;
  demandedPositions: Set<Position>;
  associatedRoles: Map<String, number>;
  associatedCapabilities: Map<String, number>;
  associatedPositions: Map<String, number>;
  totalTimeSpentWithRoles: Map<String, number>;
  totalTimeSpentWithCapabilities: Map<String, number>;
  totalTimeSpentWithPositions: Map<String, number>;
  automated: boolean;
  autoOffer: boolean;
  autoAllocate: boolean;
  autoStart: boolean;
  costResourceHour: number;
  maxQueueAge: number;
  maxTaskAge: number;
  color?: string
}

