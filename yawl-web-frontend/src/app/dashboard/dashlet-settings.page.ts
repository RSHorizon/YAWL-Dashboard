import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DashletTypeService } from './dashlet-type.service';
import { DashletService } from './dashlet.service';

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
    templateUrl: 'dashlet-settings.page.html'
})
export class DashletSettingsPage {
  faArrowLeft=faArrowLeft

	@ViewChild('child',  {read: ViewContainerRef})
  // @ts-ignore
	private child : ViewContainerRef;

	// @ts-ignore
  dashletId : string;

	isLoading = false;

	settings = {};


    constructor(
		private dashletTypeService : DashletTypeService,
		private dashletService: DashletService,
		private notifierService : NotifierService,
        private componentFactoryResolver: ComponentFactoryResolver,
		private route: ActivatedRoute,
		private router: Router) {
    }


    ngOnInit() {
		this.route.params.subscribe(params => {
			this.dashletId = params['id'];
			this.loadDashlet(this.dashletId);
		});
    }


	loadDashlet(dashletId : string) {
		this.dashletService.getDashletById(dashletId).subscribe((result) => {
				this.loadSettings(() => {
					this.loadPanel(result['type']);
				});
			},
			(error) => {
				this.notifierService.notify("error", "The dashlet could not be loaded!");
			},
			() => {
				this.isLoading = false;
			});
	}


	loadPanel(dashletType : string) {
		let componentType = this.dashletTypeService.getDashletSettingsComponent(dashletType);
        let component = this.componentFactoryResolver.resolveComponentFactory(componentType);
        let compRef : ComponentRef<any> = this.child.createComponent(component);
        compRef.instance.dashletId = this.dashletId;
        compRef.instance.settings = this.settings;
        if(compRef.instance.onPanelCreated) {
            compRef.instance.onPanelCreated();
        }
	}


	loadSettings(callback : any) {
		if(!this.dashletId) {
			return;
		}

		this.isLoading = true;
		this.dashletService.loadSettings(this.dashletId)
					.subscribe(
						(res : any) => {
							this.settings = res;
							callback && callback();
						},
						(error) => {
							this.notifierService.notify("error", error);
						},
						() => {
							this.isLoading = false;
						});
	}


	saveSettings() {
		if(!this.dashletId) {
			return;
		}

		this.isLoading = true;
		this.dashletService.saveSettings(this.dashletId, this.settings)
					.subscribe(
						(res : any) => {
							this.notifierService.notify("success", "The dashlet settings were saved!");
							this.cancel();
						},
						(error) => {
							this.notifierService.notify("error", "The dashlet settings could not be saved!");
						},
						() => {
							this.isLoading = false;
						});
	}


	cancel() {
		let url = 'dashboard';
		this.router.navigate([url]);
	}
}
