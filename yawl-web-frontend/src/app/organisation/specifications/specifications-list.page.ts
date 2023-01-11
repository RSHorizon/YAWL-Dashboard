import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { SpecificationService } from '../../yawl/resources/services/specification.service';
import { CaseService }			from '../../yawl/resources/services/case.service';
import {Specification} from "../../yawl/resources/entities/specification.entity";


@Component({
    templateUrl: 'specifications-list.page.html'
})
export class SpecificationsListPage {

	public specifications: Specification[] = [];

	public isLoading = false;


	constructor(
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private specificationService : SpecificationService,
		private caseService : CaseService) {
	}

	ngOnInit() {
		this.reload();
	}


	reload() {
		this.isLoading = true;

		this.specificationService.findAll().subscribe((loadedSpecifications) => {
			// @ts-ignore
        this.specifications = loadedSpecifications.sort((n1,n2) => this.sortSpecifications(n1,n2));
		},
		() => {
			this.notifierService.notify("error", "Could not load specifications!");
		},
		() => {
			this.isLoading = false;
		});

	}

	sortSpecifications(n1: Specification, n2: Specification) {
		if (n1.uri > n2.uri) {
			return 1;
		}

		if (n1.uri < n2.uri) {
			return -1;
		}

		if (n1.version > n2.version) {
			return 1;
		}

		if (n1.version < n2.version) {
			return -1;
		}

		return 0;
	}


	openFormForNew() {
		let url = '/specification/upload';
		this.router.navigate([url]);
	}


	gotoDetailsPage(item: { id: any; version: any; }) {
		this.router.navigate(['specification', item.id, item.version]);
	}


	listCases(item: { id: string; version: string; }) {
		let url = '/cases/'+item.id+"/"+item.version;
		this.router.navigate([url]);
	}


	startCase(item: { id: string; version: string; }) {
		this.caseService.startCase(item.id, item.version).subscribe(() => {
			this.notifierService.notify("success", "A case of this specification successfully stated!");
		},
		(error) => {
			this.notifierService.notify("error", "Could not start case" + error);
		},
		() => {
		});
	}


	intendRemove(item: Specification) {
		let title = "Delete specification";
		let message = "Are you sure you want to delete the specification \""+item.id+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.removeSpecification(item);
		});
	}


	removeSpecification(specification: Specification) {
		this.specificationService.remove(specification.id, specification.version).subscribe(() => {
			this.notifierService.notify("success", "Specification successfully deleted!");
			this.reload();
		},
		(error) => {
			this.notifierService.notify("error", "Could not delete specification " + error);
		},
		() => {
		});
	}

}
