import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NotifierService} from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { SpecificationService } from '../../yawl/resources/services/specification.service';
import { CaseService }			from '../../yawl/resources/services/case.service';
import {Capability} from "../../yawl/resources/entities/capability.entity";
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {Case} from "../../yawl/resources/entities/case.entity";



@Component({
    templateUrl: 'case-list.page.html',
    styleUrls: ['case-list.page.scss']
})
export class CaseListPage {

	private cases : Case[] = [];
	public filteredCases : Case[] = [];

	private isLoading = false;

  public specifications : Specification[] | undefined;
  public selectedSpecification : Specification | undefined;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private specificationService : SpecificationService,
		private caseService : CaseService) {
	}


    ngOnInit() {
		this.specificationService.findAll().subscribe((specifications) => {
			this.specifications = specifications.sort((n1,n2) => this.sortSpecifications(n1,n2));
			this.loadCases();

			this.route.params.subscribe(params => {
				if(params['id'] && params['version']) {
					this.selectedSpecification = this.specifications!.find((element: { id: any; version: any; }) => {
						return element.id == params['id']
								&& element.version == params['version'];
					});
				}
			});
		},
		() => {
			this.notifierService.notify("error", "Could not load specifications!");
		},
		() => {
		});

    }


	loadCases() {
		this.isLoading = true;

		this.caseService.findAll().subscribe((cases) => {
			// @ts-ignore
        this.cases = cases.sort((n1,n2) => Number(n2.id) - Number(n1.id));
			this.filter();
		},
		() => {
			this.notifierService.notify("error", "Could not load cases!");
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


	onFilterChange(item: Specification) {
		this.selectedSpecification = item;
		this.filter();
	}


	filter() {
		this.filteredCases = this.cases;
		if(this.selectedSpecification) {
			this.filteredCases = this.filteredCases.filter((element) => {
				// @ts-ignore
        return element.specification.id == this.selectedSpecification.id
          // @ts-ignore
						&& element.specification.version == this.selectedSpecification.version;
			});
		}
	}


	listCases(item: { id: string; version: string; }) {
		let url = '/cases/'+item.id+"/"+item.version;
		this.router.navigate([url]);
	}


	intendCancel(item: { id: string; }) {
		let title = "Cancel case";
		let message = "Are you sure you want to cancel the case with id \""+item.id+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.cancelCase(item);
		});
	}


	cancelCase(theCase: { id: any; }) {
		this.caseService.cancelCase(theCase.id).subscribe(() => {
			this.notifierService.notify("success", "Case successfully canceled!");
			this.loadCases();
		},
		(error) => {
			this.notifierService.notify("error", "Could not cancel case " + error);
		},
		() => {
		});
	}

}
