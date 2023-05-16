/**
 * @author Robin Steinwarz
 */
import {Role} from "../entities/role.entity";
import {Capability} from "../entities/capability.entity";
import {Position} from "../entities/position.entity";

export interface TaskStatistic {
  taskid: string;
  decompositionOrder: string;
  avgQueueTime: number;
  avgCompletionTime: number;
  avgTimeToReach: number;
  avgOccurrencesPerWeek: number[];
  participants: Map<String, Set<String>>;
  demandedRoles: Set<Role>;
  demandedCapabilities: Set<Capability>;
  demandedPosition: Set<Position>;
  associatedRoles: Map<String, number>;
  associatedCapabilities: Map<String, number>;
  associatedPositions: Map<String, number>;
  automated: boolean;
  autoOffer: boolean;
  autoAllocate: boolean;
  autoStart: boolean;
  costResourceHour: number;
  maxQueueAge: number;
  maxTaskAge: number;
}
