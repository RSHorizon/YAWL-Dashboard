import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { AssetService } from '../../yawl/resources/services/asset.service';
import { Asset } from '../../yawl/resources/entities/asset.entity';



@Component({
    templateUrl: 'asset-add.page.html'
})
export class AssetAddPage {

	// @ts-ignore
  private selectedCategoryId: string;
	// @ts-ignore
  private selectedSubCategoryId: number;


	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private notifierService : NotifierService,
		private assetService : AssetService) {

		this.route.queryParams.subscribe(params => {
			this.selectedCategoryId = params['catId'];
            this.selectedSubCategoryId = params['subCatId'];
        });
	}


	save(asset : Asset) {
		asset.categoryId = this.selectedCategoryId;
		asset.subCategoryId = this.selectedSubCategoryId;

		this.assetService.save(asset).subscribe((result) => {
			this.cancel();
			this.notifierService.notify("success", "The new asset was added.");
		},
		(error) => {
      this.notifierService.notify("error", "Could not add asset: "+error);
		})
	}


	cancel() {
		let queryParams = {
			'catId': this.selectedCategoryId,
			'subCatId': this.selectedSubCategoryId
		};
		this.router.navigate(['assets'], {queryParams});
	}

}
