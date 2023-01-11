import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DialogsService } from '../../util/dialogs/dialogs.service'

import { SpecificationService } from '../../yawl/resources/services/specification.service';
import { Specification }			from '../../yawl/resources/entities/specification.entity';

import { WorkItemService }	from '../../yawl/resources/services/work-item.service';
import { WorkItem }			from '../../yawl/resources/entities/work-item.entity';

import { CaseService }	from '../../yawl/resources/services/case.service';
import { Case }			from '../../yawl/resources/entities/case.entity';



@Component({
    templateUrl: 'specification-show.page.html'
})
export class SpecificationShowPage {

  private specificationId : string| undefined;
	private specificationVersion : string| undefined;
	public specification : Specification| null = null;

	public workItems : WorkItem[] = [];
	public cases : Case[] = [];

	private isLoading = true;

	private mode = "cases";


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private notifierService : NotifierService,
		private dialogsService : DialogsService,
		private caseService : CaseService,
		private specificationService : SpecificationService,
		private workItemService : WorkItemService) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(!params['id'] || !params['version']) {
				this.notifierService.notify("error", "No valid id!");
				this.gotoList();
				return;
			}

			this.specificationId = params['id'];
			this.specificationVersion = params['version'];
			this.loadData();
		});

		this.route.queryParams.subscribe(queryParams => {
			if(queryParams['mode']) {
				this.mode = queryParams['mode'];
			}
		});
    }


	private loadData() {
		this.isLoading = true;
		this.specificationService.findById(this.specificationId!, this.specificationVersion!, "-").subscribe((result) => {
			this.specification = result;
			this.isLoading = false;

			this.loadWorkItems();
			this.loadCases();
		},
		(error) => {
			this.notifierService.notify("error", "Could not load specification " + error);
			this.gotoList();
		});
	}


	private loadCases() {
		this.isLoading = true;

		this.caseService.findAll().subscribe((cases) => {
			this.cases = cases.filter((theCase) => theCase.specification.id == this.specification!.id
															&&  theCase.specification.version == this.specification!.version);
		},
		(error) => {
			this.notifierService.notify("error","Could not load cases " + error);
		},
		() => {
			this.isLoading = false;
		});

	}


	private loadWorkItems() {
		this.isLoading = true;

		this.workItemService.findAll().subscribe((workItems) => {
			this.workItems = workItems.filter((workItem) => workItem.specification.id == this.specification!.id
															&&  workItem.specification.version == this.specification!.version);
		},
		(error) => {
			this.notifierService.notify("error", "Could not load work items " + error);
		},
		() => {
			this.isLoading = false;
		});

	}


	setMode(newMode: any, event: { preventDefault: () => void; }) {
		this.gotoSpecification(this.specification!, newMode);
		event.preventDefault();
	}


	gotoSpecification(item: Specification, mode: any) {
		let queryParams = {
			'mode': mode
		};
		this.router.navigate(['specification', item.id, item.version], {queryParams});
	}


	gotoList() {
		this.router.navigate(['specifications']);
	}


	intendCancel(item: { id: any; }) {
		let title = "Cancel case";
		let message = "Are you sure you want to cancel the case with id \""+item.id+"\"?";
		this.dialogsService.openConfirmationDialog(title, message, () => {
			this.cancelCase(item);
		});
	}


	cancelCase(theCase: { id: string; }) {
		this.caseService.cancelCase(theCase.id).subscribe(() => {
			this.notifierService.notify("success", "Case successfully canceled!");
			this.loadCases();
		},
		(error) => {
			this.notifierService.notify("error", "Could not cancel case" + error);
		},
		() => {
		});
	}

}
