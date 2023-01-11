import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { ModalService }			from '../../util/modal/modal.service';

import { YawlResourcesDialogsModule }	from '../../yawl/resources/yawl-resources-dialogs.module';
import { UserSelectDialogComponent }	from '../../yawl/resources/dialogs/user-select-dialog.component';

import { UserCapabilityMappingService } from '../../yawl/resources/services/user-capability-mapping.service';
import { Capability } from '../../yawl/resources/entities/capability.entity';
import { User } from '../../yawl/resources/entities/user.entity';


@Component({
    selector: 'capability-users-panel',
    templateUrl: 'capability-users-panel.component.html'
})
export class CapabilityUsersPanelComponent {

  @Input("capability")
  capability : Capability| undefined;

	@Output()
	userAdded = new EventEmitter();

	@Output()
	userRemoved = new EventEmitter();

	public users : User[] = [];
  public selectedUser : User | undefined;

	private isLoading = false;


	constructor(
		private modalService : ModalService,
		private notifierService : NotifierService,
		private userCapabilityMappingService : UserCapabilityMappingService) {
	}


	ngOnChanges() {
		this.loadCapabilityUsers();
	}


	private loadCapabilityUsers() {
		this.isLoading = true;
    this.selectedUser = undefined;

		this.userCapabilityMappingService.getUsersByCapability(this.capability!.id).subscribe((result) => {
			this.users = result;
		},
		() => {
      this.notifierService.notify("error", "Could not load users!");
		},
		() => {
			this.isLoading = false;
		});

	}


	intendAdd() {
		let ignore = this.users.map((t) => t.id);
		let modal = this.modalService.create(YawlResourcesDialogsModule, UserSelectDialogComponent, {
				'ignore': ignore,
				'onSelected': (capability: User) => this.addUser(capability)
			});
		modal.subscribe((ref) => {});
	}


	addUser(user : User) {
		this.userCapabilityMappingService.addUserCapabilityLink(user.id!, this.capability!.id).subscribe(() => {
			this.loadCapabilityUsers();
			this.userAdded.emit(user);
		},
		(error) => {
			this.notifierService.notify("error","Could not add user! " + error);
		},
		() => {
		});
	}


	removeSelected() {
		let user = this.selectedUser;
		if(!user) {
			return;
		}

		this.userCapabilityMappingService.deleteUserCapabilityLink(user.id!, this.capability!.id).subscribe(() => {
			this.loadCapabilityUsers();
			this.userRemoved.emit(user);
		},
		(error) => {
			this.notifierService.notify("error","Could not remove user!" + error);
		},
		() => {
		});
	}

}
