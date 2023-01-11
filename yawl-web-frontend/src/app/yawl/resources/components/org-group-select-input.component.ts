import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ModalService }			from '../../../util/modal/modal.service';

import { YawlResourcesDialogsModule }		from '../yawl-resources-dialogs.module';
import { OrgGroupSelectDialogComponent }	from '../dialogs/org-group-select-dialog.component';

import { OrgGroupService }			from '../services/org-group.service';
import { OrgGroup }					from '../entities/org-group.entity';


@Component({
    selector: 'org-group-select',
    templateUrl: 'org-group-select-input.component.html'
})
export class OrgGroupSelectInputComponent {


  @Input("org-group")
	public orgGroup : string | undefined;

	@Input("ignore")
	public ignore : string[] = [];

	@Output()
	orgGroupChanged = new EventEmitter();

  // @ts-ignore
	public displayedOrgGroup : OrgGroup = null;

	public isLoading = false;



    constructor(
		private orgGroupService : OrgGroupService,
		private modalService: ModalService) {
    }


	ngOnInit() {

	}


	ngOnChanges() {
		this.updateDisplay();
	}


	updateDisplay() {
		if(this.orgGroup == null) {
      // @ts-ignore
      this.displayedOrgGroup = null;
			return;
		}

		this.isLoading = true;
		this.orgGroupService.findById(this.orgGroup).subscribe((orgGroup : OrgGroup) =>  {
			this.displayedOrgGroup = orgGroup;
			this.isLoading = false;
		},
		() => {
			console.log("Could not load group!");
		});
	}


	openSelectionDialog() {
		let modal = this.modalService.create(YawlResourcesDialogsModule, OrgGroupSelectDialogComponent, {
				'ignore': this.ignore,
				'onSelected': (orgGroup: any) => this.select(orgGroup),
				'showNoSelectionButton': true
			});
		modal.subscribe((ref) => {});
	}


	select(orgGroup: OrgGroup | null) {
		if(orgGroup == null) {
			this.deselect();
			return;
		}
		this.orgGroupChanged.emit(orgGroup.id);
		this.displayedOrgGroup = orgGroup;
	}


	deselect() {
    // @ts-ignore
		this.displayedOrgGroup = null;
		this.orgGroupChanged.emit(null);
	}

}
