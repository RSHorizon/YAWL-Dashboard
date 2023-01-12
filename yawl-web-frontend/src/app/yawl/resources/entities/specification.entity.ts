
export interface Specification {
	id : string;
	version : string;
  specversion: string;
	uri : string;
	title : string;
	description : string;
	authors : string[];
  activeCasesCount: string;
  core: boolean|undefined;

}
