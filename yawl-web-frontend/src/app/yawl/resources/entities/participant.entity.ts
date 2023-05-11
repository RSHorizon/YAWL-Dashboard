/**
 * @author Philipp R. Thomas
 */
import {Role} from "./role.entity";
import {Capability} from "./capability.entity";
import {Position} from "./position.entity";

export interface Participant {
	id : string;
	username : string;
	firstname : string;
	lastname : string;
  notes: string;
  description: string;
  admin: boolean;
  roles: Role[];
  capabilities: Capability[];
  positions: Position[];

}
