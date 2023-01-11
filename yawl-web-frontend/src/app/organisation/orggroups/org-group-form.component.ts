import { Component, Input, Output, EventEmitter } from '@angular/core';

import { OrgGroup } from '../../yawl/resources/entities/org-group.entity';



@Component({
    selector: 'org-group-form',
    templateUrl: 'org-group-form.component.html'
})
export class OrgGroupFormComponent {


  @Input("org-group")
	orgGroup : OrgGroup | undefined;

	@Output("saved")
	saved = new EventEmitter();

	@Output("canceled")
	canceled = new EventEmitter();

	ignoredOrgGroups : string[] = [];


	constructor() {
		this.reset();
	}


	ngOnChanges() {
		if(this.orgGroup && this.orgGroup.id) {
			this.ignoredOrgGroups = [this.orgGroup.id];
		}
	}


	reset() {
		this.orgGroup = {
      // @ts-ignore
			id: null,
			name: "",
			type: "Group",
			description: "",
			notes: "",
      // @ts-ignore
			belongsTo: null
		};
	}

	save() {
		this.saved.emit(this.orgGroup);
	}


	cancel() {
		this.canceled.emit();
	}

}
