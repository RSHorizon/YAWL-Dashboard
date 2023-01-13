
import { Specification } from './specification.entity';

export interface Case {

	id : string;
	specification : Specification;
  events: any|undefined;
  start: number|undefined;
  end: number|undefined;

}
