/**
 * @author Philipp R. Thomas
 */
export interface Role {

	id : string;
	name : string;
	description : string;
	notes? : string;
	belongsTo? : string;

}
