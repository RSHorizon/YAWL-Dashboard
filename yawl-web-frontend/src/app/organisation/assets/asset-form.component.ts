import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Asset } from '../../yawl/resources/entities/asset.entity';



@Component({
    selector: 'asset-form',
    templateUrl: 'asset-form.component.html'
})
export class AssetFormComponent {

	@Input("asset")
    // @ts-ignore
	asset : Asset = null;

	@Output("saved")
	saved = new EventEmitter();

	@Output("canceled")
	canceled = new EventEmitter();


	constructor() {
		this.reset();
	}


	reset() {
		this.asset = {
      // @ts-ignore
			id: null,
			name: "",
			description: "",
			notes: "",
      // @ts-ignore
			categoryId: null,
      // @ts-ignore
			subCategoryId: null
		};
	}

	save() {
		this.saved.emit(this.asset);
	}


	cancel() {
		this.canceled.emit();
	}

}
