import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';


import { Observer } from './observer';
import { ObserverRegistry } from './observer-registry.service';
import { ObservationService } from './observation.service';



@Component({
    selector: 'observation-create-page',
    templateUrl: 'observation-create.page.html'
})
export class ObservationCreatePage {

	@ViewChild('settingsChild',  {read: ViewContainerRef})
	private settingsChild : ViewContainerRef | undefined;


	mode = 'typeSelection';

	selectedType : any;
	title : string | undefined;
	settings = {};

	observers : Observer[] | undefined;

	isLoading = false;


	constructor(
		private observationService : ObservationService,
		private observerRegistry : ObserverRegistry,
        private componentFactoryResolver: ComponentFactoryResolver,
		private notifierService : NotifierService,
		private router: Router) {
	}


    ngOnInit() {
		this.observerRegistry.getAllObservers().subscribe((result) => {
			this.observers = result;
		});
    }


	loadSettingsPanel(observer : Observer) {
		let componentType = observer.settingsComponent;
        let component = this.componentFactoryResolver.resolveComponentFactory(componentType);
        let compRef : ComponentRef<any> = this.settingsChild!.createComponent(component);
        compRef.instance.settings = this.settings;
        if(compRef.instance.onPanelCreated) {
            compRef.instance.onPanelCreated();
        }
	}


	onSelectionComplete() {
		this.settings = JSON.parse(JSON.stringify(this.selectedType.defaultSettings));
		this.loadSettingsPanel(this.selectedType);
		this.mode = 'settings';
	}


	onSettingsComplete() {
		this.isLoading = true;

		let title = this.title;
		if(!title) {
			title = this.selectedType.displayName;
		}

		this.observationService.addObservation(title!, this.selectedType.symbolicName, this.settings).subscribe((result) => {
			this.notifierService.notify("success", "You successfully created a new observation");
			let url = 'observations';
			this.router.navigate([url]);
		},
		(error) => {
			this.notifierService.notify("error", error);
			this.isLoading = false;
		},
		() => {
			this.isLoading = false;
		});

	}


	navigateToObservationListPage() {
		let url = 'observations';
		this.router.navigate([url]);
	}

}
