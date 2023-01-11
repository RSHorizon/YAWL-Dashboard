import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { AssetCategoryService } from '../../yawl/resources/services/asset-category.service';
import { AssetCategory } from '../../yawl/resources/entities/asset-category.entity';



@Component({
    templateUrl: 'asset-category-add.page.html'
})
export class AssetCategoryAddPage {

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private notifierService : NotifierService,
		private assetCategoryService : AssetCategoryService) {
	}


	save(assetCategory : AssetCategory) {
		this.assetCategoryService.save(assetCategory).subscribe((result) => {
			this.cancel();
        this.notifierService.notify("success", "The new asset category was added.");
		},
		(error) => {
      this.notifierService.notify("error", "Could not add asset category: "+error);
		})
	}


	cancel() {
		let url = '/assets';
		this.router.navigate([url]);
	}

}
