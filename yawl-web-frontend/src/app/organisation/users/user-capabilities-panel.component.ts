import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { ModalService }			from '../../util/modal/modal.service';

import { YawlResourcesDialogsModule }	from '../../yawl/resources/yawl-resources-dialogs.module';
import { CapabilitySelectDialogComponent }	from '../../yawl/resources/dialogs/capability-select-dialog.component';

import { UserCapabilityMappingService } from '../../yawl/resources/services/user-capability-mapping.service';
import { Capability } from '../../yawl/resources/entities/capability.entity';
import { User } from '../../yawl/resources/entities/user.entity';


@Component({
    selector: 'user-capabilities-panel',
    templateUrl: 'user-capabilities-panel.component.html'
})
export class UserCapabilitiesPanelComponent {

  @Input("user")
  user : User | null = null;

	@Output()
	capabilityAdded = new EventEmitter();

	@Output()
	capabilityRemoved = new EventEmitter();

	public capabilities : Capability[] = [];
  public selectedCapability : Capability | null = null;

	private isLoading = false;


	constructor(
		private modalService : ModalService,
		private notifierService : NotifierService,
		private userCapabilityMappingService : UserCapabilityMappingService) {
	}


	ngOnChanges() {
		this.loadUserCapabilities();
	}


	private loadUserCapabilities() {
		this.isLoading = true;
    // @ts-ignore
		this.selectedCapability = null;

		this.userCapabilityMappingService.getCapabilitiesByUser(this.user!.id!).subscribe((loadedItems) => {
			this.capabilities = loadedItems;
		},
		() => {
			this.notifierService.notify("error", "Could not load capabilities!");
		},
		() => {
			this.isLoading = false;
		});

	}


	intendAddCapability() {
		let ignore = this.capabilities.map((t) => t.id);
		let modal = this.modalService.create(YawlResourcesDialogsModule, CapabilitySelectDialogComponent, {
				'ignore': ignore,
				'onSelected': (capability: Capability) => this.addCapability(capability)
			});
		modal.subscribe((ref) => {});
	}


	addCapability(capability : Capability) {
		this.userCapabilityMappingService.addUserCapabilityLink(this.user!.id!, capability.id).subscribe(() => {
			this.loadUserCapabilities();
			this.capabilityAdded.emit(capability);
		},
		(error) => {
			this.notifierService.notify("error", "Could not add capability! " + error);
		},
		() => {
		});
	}


	removeSelected() {
		let capability = this.selectedCapability;
		if(!capability) {
			return;
		}

		this.userCapabilityMappingService.deleteUserCapabilityLink(this.user!.id!, capability.id).subscribe(() => {
			this.loadUserCapabilities();
			this.capabilityRemoved.emit(capability);
		},
		(error) => {
			this.notifierService.notify("error", "Could not remove capability! " + error);
		},
		() => {
		});
	}

}
