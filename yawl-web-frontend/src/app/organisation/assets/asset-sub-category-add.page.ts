import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { AssetCategoryService } from '../../yawl/resources/services/asset-category.service';



@Component({
    templateUrl: 'asset-sub-category-add.page.html'
})
export class AssetSubCategoryAddPage {

  private selectedCategoryId: string | undefined;
  public name: string | undefined;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private notifierService : NotifierService,
		private assetCategoryService : AssetCategoryService) {

		this.route.queryParams.subscribe(params => {
			this.selectedCategoryId = params['catId'];
        });
	}


	save() {
		this.assetCategoryService.saveSubCategory(this.selectedCategoryId!, this.name!).subscribe((result) => {
			this.cancel();
        this.notifierService.notify("success", "The new asset sub category was added.");
		},
		(error) => {
      this.notifierService.notify("error", "Could not add asset sub category: "+error);
		})
	}


	cancel() {
		let queryParams = {
			'catId': this.selectedCategoryId
		};
		this.router.navigate(['assets'], {queryParams});
	}

}
