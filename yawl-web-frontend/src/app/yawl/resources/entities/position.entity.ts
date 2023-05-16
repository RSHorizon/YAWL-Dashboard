/**
 * @author Philipp R. Thomas
 */
export interface Position {

	id : string;
	title : string;
	description : string;
	notes? : string;
	belongsToOrgGroup? : string;
	reportsTo? : string;
}
